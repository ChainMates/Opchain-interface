"use client"
import OptionFilters from "@/components/market/optionFilters";
import OptionList from "@/components/market/optionList";

export default function Market() {


  return (
    <>
      <div className='h-full w-full p-unit-4 flex flex-col justify-center items-start gap-unit-3'>
        <OptionFilters />
        <OptionList />
      </div>
    </>
  )
}
