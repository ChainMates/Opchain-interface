"use client"
import React from "react";
import NavBarItem from "./navBarItem";

export default function NavBar() {

  return (
    <div className="h-full w-full py-unit-8 pl-unit-10 flex flex-col justify-start items-start gap-unit-4">
      <div className="mb-unit-24 font-boo text-4xl text-txt2">
        opchain
      </div>

      <div className="mb-unit-2 mt-unit-12 font-bold text-xl text-txt1">
        Menu
      </div>
      <NavBarItem label={"Market"} id={"market"} />
      <NavBarItem label={"My options"} id={"myOptions"} />
      <NavBarItem label={"My orders"} id={"myOrders"} />

      <div className="mb-unit-2 mt-unit-12 font-bold text-xl text-txt1">
        Documents
      </div>
      <NavBarItem label={"documents"} id={"docs"} />
      <NavBarItem label={"Terms of Service"} id={"termsOfService"} />
    </div>
  );
}
