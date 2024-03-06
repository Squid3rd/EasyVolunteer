import ProfileComponent from "@/components/profile1/profilecomp";
import type { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FaPencil } from "react-icons/fa6";

async function ProfileId({ params }: any) {
  return (
    <>
      <div>
        <ProfileComponent id={undefined} exdata={undefined} />
      </div>
    </>
  );
}

export default ProfileId;
