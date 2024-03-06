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

// const getTopics = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/topics", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }
//     // console.log(res.json());

//     return res.json();
//   } catch (error) {
//     console.log("Error loading topics: ", error);
//   }
// };

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

async function Profile() {

  return (
    <>
      <div>
        <ProfileComponent id={undefined} exdata={undefined} />
      </div>
    </>
  );
}

export default Profile;
