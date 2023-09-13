"use client"
import TokenSelect from "@/components/trade/tokenSelect";
import DateRangePick from "@/components/trade/dateRangePick";
import PriceRangePick from "@/components/trade/priceRangePick";
import OptionListItem from "@/components/trade/optionListItem";
import OptionList from "@/components/trade/optionList";

export default function Options() {



  return (
    <>
      <div className='h-1/5 w-full  flex justify-center items-center gap-unit-4 '>
        <TokenSelect label="Base Token" />
        <TokenSelect label="Quote Token" />
        <div className="flex flex-col justify-center items-start gap-unit-1">
          <label>Strike Price</label>
          <PriceRangePick label="Min" />
          <PriceRangePick label="Max" />
        </div>
        <DateRangePick />
      </div>
      <div className='h-4/5 w-full flex justify-center items-center gap-unit-1'>
        <OptionList />
      </div>
    </>
  )
}
