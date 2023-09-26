"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { FcGoogle, FcRight } from "react-icons/fc";
const LoginButton = () => {
  const { status: data } = useSession();
  if (data === "unauthenticated") {
    return (
      <div className="flex flex-col w-fit gap-2">
        <h1 className="text-base">Sign in with google</h1>
        <span className="w-full border rounded-full border-white" />
        <button
          className="rounded-md aspect-square duration-200 transition-all inline-flex items-center justify-center font-semibold text-xl bg-white text-black  p-2 w-fit"
          onClick={(e) => {
            e.preventDefault();
            signIn("google");
          }}
        >
          {<FcGoogle size={30} />}
        </button>
      </div>
    );
  }
  if (data === "authenticated") {
    return (
      <div className="flex flex-col w-fit gap-2">
        <h1 className="text-base">Want to Sign Out?</h1>
        <span className="w-full border rounded-full border-white" />
        <button
          className="rounded-md aspect-square duration-200 transition-all inline-flex items-center justify-center font-semibold text-xl bg-white text-black  p-2 w-fit"
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          {<FcRight size={30} />}
        </button>
      </div>
    );
  }
  if (data === "loading") {
    return (

      <div className="flex flex-col w-fit gap-2">
      <h1 className="text-base">Please Wait</h1>
      <span className="w-full border rounded-full border-white" />
      <button
        className="rounded-md duration-200 transition-all inline-flex items-center justify-center font-semibold mix-blend-screen text-xl bg-white text-black  p-4 aspect-square w-fit"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <div className="inline-flex aspect-square h-6 animate-spin items-center justify-center rounded-full border-4 border-solid border-black border-current border-r-white transition-all duration-500" />
      </button>
    </div>
      
    );
  }
};

export default LoginButton;
