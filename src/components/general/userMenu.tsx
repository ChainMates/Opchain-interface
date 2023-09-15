"use client"
import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User, Button, dropdownSection } from "@nextui-org/react";
import Svg from "./svg";
import { useGlobalStates } from "@/app/providers";
import { ConnectMmWallet } from "@/libs/metaMask";
import { GlobalStates } from "@/libs/types";

export default function UserMenu() {

  const { isConnected, account }: GlobalStates = useGlobalStates()
  const [isConnecting, setConnecting] = useState<boolean>(false)

  return (
    <div className="flex items-center gap-4">
      {
        isConnected ?
          <div className="p-unit-3 bg-sf2 rounded-xl flex justify-items-center gap-unit-2">
            <Svg id={"metaMask"} size="h-unit-6" className="fill-txt2" />
            <>{`${account?.slice(0,6)}...${account?.slice(-4)}`}</>
          </div>
          :
          <Button isLoading={isConnecting} onClick={async () => {
            setConnecting(true)
            await ConnectMmWallet()
            setConnecting(false)
          }} color="success">
            <p>Connect Wallet</p>
          </Button>}
      {/* <Svg id={"arrow"} size="h-unit-8" className="fill-txt2" /> */}
      {/* classNames={{
                  base: "bg-sf1",
                }} */}
    </div >
  );
}
