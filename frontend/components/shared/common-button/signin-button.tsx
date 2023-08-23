"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const SignInButton = () => {
  const currentUser = useSession();

  return (
    <div className=" w-32 flex items-center border border-theme-light-gray rounded-xl  p-1">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <AiOutlineMenu size={24} className=" text-white" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" mt-[10px]">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/signup">
            <DropdownMenuItem className=" cursor-pointer">
              Create an Account
            </DropdownMenuItem>
          </Link>
          {!currentUser.data?.user.name && (
            <DropdownMenuItem
              className=" cursor-pointer"
              onClick={() => signIn()}
            >
              Login
            </DropdownMenuItem>
          )}

          <DropdownMenuItem
            className=" cursor-pointer"
            onClick={() => signOut()}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SignInButton;
