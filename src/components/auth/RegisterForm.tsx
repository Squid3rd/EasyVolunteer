"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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
    Email: z.string().email(),
    Username: z.string().min(5).max(50),
    Password: z.string().min(8).max(100),
    ConfirmPassword: z.string().min(8).max(100),
  })
  .refine((data) => data.Password === data.ConfirmPassword, {
    message: "Password not Match",
    path: ["ConfirmPassword"],
  });

const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Firstname: "",
      Lastname: "",
      Phone: "",
      Email: "",
      Username: "",
      Password: "",
      ConfirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData: FormData = new FormData();

    formData.append("first_name", values.Firstname);
    formData.append("last_name", values.Lastname);
    formData.append("email", values.Email);
    formData.append("username", values.Username);
    formData.append("phone", values.Phone);
    formData.append("password", values.Password);

    try {
      const response = await fetch("api/auth", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response) {
        const data = await response.json();
        console.log("REGISTER_FORM:", data);
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("TRANSACTION_ENDING", formData);
    }
    
  }
  const router = useRouter();

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="Firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Firstname</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
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
                  <Input placeholder="" {...field} />
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
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem className="mt-[5px]">
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
            name="Username"
            render={({ field }) => (
              <FormItem className="mt-[5px]">
                <FormLabel>Username</FormLabel>
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
          <FormField
            control={form.control}
            name="ConfirmPassword"
            render={({ field }) => (
              <FormItem className="mt-[5px]">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="" type="password" {...field} />
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
              Sign up
            </Button>
          </div>
          <p className="mt-5 text-center text-sm text-gray-500">
            Do you already have an account?{" "}
            <span
              className="font-semibold leading-6 text-[#4BA8FF] hover:text-indigo-500 cursor-pointer"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login here !
            </span>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
