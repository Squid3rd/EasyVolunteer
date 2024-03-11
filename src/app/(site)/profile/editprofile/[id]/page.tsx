"use client";
import EditForm from "@/components/profile1/UpdateForm";
import Editprofilecomp from "@/components/profile1/editprofilecomp";
import Link from "next/link";
import React, { useState } from "react";
import { FaPencil } from "react-icons/fa6";

function Editprofile({ params }: any) {
  const [isUpdated, setIsUpdated] = useState(false);

  // Callback function to be called from RegisterForm upon successful registration
  const handleUpdateComplete = () => {
    setIsUpdated(true);
  };

  return (
    <div>
      <div className=" p-24 ">
        <div className=" flex justify-center items-center">
          <div className="w-full h-[450px] mt-[25px] flex justify-center">
            <div className="w-[360px] h-full">
              <div className="">

              <EditForm onUpdateComplete={handleUpdateComplete} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <Editprofilecomp id={id} exdata={data} />
  );
}

export default Editprofile;
