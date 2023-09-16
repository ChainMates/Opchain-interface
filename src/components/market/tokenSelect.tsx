"use client"
import React, { Dispatch, Key, SetStateAction } from "react";
import { Select, SelectItem, Avatar, Chip, Selection } from "@nextui-org/react";
import { getTokens } from "@/artifacts/tokens";
import { GlobalStates, Option } from "@/libs/types";
import { useGlobalStates } from "@/app/providers";
import { isIn } from "@/libs/tools";


export default function TokenSelect({ label, tokens, setTokens }: { label: string, tokens: Set<Key>, setTokens: any }) {

  const { chainId }: GlobalStates = useGlobalStates()

  const shownTokens = getTokens(chainId || 137)

  return (
    <Select
      items={shownTokens}
      label={label}
      variant="flat"
      isMultiline={true}
      selectionMode="multiple"
      placeholder="Select a token"
      labelPlacement="outside"
      size="lg"
      onSelectionChange={(newTokens: Selection) => {
        if (typeof newTokens !== "string" && setTokens)
          setTokens(newTokens)
      }}
      classNames={{
        base: "min-h-unit-12 w-unit-48 max-w-xs",
        trigger: "py-2 bg-sf3",
        label: "text-txt1",
        listbox: "bg-sf1",
        listboxWrapper: "bg-sf1 rounded-lg",
      }}
      scrollShadowProps={{
        isEnabled: false
      }}
      renderValue={(items) => {
        return (
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <Chip key={item.data?.symbol}
                variant="flat"
                avatar={
                  <Avatar
                    name="T"
                    src={item.data?.logoURI}
                  />
                }
              >{item.data?.symbol}
              </Chip>
            ))}
          </div>
        );
      }}
    >
      {(token =>
        <SelectItem key={token.symbol as string} textValue={token.name}>
          <div className="flex gap-2 items-center">
            <Avatar alt={token.name} className="flex-shrink-0" size="sm" src={token.logoURI} />
            <div className="flex flex-col">
              <span className="text-small">{token.symbol}</span>
              <span className="text-tiny text-[#94a3b8]">{token.name}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}

