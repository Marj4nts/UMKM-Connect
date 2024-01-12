"use client";

import { LogIn, LogOut } from "lucide-react";
import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      onClick={() => signIn()}
      className="xs:px-2.5 sm:px-4 xs:py-2 sm:py-1.5 font-bold hover:underline text-white rounded-md hover:bg-gray-900 dark:bg-gray-700"
    >
      <div className="flex flex-row gap-2 items-center">
        <span className="sm:block">Login</span>
      </div>
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="sm:block xs:px-2.5 sm:px-4 xs:py-2 sm:py-1.5 font-bold hover:underline text-white rounded-md hover:bg-gray-900 dark:bg-gray-700"
    >
      <div className="flex flex-row gap-2 items-center">
        <span className="sm:block">Logout</span>
      </div>
    </button>
  );
};
