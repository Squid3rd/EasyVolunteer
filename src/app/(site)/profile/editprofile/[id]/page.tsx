import Editprofilecomp from "@/components/profile1/editprofilecomp";
import Link from "next/link";
import React from "react";
import { FaPencil } from "react-icons/fa6";

const getTopicById = async (id: any) => {
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
  
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

async function Editprofile({ params }: any) {
    const { id } = params;
    const data = await getTopicById(id);
  return (
    <Editprofilecomp id={id} exdata={data} />
  );
}

export default Editprofile;
