import Link from "next/link";
import React from "react";

const HeaderMenu = ({ config }) => {
  return (
    <div>
      <nav className="hidden md:flex space-x-8">
        {config.content.header_menu.map((item, index) => (
          <Link href={item.link.url} key={index}>
            <p className="text-gray-700 hover:text-gray-900 text-2xl">
              {item.name}
            </p>
          </Link>
        ))}
      </nav>
      <div className="md:hidden">
        <button className="text-gray-700 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeaderMenu;
