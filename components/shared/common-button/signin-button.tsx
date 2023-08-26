"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import Wrapper from "@/components/wapper";
import { useRouter } from "next/navigation";

const SignInButton = () => {
  const currentUser = useSession();
  const router = useRouter();

  return (
    <Wrapper>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={currentUser?.data?.user?.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" mt-[10px]">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/auth/register">
            <DropdownMenuItem className=" cursor-pointer">
              Create an Account
            </DropdownMenuItem>
          </Link>
          {currentUser ? (
            <DropdownMenuItem
              className=" cursor-pointer text-gray-700"
              onClick={() => router.push("/auth/signin")}
            >
              Login
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem
              className=" cursor-pointer text-gray-700"
              onClick={() => signOut()}
            >
              Logout
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </Wrapper>
  );
};

export default SignInButton;
