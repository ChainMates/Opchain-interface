"use client"
import { Option } from "@/libs/types";
import React, { useState } from "react";

export default function OptionListItem({ baseTokenSym, quoteTokenSym, strikePrice, expDate }: Option) {

  return (
    <div className="h-unit-24 w-unit-72 bg-sf5 flex justify-center items-start">
      <div>{baseTokenSym}</div>
    </div>
  );
}
