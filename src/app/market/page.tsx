"use client"
import OptionFilters from "@/components/market/optionFilters";
import OptionList from "@/components/market/optionList";
import { GlobalStates } from "@/libs/types";
import { useGlobalStates } from "../providers";
import dayjs from 'dayjs'

export default function Market() {

  const { options, baseTokens, quoteTokens, minPrice, maxPrice, type, dateRange }: GlobalStates = useGlobalStates()
  const baseTokensArray = Array.from(baseTokens ? baseTokens : new Set([]))
  const quoteTokensArray = Array.from(quoteTokens ? quoteTokens : new Set([]))

  let filteredItems = options ? [...options] : []
  if (type !== 2) {
    filteredItems = filteredItems.filter(
      option => option.isAmerican === (type === 0)
    )
  }

  if (baseTokensArray.length > 0) {
    filteredItems = filteredItems.filter(
      option => baseTokensArray.includes(option.baseTokenAddress)
    )
  }

  if (baseTokensArray.length > 0) {
    filteredItems = filteredItems.filter(
      option => baseTokensArray.includes(option.baseTokenAddress)
    )
  }

  if (quoteTokensArray.length > 0) {
    filteredItems = filteredItems.filter(
      option => quoteTokensArray.includes(option.quoteTokenAddress)
    )
  }

  if (minPrice && minPrice !== 0) {
    filteredItems = filteredItems.filter(
      option => option.strikePrice >= minPrice
    )
  }

  if (maxPrice && maxPrice !== 0) {
    filteredItems = filteredItems.filter(
      option => option.strikePrice <= maxPrice
    )
  }

  if (dateRange?.startDate !== null && dateRange?.endDate !== null) {
    filteredItems = filteredItems.filter(
      option => (dayjs(option.expDate).isSame(dateRange?.startDate) || dayjs(option.expDate).isAfter(dateRange?.startDate)) &&
        (dayjs(option.expDate).isBefore(dateRange?.endDate) || dayjs(option.expDate).isSame(dateRange?.endDate))
    )
  }


  return (
    <>
      <div className='h-full w-full p-unit-4 flex flex-col justify-center items-start gap-unit-3'>
        <OptionFilters />
        <OptionList options={filteredItems} btnModalId="orderBook" btnTitle="View Order Book" />
      </div>
    </>
  )
}
