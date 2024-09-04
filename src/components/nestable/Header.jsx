import Link from "next/link";
import React from "react";
import HeaderMenu from "./HeaderMenu";

const Header = ({ config }) => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-5">
        <Link href="/">
          <img
            src={config?.content?.logo}
            width={"100px"}
            className="hover:opacity-50 ease-in-out duration-300"
          ></img>{" "}
        </Link>

        <HeaderMenu config={config}></HeaderMenu>
      </div>
    </header>
  );
};

export default Header;
