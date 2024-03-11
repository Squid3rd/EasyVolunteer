"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";

type Props = {};
const formSchema = z.object({
  Email: z.string().email(),
  Password: z.string().min(8).max(100),
});

const Login = (props: Props) => {

  const router = useRouter();
  const { toast: showToast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Email: "",
      Password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData: FormData = new FormData();

    formData.append("email", values.Email);
    formData.append("password", values.Password);

    console.log(values.Email);
    console.log(values.Password);
    signIn(
        "credentials",
        {
          redirect: false,
          email: values.Email,
          password : values.Password,
          callbackUrl: "/"
        }
      ).then((res) => {
        if (typeof res === "undefined") throw "ไม่สามารถเข้าสู่ระบบได้เนื่องจากไม่มีการตอบกลับ"; // เผื่อว่าไม่มี res
        const { error } = res;
        if (error) throw error; // ถ้า error ให้โยนไปที่ catch จัดการ
        showToast({
          description: <p>ยินดีต้อนรับ</p>,
        });
        router.push("/");
      }) .catch((err) => {
        console.log("🔴", err);
        if (err instanceof Error) err = err.message; // ปกติแล้วที่มันรับ error มาควรจะเป็น Error instance แต่ของ Nextuath ที่มันโยนมาแม้เราจะโยนเป็น Error instance แต่มันถูกปลี่ยนเป็น string เอง!?

        showToast({
          description: <p>เข้าสู่ระบบไม่สำเร็จ {err}</p>,
        });
      })
     
  }  
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Password"
            render={({ field }) => (
              <FormItem className="mt-[5px]">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="" type="password" {...field} />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <div>
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#3DA9FC] mt-7 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#90B4CE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Sign in
            </Button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            You still haven&apost had an Account yet?{" "}
            <span
              className="font-semibold leading-6 text-[#4BA8FF] hover:text-indigo-500 cursor-pointer"
              onClick={() => {
                router.push("/register");
              }}
            >
              Create here !
            </span>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default Login;
