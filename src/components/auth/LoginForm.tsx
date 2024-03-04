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

    try {
      const response = await fetch("api/auth", {
        method: "PUT",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response) {
        const data = await response.json();
        console.log("LOGIN_FORM:", data);
        
        showToast({
          description: "Login success!",
          variant: "default",
        });
        
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("TRANSACTION_ENDING", formData);
    }
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
            You still haven't had an Account yet? <br></br>{" "}
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
