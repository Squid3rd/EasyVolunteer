import { prisma } from "@/lib/prisma/connector";
import { Prisma } from "@prisma/client";

export type ResponseGetUserType = Prisma.UserGetPayload<{
    select:{
        role:true,
        email:true,
        name:true,
        lastname:true,
        phone:true
    }

}>

export const getUser = async (email: string): Promise<ResponseGetUserType | null> => {
    const user = await prisma.user.findFirst({
        where: {
            email: email
        },
        select: {
            role: true,
            email: true,
            name: true,
            lastname: true,
            phone: true
        }
    });

    return user; 
};

