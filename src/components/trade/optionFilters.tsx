"use client"
import TokenSelect from "@/components/trade/tokenSelect";
import DateRangePick from "@/components/trade/dateRangePick";
import PricePick from "@/components/trade/pricePick";
import { Button } from "@nextui-org/react";

export default function OptionFilters() {


  return (
      <div className='h- w-full flex justify-evenly items-center gap-unit-4 '>
        <TokenSelect label="Base Token" />
        <TokenSelect label="Quote Token" />
          <PricePick label="Min" />
          <PricePick label="Max" />
        <DateRangePick />
        <Button color="danger" className="self-end" endContent={<div className="h-full w-full text-2xl font-bold flex justify-center items-center">+</div>}>
          Add New
        </Button>
      </div>
  )
}
