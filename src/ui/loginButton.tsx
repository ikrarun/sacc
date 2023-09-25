'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const loginButton = () => {
  const { status: data } = useSession();
  if (data === "unauthenticated") {
    return (
      <button
        className="rounded-full duration-200 transition-all font-semibold text-xl bg-white text-black mix-blend-screen px-4 w-fit py-1 "
        onClick={(e) => {
          e.preventDefault();
          signIn("google");
        }}
      >
        Join Now &#8594;
      </button>
    );
  }
  if (data === "authenticated") {
    return (
      <button
        className="rounded-full duration-200 transition-all font-semibold text-xl bg-white text-black mix-blend-screen px-4 w-fit py-1 "
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
      >
        Go Now &#8594;
      </button>
    );
  }
  if (data === "loading") {
    return (
      <button
        className="rounded-full duration-200 transition-all font-semibold text-xl bg-white text-black mix-blend-screen px-4 w-fit py-1 "
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Plese wait &#8594;
      </button>
    );
  }
};

export default loginButton;
