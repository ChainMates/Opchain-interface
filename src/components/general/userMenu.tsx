"use client"
import React, { useState } from "react";
import { Button } from "@nextui-org/react";

import Svg from "./svg";
import { useGlobalStates } from "@/app/providers";
import { ConnectWallet } from "@/libs/metaMask";
import { GlobalStates } from "@/libs/types";

export default function UserMenu() {


  const { isConnected, account }: GlobalStates = useGlobalStates()
  const [isConnecting, setConnecting] = useState<boolean>(false)


  return (
    <div className="flex items-center gap-unit-2">
      {

        isConnected ?
            <div className="p-unit-3 bg-sf5 text-txt1 rounded-xl flex justify-items-center gap-unit-2">
              <Svg id={"metaMask"} size="h-unit-6" />
              {`${account?.slice(0, 6)}...${account?.slice(-4)}`}
            </div>



          :
          <Button isLoading={isConnecting}
          className="p-5"
          onClick={async () => {
            setConnecting(true)
            await ConnectWallet()
            setConnecting(false)
          }} color="secondary">
            <p className="text-lg text-txt4">Connect Wallet</p>
          </Button>}
      {/* <Svg id={"arrow"} size="h-unit-8" className="fill-txt2" /> */}
      {/* classNames={{
                  base: "bg-sf1",
                }} */}
    </div >
  );
}
