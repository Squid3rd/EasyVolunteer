"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { UserVolunteer } from "@prisma/client";
import useVolunteer from '@/hook/useVolunteer';
import Volunteer from '@/hook/Volunteer';
import { useToast } from "@/components/ui/use-toast";



const Volunteeraccept = ({ volunteer_id, user_role, user_id }: any,) => {

    const { data, isLoading, error } = Volunteer();
    const [volunteers, setVolunteers] = useState<UserVolunteer[]>([]);

    useEffect(() => {
        if (data) {
            setVolunteers(data.data);
        }
    }, [data]);

    const vol_id = volunteer_id

    const fillter = volunteers.filter((values) => {
        return values.id == vol_id + " : " + user_id
    })

    const acceptor = useVolunteer();
    const { toast: showToast } = useToast();
    async function Submition() {
        const formData: FormData = new FormData();
        formData.append("user_id", user_id);
        formData.append("volunteer_id", vol_id);

        const useVol: UserVolunteer = {
            id: vol_id + " : " + user_id,
            volunteer_id: vol_id,
            user_id: user_id,
        }

        acceptor.mutate(
            useVol,
            {
                onSuccess(data) {
                    showToast({
                        description: "คุณได้ทำการสมัครเรียบร้อยแล้ว",
                        variant: "default",

                    });
                    // router.push("/");
                },
                onError(data) {
                    showToast({
                        description: `Fail!${data}`,
                        variant: "default",
                    });
                }
            }
        )

    }
    return (
        <form onSubmit={Submition}>
            <div>

                {
                    fillter.length > 0 && user_role && (
                        <button className="btn drop-shadow-md bg-slate-200 cursor-not-allowed" disabled>
                            คุณได้สมัครไปเรียบร้อยแล้ว{ }
                        </button>
                    )
                }
                {
                    fillter.length == 0 && user_role && (
                        <button className="btn btn-green drop-shadow-lg transition-all hover:-translate-y-1 hover:scale-110">
                            เข้าร่วม{ }
                        </button>
                        // onClick={() => { Submition() }}
                    )
                }
                {
                    !user_role && (
                        <Link href="/login">
                            <button className="btn btn-blue drop-shadow-lg transition-all hover:-translate-y-1 hover:scale-110 disabled">
                                Login
                            </button>
                        </Link>
                    )
                }
            </div>
        </form>
    )
}

export default Volunteeraccept