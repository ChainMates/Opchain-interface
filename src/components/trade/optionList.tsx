"use client"
import { Option } from "@/libs/types";
import { useGlobalStates } from "@/app/providers";
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Chip, User, Pagination, SortDescriptor, } from "@nextui-org/react";

import { getTokens } from "@/artifacts/tokens";
import OptionFilters from "./optionFilters";

export default function OptionList() {

  const { optionList, chainId }: { optionList?: Option[], chainId?: number } = useGlobalStates()
  const tokens = getTokens(chainId || 137)
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "strikePrice",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const filteredItems = optionList ? [...optionList] : []

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
          <Button className="" color="danger" variant="solid">
            View order book
          </Button>
        );
      default:
        return <></>
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1)
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1)
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((ev: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(ev.target.value))
    setPage(1)
  }, [])


  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
        <OptionFilters />
          <span className="text-default-400 text-small">Total {filteredItems.length} Options</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    onRowsPerPageChange,
    filteredItems.length,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination isCompact showControls showShadow color="danger" page={page} total={pages} onChange={setPage} />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
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
        wrapper: "max-h-[382px] bg-sf3/30",
        th: "bg-sf2/40",
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
  )
}
