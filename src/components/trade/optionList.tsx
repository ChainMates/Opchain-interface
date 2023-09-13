"use client"
import { Option } from "@/libs/types";
import React, { useState } from "react";
import OptionListItem from "./optionListItem";

export default function OptionList() {

  const options: Option[] = [{
    baseToken: "WETH",
    quoteToken: "USDC",
    strikePrice: 2000,
    expirationDate: "2023-09-13",
  }]

  return (
    <div className='w-full'>
      {options.map(({ baseToken, quoteToken, strikePrice, expirationDate }) =>
        <OptionListItem baseToken={baseToken} quoteToken={quoteToken} strikePrice={strikePrice} expirationDate={expirationDate} />
      )}
    </div>
  );
}
