import { signIn } from "next-auth/react";
import React from "react";

const AuthPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <button onClick={async ()=>{
        await signIn("google",{
            callbackUrl: "/dashboard"
        })
      }} className="px-4 py-2 bg-blue-500 text-2xl text-white rounded-lg">
        Sign in to Dashboard
      </button>
    </div>
  );
};

export default AuthPage;
