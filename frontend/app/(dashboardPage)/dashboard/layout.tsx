import React from "react";
import "../../globals.css";
import Sidebar from "../../../components/dashboard/sidebar/Sidebar";
import Navbar from "@/components/dashboard/navbar/navbar";
import ProviderContainer from "@/components/shared/provider/Provider";
import ToasterProvider from "@/components/shared/provider/ToasterProvider";

export const metadata = {
  title: "Sneak-Hive | dashboard",
  description: "Created to sell Sneakers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <ProviderContainer>
          <ToasterProvider />
          <Navbar />
          <div className=" flex">
            <Sidebar />
            <div className="p-4 flex-1 max-h-[calc(100vh-80px)] overflow-y-auto">
              {children}
            </div>
          </div>
        </ProviderContainer>
      </body>
    </html>
  );
}
