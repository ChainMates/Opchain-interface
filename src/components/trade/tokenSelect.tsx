"use client"
import React from "react";
import { Select, SelectItem, Avatar, Chip } from "@nextui-org/react";
import { getTokens } from "@/artifacts/tokens";
import { Option } from "@/libs/types";
import { useGlobalStates } from "@/app/providers";


export default function TokenSelect({ label }: { label: string }) {

  const { optionList, chainId }: { optionList?: Option[], chainId?: number } = useGlobalStates()
  const tokens = getTokens(chainId || 137)

  return (
    <Select
      items={tokens}
      label={label}
      variant="flat"
      isMultiline={true}
      selectionMode="multiple"
      placeholder="Select a token"
      labelPlacement="outside"
      size="lg"
      classNames={{
        base: "min-h-unit-12 w-unit-60 max-w-xs",
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
              <Chip key={item.key}
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
        <SelectItem key={token.address} textValue={token.name}>
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

