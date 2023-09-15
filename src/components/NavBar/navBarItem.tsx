"use client"
import React from "react";
import Svg from "../general/svg";
import { usePathname, useRouter } from 'next/navigation'



export default function NavBarItem({ label, id }: { label: string, id: string }) {

  const router = useRouter()
  const pathname = usePathname()

  const isSelected: boolean = pathname === "/"+id

  return (
    <div className={`h-unit-12 w-auto flex justify-center items-center gap-unit-5 text-base ${isSelected ? "text-txt1" : "text-txt2"} cursor-pointer`}
      onClick={() => { router.push("/" + id) }} >
      <Svg id={id} size="h-unit-8" className="fill-txt2" />
      <p>{label}</p>
    </div>
  );
}
