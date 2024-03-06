import Editprofilecomp from "@/components/profile1/editprofilecomp";
import Link from "next/link";
import React from "react";
import { FaPencil } from "react-icons/fa6";


async function Editprofile({ params }: any) {
  const id = 1;
  const data = null
  return (
    <Editprofilecomp id={id} exdata={data} />
  );
}

export default Editprofile;
