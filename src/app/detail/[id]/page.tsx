"use client"
import React from 'react'
import "../../globals.css"
import Image from 'next/image'
import Link from "next/link"
import MaxwidthWrapper from '@/components/MaxWidthWrapper'
import { Session } from 'inspector'
import { useSession, signOut } from "next-auth/react";
import Volunteeraccept from '@/components/Volunteeraccept'

export default function Page({ params }: { params: { id: string } }) {
  const { data: session, status } = useSession();
  return (
    <div className='flex flex-col'>
      <div className="3xl:container 3xl:mx-auto h-screen">
        <div className=" h-96 w-full bg-zinc-900 mb-24">
          <Image
            className='w-full h-full object-contain brightness-75'
            width={500}
            height={500}
            src="/main.jpg"
            alt="Picture of the author"
          />
          <p className="flex justify-center mt-5 font-semibold text-4xl transition-all hover:scale-125 hover:-translate-y-2">
            Task Name
            {/* ต่อ database */}
          </p>
        </div>
        <div className="md:mx-36 2xl:mx-96 mb-20 indent-16 hover:text-xl transition-all duration-500 hover:-translate-y-1">
          <p className='mx-12'>
            {/* รายละเอียดงานคร่าวๆ */}
            Ea culpa et quis minim dolore dolor labore duis incididunt magna
            aliqua sunt. Sit eiusmod amet minim laboris eu nisi aliqua nisi. Dolor
            fugiat cupidatat sit officia ut incididunt. Nulla ad ad ex et velit
            veniam id dolor quis. Anim reprehenderit et adipisicing ea est ea
            enim. Eu sit qui ea nulla dolor eu officia dolore dolor ipsum eiusmod
            amet aliquip aute. Aute ipsum adipisicing qui voluptate laboris.{ }
          </p>
        </div>
        <div className='md:h-40 2xl:h-64 h-28 transition-all mb-12 flex justify-center' >
          <Image
            className='h-full object-contain mx-2'
            width={500}
            height={500}
            src="/main.jpg"
            alt="Picture of the author"
          />
        </div>
        <div className="md:mx-36 2xl:mx-96">
          <p className="font-semibold text-xl mb-5">Requirement </p>
          <div className="mx-12">
            <p className="font-medium text-lg">เปิดรับสมัคร : </p>
            <p className="font-medium text-lg">ปิดรับสมัคร : { }</p>
            <p className="font-medium text-lg">จำนวน : { }</p>
            <p className="font-medium text-lg">คุณสมบัติ : { }</p>
            <p className="font-medium text-lg">ชั่วโมงจิตอาสา : { }</p>
            {/* <p className="font-medium text-lg">เปิดรับสมัคร : {}</p> */}
          </div>
        </div>

        <div className="flex justify-center" >
          <Volunteeraccept volunteer_id={params.id} user_role={session?.user.role} user_id={session?.user.id} />
        </div>

      </div>
    </div>
  )
}