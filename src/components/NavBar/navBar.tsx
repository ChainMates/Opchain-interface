"use client"
import React from "react";
import Svg from "../general/svg";
import NavBarItem from "./navBarItem";

export default function NavBar() {
  return (
    <div className="h-full w-full py-unit-48 pl-unit-12 flex flex-col justify-center items-start gap-unit-4">
      <NavBarItem label={"trade"} svgId={"trade"} />
      <NavBarItem label={"Options"} svgId={"trade"} />
      <NavBarItem label={"Orders"} svgId={"trade"} />
    </div>
  );
}
