"use client"
import TokenSelect from "@/components/market/tokenSelect";
import DateRangePick from "@/components/market/datePick";
import PricePick from "@/components/market/pricePick";
import { Button } from "@nextui-org/react";
import { GlobalStates } from "@/libs/types";
import { useGlobalStates } from "@/app/providers";
import TypeSwitch from "./typeSwitch";


export default function OptionFilters() {

  const { baseTokens, setBaseTokens, quoteTokens, setQuoteTokens, minPrice,
    setMinPrice, maxPrice, setMaxPrice, type, setType, dateRange, setDateRange, setModalId }: GlobalStates = useGlobalStates()

  return (
    <div className='h- w-full flex justify-evenly items-center gap-unit-4 select-none'>
      <TokenSelect single={false} label="Base Token" labelColor="text-txt1" tokens={baseTokens || new Set([])} setTokens={setBaseTokens} />
      <TokenSelect single={false} label="Quote Token" labelColor="text-txt1" tokens={quoteTokens || new Set([])} setTokens={setQuoteTokens} />
      <PricePick label="Min" labelColor="text-txt1" price={minPrice || 0} setPrice={setMinPrice} />
      <PricePick label="Max" labelColor="text-txt1" price={maxPrice || 0} setPrice={setMaxPrice} />
      <DateRangePick labelColor="text-txt1" single={false} value={dateRange || { startDate: null, endDate: null }} setValue={setDateRange} showShortcuts={true} />
      <TypeSwitch labelColor="text-txt1" hasBoth={true} value={type || 0} setValue={setType} />
      <Button onPress={() => { setModalId ? setModalId("addNewOption") : "" }} color="primary" className="mt-unit-5" size="sm" endContent={<div className="h-full w-full text-2xl font-bold flex justify-center items-center">+</div>}>
        Add New
      </Button>

    </div>
  )
}
