"use client"
import { Input } from "@nextui-org/react";
import React from "react";

export default function PricePick({ label, price, setPrice }: { label: string, price: number, setPrice: any }) {

  return (
    <Input label={`${label} Strike Price`}
      size="lg"
      labelPlacement="outside"
      placeholder={label}
      value={price.toString()}
      onValueChange={(value) => setPrice(Number(value))}
      classNames={{
        base: "w-unit-28 rounded-xl",
        inputWrapper: "bg-sf3",
        label: "text-txt1",
      }} />
  );
}
