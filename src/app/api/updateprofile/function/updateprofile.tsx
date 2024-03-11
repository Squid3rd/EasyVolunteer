import { prisma } from "@/lib/prisma/connector";
import type { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";
const updateprofile = async (user: Prisma.UserCreateInput) => {
  console.log(" กำลังอัพเดท..");
  console.log(user)
//   const { password } = user;
//   const saltRounds = "10";
//   if (password) {
//     console.log("hashing password");
//     if (saltRounds) {
//       const hashedPassword = bcrypt.hashSync(
//         password.toString(),
//         parseInt(saltRounds)
//       );
//       console.log(hashedPassword);
//       user.password = hashedPassword;
//     }
//   }
  const updateUser = await prisma.user.update({
    where: {
      email: user.email,
    },
    data: {
      name: user.name,
      lastname: user.lastname,
      phone: user.phone,
    },
  });
  return updateUser;
};
export default updateprofile;
