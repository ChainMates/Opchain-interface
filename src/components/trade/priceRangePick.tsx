"use client"
import { Input } from "@nextui-org/react";
import React from "react";

export default function PriceRangePick({ label }: { label: string }) {

  return (
    <Input label={label} classNames={{
      base:"w-unit-36 bg-sf3 rounded-xl",
      label: "text-txt4",
    }}
    />
  );
}
