"use client"
import React from 'react'
import "../../globals.css"
import Image from 'next/image'
import Link from "next/link"
import MaxwidthWrapper from '@/components/MaxWidthWrapper'
import { Session } from 'inspector'
import { useSession, signOut } from "next-auth/react";
import Volunteeraccept from '@/components/Volunteeraccept'
// import { GetStaticPaths, GetStaticProps } from 'next';
import mockdata1 from '../../../../public/mockdataevent.json'


export default function Page({ params }: { params: { id: string } }) {
  const { data: session, status } = useSession();
  console.log(session);
  console.log("Mdata = ",mockdata1)

  const volunteerData = mockdata1.find((item: { id: string }) => item.id === params.id);

  console.log("Data 1 = ", volunteerData)

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
            {volunteerData?.vol_name}
            {/* ต่อ database */}
          </p>
        </div>
        <div className="md:mx-36 2xl:mx-96 mb-20 indent-16 hover:text-xl transition-all duration-500 hover:-translate-y-1">
          <p className='mx-12'>
            {/* รายละเอียดงานคร่าวๆ */}
            {volunteerData?.vol_detail}
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
            <p className="font-medium text-lg">เปิดรับสมัคร : 10</p>
            <p className="font-medium text-lg">ปิดรับสมัคร : 19/10/2567</p>
            <p className="font-medium text-lg">จำนวน : 99</p>
            <p className="font-medium text-lg">คุณสมบัติ : เป็นคนจิตใจดีงาม ชอบช่วยเหลือผู้อื่น</p>
            <p className="font-medium text-lg">ชั่วโมงจิตอาสา : 5</p>
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
