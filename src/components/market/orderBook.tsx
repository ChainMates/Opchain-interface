"use client"
import TokenSelect from "@/components/market/tokenSelect";
import DateRangePick from "@/components/market/dateRangePick";
import PricePick from "@/components/market/pricePick";
import { Button, Progress } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Order } from "@/libs/types";

export default function OrderBook({ isAccending, color, gradiant }: { isAccending: boolean, color: string, gradiant: string }) {

  const orders = [
    {
      size: 200,
      price: 2,
    },
    {
      size: 15,
      price: 4,
    },
    {
      size: 400,
      price: 1,
    },
    {
      size: 76,
      price: 5,
    },
    {
      size: 34,
      price: 3,
    },
    {
      size: 524,
      price: 8,
    },
    {
      size: 20,
      price: 9,
    },
  ]

  // Group by price
  const groupedOrders: { [key: number]: number } = orders.reduce((grouped: { [key: number]: number }, order) => {
    if (!grouped[order.price]) {
      grouped[order.price] = 0;
    }
    grouped[order.price] += order.size
    return grouped;
  }, {});

  // Map back to array
  let groupedArray: Order[] = []
  for (const [price, size] of Object.entries(groupedOrders)) {
    console.log(price)
    console.log(size)
    groupedArray.push({ price: Number(price), size: Number(size) })
  }

  // Sort by price
  groupedArray.sort((a, b) => isAccending ? a.price - b.price : b.price - a.price)


  // Keep first 6 orders
  groupedArray.splice(6);


  // Get max size order
  const orderWithMaxSize = groupedArray.reduce((prev, current) => {
    return (prev.size > current.size) ? prev : current;
  });
  const maxSize = orderWithMaxSize.size

  function getRatioPercent(size: number) {
    let ratio = size / maxSize * 100;
    ratio = Math.round(ratio / 5) * 5;

    return ratio + '%';
  }

  return (
    <Table aria-label="Example static collection table" classNames={{ wrapper: "bg-sf3", table: "bg-sf5 rounded-xl", th: "bg-sf1" }} >
      <TableHeader>
        <TableColumn>Size</TableColumn>
        <TableColumn>Price</TableColumn>
      </TableHeader>
      <TableBody >
        {groupedArray.map((order, key) =>
          <TableRow className={`${gradiant} ${color} to-${getRatioPercent(order.size)} to-transparent`} key={key}>
            <TableCell>{order.size}</TableCell>
            <TableCell>{order.price}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
// "hidden to-5% to-10% to-15% to-20% to-25% to-30% to-35% to-40% to-45% to-50% to-55% to-60% to-65% to-70% to-75% to-80% to-85% to-90% to-95% to-100%" 