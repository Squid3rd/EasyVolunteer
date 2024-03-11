"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useCreateForm from "@/hook/useCreateForm";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import type { FormUser } from "@prisma/client";
import { useSession, signOut } from "next-auth/react";


const answerValidationSchema = z
  .string()
  .min(10, "Answer must be at least 10 characters.")

const formSchema = z.object({
  Answer_1: answerValidationSchema,
  Answer_2: answerValidationSchema,
  Answer_3: answerValidationSchema,
  Answer_4: answerValidationSchema,
});
type Props = {};

const QuestionForm = (props: Props) => {
  const createForm = useCreateForm()
  const { data: session, status } = useSession();
  const { toast: showToast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Answer_1: "",
      Answer_2: "",
      Answer_3: "",
      Answer_4: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData: FormData = new FormData();
    
    formData.append("answer_1", values.Answer_1);
    formData.append("answer_2", values.Answer_2);
    formData.append("answer_3", values.Answer_3);
    formData.append("answer_4", values.Answer_4);
    const form : FormUser = {
      id: session?.user.email as string,
      question1 : values.Answer_1,
      question2 : values.Answer_2,
      question3 : values.Answer_3,
      squestion4 : values.Answer_4
    }

    createForm.mutate(
      form,
      {
        onSuccess(data){
          showToast({
            description: "Register success!",
            variant: "default",
            
          });
          router.push("/");
        },
        onError(data){
          showToast({
            description: `Register Fail!${data}`,
            variant: "default",
          });
        }
      }
    )
  }
  
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="Answer_1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Why are you interested in volunteering?</FormLabel>
                <FormControl>
                  <Textarea placeholder="" className="resize-none" {...field} />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <div className="mt-5"></div>
          <FormField
            control={form.control}
            name="Answer_2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  What do you hope to gain from your volunteer experience?
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="" className="resize-none" {...field} />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <div className="mt-5"></div>
          <FormField
            control={form.control}
            name="Answer_3"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Which of our programs or activities are you most interested
                  in, and why?
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="" className="resize-none" {...field} />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <div className="mt-5"></div>
          <FormField
            control={form.control}
            name="Answer_4"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Please list any skills or qualifications that you feel would
                  benefit our volunteer program.
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="" className="resize-none" {...field} />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />

          <div className="mt-8 flex justify-center w-full h-[40px]">
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

export default QuestionForm;
