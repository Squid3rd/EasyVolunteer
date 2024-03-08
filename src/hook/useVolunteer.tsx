"use client"
import axios, { AxiosError, AxiosResponse } from "axios";
import { UserVolunteer } from "@prisma/client"
import { useMutation } from "@tanstack/react-query";

const useVolunteer = () => {
    return useMutation<AxiosResponse<{ message: string }>, AxiosError<{ message: string }>, UserVolunteer>({
        mutationFn: (Volunteer) => {
            console.log("useVol" + Volunteer.id)
            return axios.post("/api/volunteer", Volunteer);
        },
    });
}
export default useVolunteer