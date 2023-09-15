"use client"
import { Input } from "@nextui-org/react";
import React from "react";

export default function PricePick({ label }: { label: string }) {

  return (
    <Input label="Strike Price" size="lg" labelPlacement="outside" placeholder={label} classNames={{
      base: "w-unit-36 rounded-xl",
      inputWrapper: "bg-sf3",
      label: "text-txt1",
    }} />
  );
}
