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
import { useParams, useRouter } from "next/navigation";

const SignInButton = () => {
  const currentUser = useSession();
  const router = useRouter();
  console.log({ currentUser });
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
          {currentUser?.data?.user?.role == "ADMIN" && (
            <Link href="/dashboard/create-admin">
              <DropdownMenuItem className="cursor-pointer ">
                Add Admin
              </DropdownMenuItem>
            </Link>
          )}
          {!currentUser?.data?.user ? (
            <DropdownMenuItem
              className="text-gray-700 cursor-pointer "
              onClick={() => router.push("/auth/signin")}
            >
              Login
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem
              className="text-gray-700 cursor-pointer "
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
