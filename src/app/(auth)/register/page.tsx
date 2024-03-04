"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import RegisterForm from "@/components/auth/RegisterForm";
import QuestionForm from "@/components/auth/QuestionForm";

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  // Callback function to be called from RegisterForm upon successful registration
  const handleRegistrationComplete = () => {
    setIsRegistered(true);
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-white">
      <div style={{ minWidth: "30%" }}>
        <div
          className="flex shadow-lg flex-1 flex-col justify-center px-6 pt-[2em] pb-[15em] lg:px-8 bg-white rounded-md overflow-auto"
          style={{ maxHeight: "90vh" }}
        >
          <h1 className="text-[24px] ml-[30px] mt-[15px] font-semibold">
            Create you Account
          </h1>
          <div className="w-full h-[450px] mt-[25px] flex justify-center">
            <div className="w-[360px] h-full">
              {/* Here is RegisterForm and QuestionForm components */}
              {/* <RegisterForm/> 
              <QuestionForm/> */}
              {!isRegistered ? (
                <RegisterForm
                  onRegistrationComplete={handleRegistrationComplete}
                />
              ) : (
                <QuestionForm />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
