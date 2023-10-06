"use client"
import Svg from "../general/svg";
import { OptionTypes } from "@/libs/types";

export default function TypeSwitch({ labelColor, hasBoth, value, setValue }: { labelColor: string, hasBoth: boolean, value: OptionTypes, setValue: any }) {

  return (
    <div onClick={() => { setValue ? setValue(((value || 0) + 1) % (hasBoth ? 3 : 2)) : () => { } }} className="flex flex-col justify-start items-center cursor-pointer gap-unit-1">
      <p className={labelColor + " select-none"}>{OptionTypes[value || 0]}</p>
      <div className="h-unit-10 p-2 flex flex-col bg-sf2/30 justify-items-center rounded-xl">
        <Svg id={value === 0 ? "american" : value === 1 ? "european" : "both"} className="h-unit-12" />
      </div>
    </div >
  )

}