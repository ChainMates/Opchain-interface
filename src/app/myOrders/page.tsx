"use client"
import { useState } from "react";
import { GlobalStates } from "@/libs/types";
import { useGlobalStates } from "@/app/providers";
import OrderList from "@/components/myOrders/orderList";

export default function MyOrders() {

  const { userOptions }: GlobalStates = useGlobalStates()

  return (
    <>
      <div className='h-full w-full p-unit-4 flex flex-col justify-start items-start gap-unit-3'>
        <OrderList options={userOptions ? userOptions.taker : []} btnModalId="takerOptionDetails" btnTitle="View Option Details" />
      </div>
    </>
  )
}
