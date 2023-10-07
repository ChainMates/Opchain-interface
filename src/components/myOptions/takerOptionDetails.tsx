import { Button, CircularProgress, Chip } from "@nextui-org/react";
import { useState } from "react";
import { GlobalStates } from "@/libs/types";
import { useGlobalStates } from "@/app/providers";

export default function TakerOptionDetails() {

  const { option }: GlobalStates = useGlobalStates()

  return (
    <div className="w-full flex flex-col justify-items-center gap-unit-6">
      <div className="flex justify-items-center gap-unit-2">
        <p className="text-tx2">Base Token:</p>
        <p className="text-tx1">{option?.baseTokenAddress}</p>
      </div >
      <div className="self-center flex flex-col justify-items-center gap-unit-6">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
            base: "self-center ",
          }}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
        />
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          2600 USDC ready to collect
        </Chip>
      </div >
      <Button > Collect</Button>

    </div >
  )
}


