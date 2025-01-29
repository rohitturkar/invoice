"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, File, LayoutTemplate, Plus } from "lucide-react";
import { useState } from "react"; // Import useState for dropdown toggling



const menuItems = [
  { name: "Dashboard", icon: BarChart3, path: "/dashboard" },
  {
    name: "Invoices",
    icon: File,
    path: "/dashboard/invoice-history",
  },
  {
    name: "Create",
    icon: Plus,
    path: "/dashboard/create-invoice",
   
   
  },
  {
    name: "Templates",
    icon: LayoutTemplate,
    path: "/dashboard/templates",
   
   
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const role = "admin";
  

  return (
    <div className="flex flex-col w-60 bg-black   rounded-2xl border shadow-2xl text-white">
      <div className="flex px-6 py-2 mt-4  items-center  text-2xl justify-start mb-10 ">
       Invocify
      </div>

      <nav className="flex-1 pt-2 pb-4">
        <ul className="space-y-3 px-4">
          {(role === "admin" ? menuItems : localAdminMenu).map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center py-2.5 px-2  ${
                    isActive
                      ? "text-white rounded-xl bg-violet-400"
                      : "text-white hover:bg-white/10 backdrop-blur-md"
                  }`}
                >
                  <Icon className="w-6 h-6 mr-3" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
