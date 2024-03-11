import { prisma } from "@/lib/prisma/connector"
import type { Prisma } from "@prisma/client"

const form = async (form: Prisma.FormUserCreateInput) => {
  try {
    const createForm = await prisma.formUser.create({
      data: form, // Use the entire form object directly
    });
    return createForm;
  } catch (error) {
    console.error(error);
    return null; // Return null on error
  }
}
export default form