"use client"
import React from "react";
import NavBarItem from "./navBarItem";
import Link from "next/link";

export default function NavBar() {

  return (
    <div className="h-full w-full py-unit-8 pl-unit-10 flex flex-col justify-start items-start gap-unit-4 select-none">
      <div className="mb-unit-24 font-boo text-4xl text-txt4">
        opchain
      </div>

      <div className="mb-unit-2 mt-unit-12 font-bold text-xl text-txt4">
        Menu
      </div>
      <NavBarItem label={"Market"} id={"market"} address="market" />
      <NavBarItem label={"My options"} id={"myOptions"} address="myOptions" />
      <NavBarItem label={"My orders"} id={"myOrders"} address="myOrders" />

      <div className="mb-unit-2 mt-unit-12 font-bold text-xl text-txt4">
        Documents
      </div>
      <Link href="https://raw.githubusercontent.com/ChainMates/Opchain-core/e524c8d2acafbb16ddd7b508f111e5377dd9da96/whitepaper.pdf" target="_blank">
      <NavBarItem label={"WhitePaper"} id={"whitePaper"} address="" />
      </Link>
      <Link href="https://github.com/orgs/ChainMates/repositories" target="_blank">
        <NavBarItem label={"Github"} id={"github"} address="" />
      </Link>
    </div>
  );
}
