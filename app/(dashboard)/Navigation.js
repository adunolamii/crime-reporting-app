"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

function Navigation() {
  const [label, setLabel] = useState("");
  const routes = [
    {
      id: 1,
      href: "/report",
      label: "Crime-Reports",
    },
    {
      id: 2,
      href: "/trends",
      label: "Crime-Trends",
    },
    {
      id: 3,
      href: "/sharing",
      label: "Crime-Sharing",
    },
    {
      id: 4,
      href: "/safety",
      label: "Safety-Tips",
    },

  
   
  ];
  const [showLabels, setShowLabels] = useState(false);
  const toggleLabels = () => {
    setShowLabels((prev) => !prev);
  };
  return (
    <div className="flex items-center gap-2 overflow-x-auto">
      
      <button
        className="p-2 bg-gray-200 rounded-full lg:hidden"
        onClick={toggleLabels}
      >
        <span role="img" aria-label="icon">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>{" "}
        
      </button>

      {showLabels && (
        <div className="flex flex-col gap-2 lg:hidden">
          {routes.map((route) => (
            <Link key={route.id} href={route.href}>
              <p
                className={`hover:text-purple-600 hover:bg-black text-gray-200 font-medium p-5 cursor-pointer rounded-lg ${
                  route.href === label ? "text-blue-600" : ""
                }`}
              >
                {route.label}
              </p>
            </Link>
          ))}
        </div>
      )}

  
      <div className="hidden lg:flex">
        {routes.map((route) => (
          <Link key={route.href} href={route.href}>
            <h3 className="hover:text-purple-600 hover:bg-black flex gap-2 text-gray-200 font-medium p-5 cursor-pointer rounded-lg">
              {route.label}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
