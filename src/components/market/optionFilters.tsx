"use client"
import TokenSelect from "@/components/market/tokenSelect";
import DateRangePick from "@/components/market/dateRangePick";
import PricePick from "@/components/market/pricePick";
import { Button } from "@nextui-org/react";
import { GlobalStates } from "@/libs/types";
import { useGlobalStates } from "@/app/providers";

export default function OptionFilters() {

  const { baseTokens, setBaseTokens, quoteTokens, setQuoteTokens, minPrice, setMinPrice, maxPrice, setMaxPrice }: GlobalStates = useGlobalStates()

  return (
    <div className='h- w-full flex justify-evenly items-center gap-unit-4 '>
      <TokenSelect label="Base Token" tokens={baseTokens || new Set([])} setTokens={setBaseTokens} />
      <TokenSelect label="Quote Token" tokens={quoteTokens || new Set([])} setTokens={setQuoteTokens} />
      <PricePick label="Min" price={minPrice || 0} setPrice={setMinPrice} />
      <PricePick label="Max" price={maxPrice || 0} setPrice={setMaxPrice} />
      <DateRangePick />
      <Button color="primary" className="mt-unit-5" size="sm" endContent={<div className="h-full w-full text-2xl font-bold flex justify-center items-center">+</div>}>
        Add New
      </Button>

    </div>
  )
}
