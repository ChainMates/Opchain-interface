"use client"
import { GlobalStates, Option } from "@/libs/types";
import { useGlobalStates } from "@/app/providers";
import React from "react";
import { useDisclosure, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Chip, User, Pagination, SortDescriptor, Modal, ModalContent, ModalBody, ModalHeader, ModalFooter, Spacer, Tabs, Tab, Input, } from "@nextui-org/react";

import { getTokens } from "@/artifacts/tokens";
import OrderBook from "./orderBook";

export default function OptionList() {

  const { optionList, chainId, baseTokens, quoteTokens, minPrice, maxPrice }: GlobalStates = useGlobalStates()
  const baseTokensArray = Array.from(baseTokens ? baseTokens : new Set([]))
  const quoteTokensArray = Array.from(quoteTokens ? quoteTokens : new Set([]))
  const tokens = getTokens(chainId || 137)
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "strikePrice",
    direction: "ascending",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMode, setSelectedMode] = React.useState("buy");

  const [page, setPage] = React.useState(1);

  let filteredItems = optionList ? [...optionList] : []

  if (baseTokensArray.length > 0) {
    filteredItems = filteredItems.filter(
      option => baseTokensArray.includes(option.baseTokenSym)
    )
  }

  if (quoteTokensArray.length > 0) {
    filteredItems = filteredItems.filter(
      option => quoteTokensArray.includes(option.quoteTokenSym)
    )
  }

  if (minPrice && minPrice !== 0) {
    filteredItems = filteredItems.filter(
      option => option.strikePrice >= minPrice
    )
  }

  if (maxPrice && maxPrice !== 0) {
    filteredItems = filteredItems.filter(
      option => option.strikePrice >= maxPrice
    )
  }

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column as keyof typeof Option];
      const second = b[sortDescriptor.column as keyof typeof Option];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((option: Option, columnKey: string) => {

    const baseToken = tokens.find(({ symbol }) => symbol === option.baseTokenSym)
    const quoteToken = tokens.find(({ symbol }) => symbol === option.quoteTokenSym)
    switch (columnKey) {
      case "baseToken":
        return (
          <User
            avatarProps={{ radius: "lg", src: baseToken?.logoURI }}
            description={baseToken?.name}
            name={baseToken?.symbol}
          >
          </User>
        );
      case "quoteToken":
        return (
          <User
            avatarProps={{ radius: "lg", src: quoteToken?.logoURI }}
            description={quoteToken?.name}
            name={quoteToken?.symbol}
          >
          </User>
        );
      case "strikePrice":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{option.strikePrice}</p>
            <p className="text-bold text-tiny capitalize text-default-400">{quoteToken?.symbol}</p>
          </div>
        );
      case "expDate":
        return (
          <Chip className="capitalize" color={"success"} size="sm" variant="flat">
            {option.expDate}
          </Chip>
        );
      case "actions":
        return (
          <Button size="sm" color="primary" variant="solid" onPress={() => onOpen()} >
            View order book
          </Button>
        );
      default:
        return <></>
    }
  }, []);


  const onRowsPerPageChange = React.useCallback((ev: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(ev.target.value))
    setPage(1)
  }, [])


  const topContent = React.useMemo(() => {
    return (
      <></>
    );
  }, [
    onRowsPerPageChange,
    filteredItems.length,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="w-full relative py-2 px-2 flex">
        <Pagination isCompact showControls showShadow color="primary" page={page} total={pages} onChange={setPage} />
      </div>
    );
  }, [items.length, page, pages]);
  return (
    <>
      <Table
        aria-label="Option List"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="inside"
        classNames={{
          wrapper: "h-full bg-sf3/30",
          th: "bg-sf2/40",
          base: "h-full"
        }}
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="inside"
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={[
          { name: "BASE TOKEN", uid: "baseToken", sortable: false },
          { name: "QUOTE TOKEN", uid: "quoteToken", sortable: false },
          { name: "STRIKE PRICE", uid: "strikePrice", sortable: true },
          { name: "EXPIRATION DATE", uid: "expDate", sortable: true },
          { name: "ACTIONS", uid: "actions" },
        ]}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No Options found"} items={sortedItems}>
          {(item) => (
            <TableRow key={item.baseTokenSym + item.quoteTokenSym + item.strikePrice + item.expDate}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey as string)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Modal
        size={"lg"}
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        classNames={{ base: "bg-sf6" }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Option's order book</ModalHeader>
              <ModalBody>
                <div className="flex justify-items-center">
                  <OrderBook isAccending={true} color="from-danger" gradiant="bg-gradient-to-l" />
                  <OrderBook isAccending={false} color="from-success" gradiant="bg-gradient-to-r" />
                </div>
                <Tabs
                  color={selectedMode === "buy" ? "success" : "danger"}
                  fullWidth
                  size="md"
                  selectedKey={selectedMode}
                  onSelectionChange={() => setSelectedMode(prev => prev === "buy" ? "sell" : "buy")}
                >
                  <Tab key="buy" title="Buy">
                    <form className="flex flex-col gap-4">
                      <Input classNames={{ inputWrapper: "bg-sf5" }} isRequired label="Size" type="number" />
                      <Input classNames={{ inputWrapper: "bg-sf5" }} isRequired label="price" type="number" />
                      <div className="flex gap-2 justify-end">
                        <Button fullWidth color="success">
                          buy
                        </Button>
                      </div>
                    </form>
                  </Tab>
                  <Tab key="sell" title="Sell">
                    <form className="flex flex-col gap-4">
                      <Input classNames={{ inputWrapper: "bg-sf5" }} isRequired label="Size" type="number" />
                      <Input classNames={{ inputWrapper: "bg-sf5" }} isRequired label="price" type="number" />
                      <div className="flex gap-2 justify-end">
                        <Button fullWidth color="danger">
                          sell
                        </Button>
                      </div>
                    </form>
                  </Tab>
                </Tabs>
              </ModalBody>
              <ModalFooter>
                <></>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
