import { prisma } from "@/lib/prisma/connector";
import { Prisma } from "@prisma/client";

export type ResponseGetVol = Prisma.UserVolunteerGetPayload<{
    select: {
        id: true,
        volunteer_id: true,
        user_id: true
    }

}>

export const getVolunteer = async (): Promise<ResponseGetVol[] | null> => {
    const userVol = await prisma.userVolunteer.findMany();
    return userVol.map(userVolunteer => ({
        id: userVolunteer.id,
        volunteer_id: userVolunteer.volunteer_id,
        user_id: userVolunteer.user_id
    }));
};

