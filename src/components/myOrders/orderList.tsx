"use client"
import { GlobalStates, Option } from "@/libs/types";
import { useGlobalStates } from "@/app/providers";
import React from "react";
import {
  Table, TableHeader, TableColumn, TableBody, TableRow,
  TableCell, Button, Chip, User, Pagination, SortDescriptor,
} from "@nextui-org/react";

import { getTokens } from "@/artifacts/tokens";
import { defaultChainId } from "@/artifacts/chains";

export default function OrderList({ options, btnTitle, btnModalId }:
  {
    options: Option[], btnTitle: string, btnModalId: string,
  }) {


  const { chainId, setOption, setModalId }: GlobalStates = useGlobalStates()

  const tokens = getTokens(chainId || defaultChainId)
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "strikePrice",
    direction: "ascending",
  });


  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(options.length / rowsPerPage)

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return options.slice(start, end);
  }, [page, options, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column as keyof typeof Option];
      const second = b[sortDescriptor.column as keyof typeof Option];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((option: Option, columnKey: string) => {

    const baseToken = tokens.find(({ address }) => address === option.baseTokenAddress)
    const quoteToken = tokens.find(({ address }) => address === option.quoteTokenAddress)
    switch (columnKey) {
      case "baseToken":
        return (
          <User
            avatarProps={{ radius: "full", src: baseToken?.logoURI }}
            classNames={{ name: "text-txt1", description: "text-txt2" }}
            description={baseToken?.name}
            name={baseToken?.symbol}
          >
          </User>
        );
      case "quoteToken":
        return (
          <User
            avatarProps={{ radius: "full", src: quoteToken?.logoURI }}
            classNames={{ name: "text-txt1", description: "text-txt2" }}
            description={quoteToken?.name}
            name={quoteToken?.symbol}
          >
          </User>
        );
      case "strikePrice":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize text-txt1">{option.strikePrice}</p>
            <p className="text-bold text-tiny capitalize text-txt2">{quoteToken?.symbol}</p>
          </div>
        );
      case "expDate":
        return (
          <Chip className="capitalize" color={"secondary"} size="sm" variant="flat">
            {option.expDate}
          </Chip>
        );
      case "type":
        return (
          <Chip className="capitalize" color={"secondary"} size="sm" variant="flat">
            {option.isAmerican ? "American" : "European"}
          </Chip>
        );
      case "actions":
        return (
          <Button size="sm" color="primary" variant="solid" onPress={() => {
            if (setOption && setModalId) {
              setOption(option)
              setModalId(btnModalId)
            }
          }} >
            {btnTitle}
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
    options.length,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="w-full relative py-2 px-2 flex">
        <Pagination isCompact showControls showShadow color="primary" page={page} total={pages} onChange={setPage} classNames={{wrapper:"bg-sf1/80"}} />
      </div>
    );
  }, [items.length, page, pages]);

  return (
    <Table
      aria-label="Option List"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="inside"
      classNames={{
        wrapper: "h-full bg-sf6/60",
        th: "bg-sf1 text-txt4 hover:text-txt3",
        base: "h-full w-full"
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
        { name: "TYPE", uid: "type", sortable: false },
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
      <TableBody emptyContent={
        <>
          <p>No Options found</p>
          <Button onPress={() => { setModalId ? setModalId("addNewOption") : "" }} color="primary" className="mt-unit-5" size="sm" >
            Create The Option You Want To Sell
          </Button>
        </>
      } items={sortedItems}>
        {(item) => (
          <TableRow key={item.baseTokenAddress + item.quoteTokenAddress + item.strikePrice + item.expDate}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey as string)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
