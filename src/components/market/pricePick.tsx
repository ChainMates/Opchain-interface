"use client"
import { Input } from "@nextui-org/react";
import React from "react";

export default function PricePick({ label, labelColor, price, setPrice }: { label: string, labelColor: string, price: number, setPrice: any }) {

  return (
    <Input label={`${label} Strike Price`}
      size="lg"
      type="number"
      labelPlacement="outside"
      placeholder={label}
      value={price.toString()}
      onValueChange={(value) => setPrice(Number(value))}
      classNames={{
        base: "w-unit-28 rounded-xl",
        inputWrapper: "bg-sf5 hover:bg-sf1/50 text-txt2 hover:text-txt4 placeholder-current transform duration-300 rounded-lg",
        label: labelColor,
      }} />
  );
}
