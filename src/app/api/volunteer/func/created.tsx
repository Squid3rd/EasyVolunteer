import { prisma } from "@/lib/prisma/connector"
import type { Prisma } from "@prisma/client"
const created = async (UserVolunteer: Prisma.UserVolunteerCreateInput) => {
    console.log(" กำลังสมัคร....")
    const createVolunteer = await prisma.userVolunteer.create({
        data: {
            id: UserVolunteer.id,
            volunteer_id: UserVolunteer.volunteer_id,
            user_id: UserVolunteer.user_id,

        },
    })
    return createVolunteer
}
export default created