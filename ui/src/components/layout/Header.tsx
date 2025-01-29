"use client";

import { Bell, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  
  const router = useRouter();
  
  // States to control dropdown visibility with a single useState
  const [dropdowns, setDropdowns] = useState({
    notification: false,
    user: false
  });

  const handleLogout = () => {
   
  };

  const toggleDropdown = () => {
    setDropdowns((prev) => ({
      // Close the other dropdown when one is opened
      notification: type === "notification" ? !prev.notification : false,
      user: type === "user" ? !prev.user : false
    }));
  };

  return (
    <header className="h-20  flex items-center justify-between px-6">
      <div className="flex-1 pl-20 ">
        <input
          type="text"
          placeholder="Search..."
          className="w-[70%] px-6 py-3 rounded-xl border hidden border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
       
      </div>
      <div className="flex items-center space-x-4 relative">
        {/* Notifications Button */}
        <button
          onClick={() => toggleDropdown("notification")}
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-100"
        >
          <Bell className="w-5 h-5 text-gray-600" />
        </button>

        {/* Notification Dropdown */}
        {dropdowns.notification && (
          <div className="absolute right-0 mt-24 p-2 w-56 bg-white shadow-lg rounded-lg border border-gray-300">
            <div>
              <p className="text-sm text-gray-600">You have no new notifications.</p>
            </div>
          </div>
        )}

        {/* User Profile Avatar */}
        <button
          onClick={() => toggleDropdown("user")}
          className="p-2 rounded-md bg-violet-400 "
        >
          <User className="w-5 h-5 text-white" />
        </button>

        {/* User Profile Dropdown */}
        {dropdowns.user && (
          <div className="absolute right-0 mt-28 p-2 w-28 bg-white shadow-lg rounded-lg border border-gray-300">
            <div className='space-y-2' >
              <button
                onClick={handleLogout}
                className="text-sm  w-full text-left"
              >
                Account
              </button>
              <button
                onClick={handleLogout}
                className="text-sm text-violet-400 w-full text-left"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
