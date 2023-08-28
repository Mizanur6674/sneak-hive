"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Wrapper from "@/components/wapper";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SignInButton = () => {
  const { data }: any = useSession();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Wrapper>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="  h-6 w-6 p-4 text-theme-secondary border border-theme-light-gray rounded-full bg-white flex items-center justify-center shadow-md">
            {data?.user ? (
              data?.user?.name.charAt(0).toUpperCase()
            ) : (
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
              </Avatar>
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" mt-[10px]">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {!pathname.startsWith("/dashboard") && data?.user && (
            <Link href="/my-orders">
              <DropdownMenuItem className="text-gray-600 cursor-pointer">
                My Orders
              </DropdownMenuItem>
            </Link>
          )}
          {pathname.startsWith("/dashboard") &&
            data?.user?.role === "ADMIN" && (
              <Link href="/dashboard/create-admin">
                <DropdownMenuItem className="text-gray-600 cursor-pointer ">
                  Add Admin
                </DropdownMenuItem>
              </Link>
            )}
          {!data?.user ? (
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
