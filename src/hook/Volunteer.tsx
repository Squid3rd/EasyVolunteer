"use client"
import axios from "axios";
import type { AxiosResponse, AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { UserVolunteer } from "@prisma/client"


const Volunteer = () => {
    return useQuery<{ message: string; data: UserVolunteer[] }, { message: string }>({
        queryKey: ["getVolunteer"],
        queryFn: async () => {
            const response = await axios.get<{ message: string; data: UserVolunteer[] }>("/api/volunteer");
            return response.data;
        },
    });
};

export default Volunteer;