import { Key, useState } from "react";
import TokenSelect from "./tokenSelect";
import PricePick from "./pricePick";
import DatePick from "./datePick";
import DatepickerType from "react-tailwindcss-datepicker/dist/types/index";
import { GlobalStates, OptionTypes } from "@/libs/types";
import TypeSwitch from "./typeSwitch";
import { Button } from "@nextui-org/react";
import { useGlobalStates } from "@/app/providers";

export default function AddNewOption() {

  const { chainId }: GlobalStates = useGlobalStates()

  const [baseToken, setBaseToken] = useState<Set<Key>>(new Set([]))
  const [quoteToken, setQuoteToken] = useState<Set<Key>>(new Set([]))
  const [type, setType] = useState<OptionTypes>(OptionTypes.American)
  const [strikePrice, setStrikePrice] = useState<number>(0)

  const [date, setDate] = useState<DatepickerType.DateValueType>({
    startDate: null,
    endDate: null
  })

  const baseTokensArray = Array.from(baseToken ? baseToken : new Set([]))
  const quoteTokensArray = Array.from(quoteToken ? quoteToken : new Set([]))

  return (
    <div className="self-center flex flex-col justify-items-center gap-unit-6">
      <TokenSelect labelColor="text-txt4" single={true} label="Base Token" tokens={baseToken} setTokens={setBaseToken} />
      <TokenSelect labelColor="text-txt4" single={true} label="Quote Token" tokens={quoteToken} setTokens={setQuoteToken} />
      <div className="flex justify-items-center gap-unit-4">
        <PricePick labelColor="text-txt4" label=" " price={strikePrice} setPrice={setStrikePrice} />
        <TypeSwitch labelColor="text-txt4" hasBoth={false} value={type} setValue={setType} />
      </div>
      <DatePick labelColor="text-txt4" single={true} value={date} setValue={setDate} showShortcuts={true} />

      <Button color="primary" onPress={() => {
        fetch('/api/createOption', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chainId,
            baseTokenAddress: baseTokensArray[0],
            quoteTokenAddress: quoteTokensArray[0],
            strikePrice,
            expirationDate: date?.startDate,
            isAmerican: type === 0 ? true : false,
          })

        })
      }} >Create option</Button>

    </div>
  )
}