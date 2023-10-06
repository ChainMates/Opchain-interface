"use client"
import { Tab, Tabs } from "@nextui-org/react";
import OptionList from "@/components/market/optionList";
import { useState } from "react";
import { GlobalStates } from "@/libs/types";
import { useGlobalStates } from "@/app/providers";

export default function MyOptions() {

  const { userOptions }: GlobalStates = useGlobalStates()
  const [selectedMode, setSelectedMode] = useState("buy")

  return (
    <>
      <div className='h-full w-full p-unit-4 flex flex-col justify-start items-start gap-unit-3'>
        <Tabs
          color="primary"
          fullWidth
          size="lg"
          selectedKey={selectedMode}
          onSelectionChange={() => setSelectedMode(prev => prev === "taker" ? "maker" : "taker")}
          classNames={{ base: "w-auto",tabList:"bg-sf1" }}
        >
          <Tab key="taker" title="Options taken" className="h-full w-full">
            <OptionList options={userOptions ? userOptions.taker : []} btnModalId="takerOptionDetails" btnTitle="View Option Details" />
          </Tab>
          <Tab key="maker" title="Options made" className="h-full w-full">
            <OptionList options={userOptions ? userOptions.maker : []} btnModalId="makerOptionDetails" btnTitle="View Option Details" />
          </Tab>
        </Tabs>
      </div>
    </>
  )
}
