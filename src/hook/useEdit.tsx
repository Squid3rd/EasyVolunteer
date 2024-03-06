"use client"
import axios, { AxiosError, AxiosResponse } from "axios";
import { User } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";

const useEdit = () =>{
    return useMutation<AxiosResponse<{ message: string }>, AxiosError<{ message: string }>, User>({
        mutationFn: (UpdateProfile) => {
          return axios.put("/api/updateprofile", UpdateProfile);
        },
      });
}
export default useEdit