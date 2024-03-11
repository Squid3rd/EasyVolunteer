import { prisma } from "@/lib/prisma/connector"
import type { Prisma } from "@prisma/client"
import bcrypt from 'bcrypt'
const register = async (user: Prisma.UserCreateInput) => {
    console.log( " กำลังสมัครผู้ใช้งาน..")
    const {password} = user
    const saltRounds = '10'
    if(password) {
        console.log("hashing password")
        if (saltRounds) {
            const hashedPassword = bcrypt.hashSync(
              password.toString(),
              parseInt(saltRounds)
            );
            console.log(hashedPassword)
            user.password = hashedPassword
                
     }
    }
    const createUser = await prisma.user.create({
        data: {
            id : user.createdAt+user.email,
            email: user.email,
            name: user.name,
            lastname: user.lastname,
            createdAt: user.createdAt,
            phone: user.phone,
            password: user.password,
        },
    })
    return createUser
}
export default register