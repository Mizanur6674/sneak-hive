"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { dashboardSidebarData } from "../../shared/data/data";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="sb pt-10 pl-4 space-y-8 bg-theme-primary h-screen w-56 cursor-pointer ">
      {dashboardSidebarData.map((item, index) => {
        return (
          <div
            key={index}
            className="sb flex items-center gap-x-3"
            onClick={() => router.push(item.href)}
          >
            <item.icon
              size={20}
              className=" text-theme-light-gray hover:text-white"
            />
            <h5 className=" text-theme-light-gray hover:text-white hover:transition-all text-xl">
              {item.title}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
