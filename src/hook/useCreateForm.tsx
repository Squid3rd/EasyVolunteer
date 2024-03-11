"use client"
import axios, { AxiosError, AxiosResponse } from "axios";
import {  FormUser } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";

const useCreateForm = () =>{
    return useMutation<AxiosResponse<{ message: string }>, AxiosError<{ message: string }>, FormUser>({
        mutationFn: (Form) => {
          return axios.post("/api/form", Form);
        },
      });
}
export default useCreateForm 