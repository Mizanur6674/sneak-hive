"use client";
import SignInButton from "@/components/shared/common-button/signin-button";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { BsFillBellFill, BsMoonFill, BsSunFill } from "react-icons/bs";

const Navbar = () => {
  const currentUser = useSession();

  const { setTheme, theme } = useTheme();

  console.log({ currentUser });

  return (
    <div className="flex items-center justify-between w-full h-20 px-4  bg-theme-primary">
      <div className="flex items-center  gap-x-2">
        <div className="relative w-6 h-6 ">
          <Image src="/logo.svg" fill alt="mainLogo" />
        </div>
        <h5 className=" text-xl text-theme-light-green font-bold leading-[45px] ">
          Sneak
        </h5>
      </div>

      <div className="flex items-center  gap-x-4">
        {theme === "dark" ? (
          <BsSunFill
            onClick={() => setTheme("light")}
            size={32}
            className="text-white cursor-pointer "
          />
        ) : (
          <BsMoonFill
            onClick={() => setTheme("dark")}
            size={32}
            className="text-white cursor-pointer "
          />
        )}
        <SignInButton />
      </div>
    </div>
  );
};

export default Navbar;
