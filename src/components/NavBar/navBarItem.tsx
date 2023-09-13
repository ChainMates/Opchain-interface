"use client"
import React from "react";
import Svg from "../general/svg";

export default function NavBarItem({ label, svgId }: { label: string, svgId: string }) {
  return (
    <div className="h-unit-12 w-auto flex justify-center items-center gap-unit-4 text-xl text-txt3">
      <Svg id={svgId} size="h-full" className="fill-white" />
      <p>{label}</p>
    </div>
  );
}
