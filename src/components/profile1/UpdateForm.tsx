"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useEdit from "@/hook/useEdit";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { User } from "@prisma/client";
import Link from "next/link";

const formSchema = z
  .object({
    Firstname: z.string().min(2).max(50),
    Lastname: z.string().min(2).max(50),
    Phone: z
      .string()
      .min(1, { message: "Phone number is required" })
      .min(10, { message: "Incorect Phone number" })
      .max(10, { message: "Incorect Phone number" })
      .refine((val) => !isNaN(val as unknown as number), {
        message: "Phone number should be a number",
      }),
  })

interface EditFormProps {
  onUpdateComplete: () => void; // Function to be called upon successful Update
}

const handleSubmit = async (event: { preventDefault: () => void }) => {
  event.preventDefault();

  // Perform Update logic...
  // If Update is successful:
  onUpdateComplete(); // Call the passed function after successful Update
};

const EditForm: React.FC<EditFormProps> = ({ onUpdateComplete }) => {
  const { data: session, status } = useSession();
  console.log(session);

  const editUser = useEdit();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Firstname: "",
      Lastname: "",
      Phone: "",
    },
  });

  const { toast: showToast } = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData: FormData = new FormData();

    console.log("fname = ", values.Firstname);
    console.log("lname = ", values.Lastname);
    console.log("phone = ", values.Phone);

    formData.append("first_name", values.Firstname);
    formData.append("last_name", values.Lastname);
    formData.append("phone", values.Phone);
    const date = new Date();
    // const emailuser = session?.user
    const userData: Omit<User, "id" | "role" | "password"> = {
      createdAt: date,
      name: values.Firstname,
      lastname: values.Lastname,
      phone: values.Phone,
      email: session?.user.email as string
    };

    editUser.mutate(userData as User, {
      onSuccess(data) {
        showToast({
          description: "Edit success!",
          variant: "default",
        });
      },
      onError(data) {
        showToast({
          description: `Edit Fail!${data}`,
          variant: "default",
        });
      },
    });

    console.log("formData = ", formData);
  }
  const router = useRouter();
  return (
    <div>
        <div className="mt-7 flex justify-end w-full h-[40px]">
            <Link href={"/profile/1"}>
              <Button className="flex w-full justify-end rounded-md bg-[#da5252] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#90B4CE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                X
              </Button>
            </Link>
          </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="Firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Firstname</FormLabel>
                <FormControl>
                  <Input placeholder={session?.user.name} {...field} />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Lastname"
            render={({ field }) => (
              <FormItem className="mt-[5px]">
                <FormLabel>Lastname</FormLabel>
                <FormControl>
                  <Input placeholder={session?.user.lastname} {...field} />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Phone"
            render={({ field }) => (
              <FormItem className="mt-[5px]">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder={session?.user.phone} {...field} />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <div className="mt-7 flex justify-center w-full h-[40px]">
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#3DA9FC] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#90B4CE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Submit
            </Button>
          </div>
        
        </form>
      </Form>
    </div>
  );
};

export default EditForm;

function onUpdateComplete() {
  throw new Error("Function not implemented.");
}
