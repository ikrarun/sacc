"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { MdExitToApp } from "react-icons/md";
import { host } from "&/host";
import { Session } from "next-auth";

const LoginButton = ({ data }: { data: Session | null }) => {
  if (!data) {
    return (
      <div className="flex flex-col w-fit gap-2">
        <h1 className="text-base">Sign in with google</h1>
        <span className="w-full border rounded-full border-gray-400" />
        <button
          className="rounded-md aspect-square duration-200 transition-all inline-flex items-center justify-center font-semibold text-xl bg-white border-2 border-gray-400  text-black  p-2 w-fit"
          onClick={(e) => {
            e.preventDefault();
            signIn("google", { callbackUrl: `${host}/` });
          }}
        >
          {<FcGoogle size={25} />}
        </button>
      </div>
    );
  }
  if (data) {
    return (
      <div className="flex flex-col w-fit gap-2">
        <h1 className="text-base">Want to Sign Out?</h1>
        <span className="w-full border rounded-full border-gray-400" />
        <button
          className="rounded-md aspect-square duration-200 transition-all inline-flex items-center justify-center font-semibold text-xl bg-white border-2 border-gray-400  text-black  p-2 w-fit"
          onClick={(e) => {
            e.preventDefault();
            signOut({ callbackUrl: `${host}` });
          }}
        >
          {<MdExitToApp size={25} />}
        </button>
      </div>
    );
  }
};

export default LoginButton;
