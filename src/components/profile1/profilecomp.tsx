"use client";

import Link from "next/link";
import React from "react";
import { FaPencil } from "react-icons/fa6";

function ProfileComponent({ id, exdata }: any) {
  // console.log("EXDATA = ", exdata);
  // console.log("id = ", id);

  // const dataProp = exdata;

  // const editlink = '/profile/editprofile/' +  dataProp.topic._id;
  // console.log("editlink = ", editlink);
  return (
    <>
      <main className=" min-h-screen bg-[#094067]">
            <div className=" p-32" >
              <div className=" flex justify-center items-center">
                <div className=" p-8 bg-[#FEFEFE] rounded-md">
                  <div className="grid grid-cols-2">
                    <div className="p-3">
                      <div>
                        <img
                          className="rounded-xl w-[13rem] h-[13rem] m-10"
                          src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                          alt="image description"
                        />
                      </div>
                    </div>
                    <div className="p-2">
                      <div>
                        <p className=" font-semibold text-2xl">
                          {/* {dataProp.topic.first_name + " " + dataProp.topic.last_name} */}
                          <Link href={""} >
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
                          {/* <p>Phone : {dataProp.topic.phone}</p> */}
                        </div>
                        <div>
                          {/* <p>Email : {dataProp.topic.email}</p> */}
                        </div>
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
