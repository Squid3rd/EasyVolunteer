"use client"
import axios, { AxiosError, AxiosResponse } from "axios";
import { User } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";

const useRegister = () =>{
    return useMutation<AxiosResponse<{ message: string }>, AxiosError<{ message: string }>, User>({
        mutationFn: (Register) => {
          return axios.post("/api/register", Register);
        },
      });
}
export default useRegister