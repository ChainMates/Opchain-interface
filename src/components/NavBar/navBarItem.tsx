"use client"
import React from "react";
import Svg from "../general/svg";

export default function NavBarItem({ label, svgId }: { label: string, svgId: string }) {
  return (
    <div className="h-unit-12 w-auto flex justify-center items-center gap-unit-5 text-xl text-txt2 cursor-pointer">
      <Svg id={svgId} size="h-unit-8" className="fill-txt2" />
      <p>{label}</p>
    </div>
  );
}
