"use client"
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User, Button, dropdownSection } from "@nextui-org/react";
import Svg from "./svg";
import { useGlobalStates } from "@/app/providers";

export default function UserMenu() {

  const { isWalletConnected }: { isWalletConnected?: boolean } = useGlobalStates()

  return (
    <div className="flex items-center gap-4">

      <Dropdown placement="bottom-start"
        classNames={{
          base: "bg-sf1",
        }}
      >
        <DropdownTrigger>
          <div className="flex gap-4 items-center">
            {
              isWalletConnected ?
                <div className="flex justify-items-center">
                  <User
                    as="button"
                    avatarProps={{
                      isBordered: true,
                      src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                    }}
                    className="flex-row-reverse transition-transform"
                    description="@tonyreichert"
                    name="Tony Reichert"
                  />
                  <Svg id={"arrow"} size="h-unit-8" className="fill-txt2" />
                </div>
                :
                <Button color="success">
                  <p>Connect Wallet</p>
                </Button>}
          </div>
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">@tonyreichert</p>
          </DropdownItem>
          <DropdownItem key="settings">
            My Settings
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">
            Analytics
          </DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div >
  );
}
