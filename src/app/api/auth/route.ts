import { NextRequest, NextResponse } from "next/server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import mockUser from "@/lib/mockUser.json";
import bcrypt from "bcrypt";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1800 sec from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function POST(request: NextRequest): Promise<any> {
  const data = request.formData();
  const first_name = (await data).get("first_name");
  const last_name = (await data).get("last_name");
  const email = (await data).get("email");
  const username = (await data).get("username");
  const phone = (await data).get("phone");
  let password = (await data).get("password");
  try {

    if(password){
      if (process.env.BCRYPT_SALT !== undefined) {
        password = bcrypt.hashSync(
          password.toString(),
          parseInt(process.env.BCRYPT_SALT)
        );
      }
      let userData = {
        user_id: "1",
        first_name: first_name,
        last_name: last_name,
        email: email,
        username: username,
        password: password,
        phone: phone,
        role: "normal",
      };
      console.log("userData:", userData)
      return NextResponse.json({
        userData: userData,
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function login(userData: { email: string; username?: string }) {
  // Verify credentials && get the user

  const user = { email: userData.email, name: userData.username };

  // Create the session
  const expires = new Date(Date.now() + 1800 * 1000);
  const session = await encrypt({ user, expires });
  console.log("Create session", session);
  // Save the session in a cookie

  cookies().set("session", session, { expires, httpOnly: true });

  return { session, expires };
  // localStorage.setItem("session",session)
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}

export async function PUT(request: NextRequest): Promise<any> {
  const data = request.formData();
  const email = (await data).get("email");
  const password = (await data).get("password");
  console.log("Email:", email);
  console.log("Password:", password);
  try {
    const filteredUsers = mockUser.filter(
      (user: { email: string }) => user.email === email
    );

    if (filteredUsers.length > 0) {
      if (password) {
        const match = await bcrypt.compare(
          password.toString(),
          filteredUsers[0].password
        );
        if (match) {
          console.log(filteredUsers);
          const { session, expires } = await login({
            email: filteredUsers[0].email,
            username: filteredUsers[0].username,
          });

          // console.log("Session&Expires: ", session, expires)

          return NextResponse.json({
            DATA_LOGIN: filteredUsers,
            Session: session,
          });
        }
      } else {
        console.log("Wrong Email or Password");
        return NextResponse.json({
          message: "Wrong Email or Password",
        });
      }
    } else {
      console.log("User not found");
      return NextResponse.json({
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function GET() {
  try {
    console.log("GET_METHOD");
    return NextResponse.json({
      MOCK_USER: mockUser,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
