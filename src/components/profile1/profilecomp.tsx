"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPencil } from "react-icons/fa6";

function ProfileComponent({ id, exdata }: any) {
  const { data: session, status } = useSession();
  console.log("This Session = ", session);
  console.log("USER", session?.user)

  return (
    <>
      <main className=" min-h-screen bg-[#094067]">
        <div className=" p-32">
          <div className=" flex justify-center items-center">
            <div className=" p-8 bg-[#FEFEFE] rounded-md">
              <div className="grid grid-cols-2">
                <div className="p-3">
                  <div>
                    <Image
                      className="rounded-xl w-[13rem] h-[13rem] m-10"
                      width={250}
                      height={250}
                      src="/profile.jpg"
                      alt="image description"
                    />
                  </div>
                </div>
                <div className="p-2">
                  <div>
                    <p className=" font-semibold text-2xl">
                    {session?.user.name} {session?.user.lastname} 
                      <Link href={"/profile/editprofile/1"}>
                        <button className="ml-10 bg-slate-700 p-2 rounded-md hover:bg-slate-300">
                          <FaPencil />
                        </button>
                      </Link>
                    </p>
                  </div>
                  <div className="my-5 p-2 bg-[#D9D9D9] rounded-md">
                    {/* <p>Event hrs : {dataProp.topic.vol_hrs} </p> */}
                  </div>
                  <div className="p-5 bg-[#D9D9D9] rounded-md">
                    <div className=" text-xl font-semibold">Contact</div>
                    <div className="h-1 p-1/4 bg-black my-2"></div>
                    <div>
                      <p>Phone : {session?.user.phone}</p>
                    </div>
                    <div><p>Email : {session?.user.email}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProfileComponent;
