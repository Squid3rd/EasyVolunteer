import React, { useEffect } from "react";
import LoginForm from "@/components/auth/LoginForm";
type Props = {};

const Login = async (props: Props) => {

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div style={{ minWidth: "30%" }}>
        <div className="flex min-h-full shadow-lg flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login with Password
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
