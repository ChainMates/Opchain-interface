"use client"
import React, { Key } from "react";
import { Select, SelectItem, Avatar, Chip, Selection } from "@nextui-org/react";
import { getTokens } from "@/artifacts/tokens"
import { defaultChainId } from "@/artifacts/chains";
import { GlobalStates } from "@/libs/types";
import { useGlobalStates } from "@/app/providers";


export default function TokenSelect({ label, labelColor, tokens, setTokens, single }:
  { label: string, labelColor: string, tokens: Set<Key>, setTokens: any, single: boolean }) {

  const { chainId }: GlobalStates = useGlobalStates()

  const shownTokens = getTokens(chainId || defaultChainId)

  return (
    <Select
      items={shownTokens}
      label={label}
      variant="flat"
      isMultiline={true}
      selectionMode={single ? "single" : "multiple"}
      placeholder="Select a token"
      labelPlacement="outside"
      size="lg"
      onSelectionChange={(newTokens: Selection) => {
        if (typeof newTokens !== "string" && setTokens)
          setTokens(newTokens)
      }}
      classNames={{
        base: "min-h-unit-12 w-unit-48 max-w-xs",
        trigger: "py-2 bg-sf5 text-txt2 group-hover:bg-sf1/50 group-hover:text-txt4 placeholder-current transform duration-300 rounded-lg",
        label: labelColor,
        listbox: "bg-sf1 ",
        listboxWrapper: "rounded-lg",
      }}
      scrollShadowProps={{
        isEnabled: false
      }}
      renderValue={(items) => {
        return (
          <div className="flex flex-wrap gap-2 text-txt4">
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
        <SelectItem key={token.address as string} textValue={token.name} className="text-txt4" >
          <div className="flex gap-2 items-center">
            <Avatar alt={token.name} className="flex-shrink-0" size="sm" src={token.logoURI} />
            <div className="flex flex-col">
              <span className="text-small text-txt4">{token.symbol}</span>
              <span className="text-tiny text-txt3">{token.name}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}

