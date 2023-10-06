"use client"
import React from "react";
import { Modal, ModalBody, ModalContent, ModalHeader, ModalFooter } from "@nextui-org/react";
import SellerOptionDetails from "../myOptions/makerOptionDetails";
import BuyerOptionDetails from "../myOptions/takerOptionDetails";
import OrderBook from "../market/orderBook";

import { useGlobalStates } from "@/app/providers";
import { GlobalStates } from "@/libs/types";
import AddNewOption from "../market/AddnewOption";

export default function GlobalModal() {

  const { modalId, setModalId }: GlobalStates = useGlobalStates();


  let content: React.ReactNode
  let title: string
  let size: "sm" | "3xl" | "lg" | "xs" | "md" | "xl" | "2xl" | "4xl" | "5xl" | "full" | undefined = "sm"

  switch (modalId) {
    case "makerOptionDetails":
      title = "Option Details"
      size = "sm"
      content = <SellerOptionDetails />
      break
    case "takerOptionDetails":
      title = "Option Details"
      size = "sm"
      content = <BuyerOptionDetails />
      break
    case "orderBook":
      title = "Order Book"
      size = "3xl"
      content = <OrderBook />
      break
    case "addNewOption":
      title = "Add New Option"
      size = "sm"
      content = <AddNewOption />
      break
    default:
      break;
  }

  return (
    <Modal
      size={size}
      backdrop="blur"
      isOpen={modalId !== ""}
      onClose={() => { setModalId ? setModalId("") : "" }}
      classNames={{ base: "bg-sf1/90" }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              {content}
            </ModalBody>
            <ModalFooter>
              <></>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
