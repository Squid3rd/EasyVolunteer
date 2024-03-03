import ProfileComponent from "@/components/profile1/profilecomp";
import type { GetStaticPropsContext, GetStaticPropsResult } from "next";
import Link from "next/link";
import React from "react";
import { FaPencil } from "react-icons/fa6";

type Post = {
  _id: String;
  user_name: String;
  first_name: String;
  last_name: String;
  email: String;
  phone: String;
  vol_hrs: Number;
};

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

// async function getData() {
//   try {
//     const response = await fetch("http://localhost:3000/api/getUser");
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null; // or handle the error in an appropriate way
//   }
// }
// interface ProfileProps {
//   content: string;
// }

async function ProfileId({ params }: any) {
  const { id } = params;
  console.log(id)
  const data = await getTopicById(id);
  const { user_img, username, first_name, last_name, email, phone, vol_hrs } = data;
//   console.log(data);
  return (
    <>
      <div>
        <ProfileComponent id={id} exdata={data} />
      </div>
    </>
  );
}

export default ProfileId;
