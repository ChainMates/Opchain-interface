import { Button, Progress } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Order } from "@/libs/types";

export default function OrderTable({ orders, isAccending, color, gradiant }: { orders: Order[], isAccending: boolean, color: string, gradiant: string }) {

  let groupedArray: Order[] = []
  let maxSize = 1
  // Group by price
  if (orders.length !== 0) {
    const groupedOrders: { [key: number]: number } = orders.reduce((grouped: { [key: number]: number }, order) => {
      if (!grouped[order.price]) {
        grouped[order.price] = 0;
      }
      grouped[order.price] += order.size
      return grouped;
    }, {});

    // Map back to array
    for (const [price, size] of Object.entries(groupedOrders)) {
      groupedArray.push({ price: Number(price), size: Number(size) })
    }

    // Sort by price
    groupedArray.sort((a, b) => isAccending ? a.price - b.price : b.price - a.price)


    // Keep first 9 orders
    groupedArray.splice(9);


    // Get max size order
    const orderWithMaxSize = groupedArray.reduce((prev, current) => {
      return (prev.size > current.size) ? prev : current;
    });
    maxSize = orderWithMaxSize.size

  }

  function getRatioPercent(size: number) {
    let ratio = size / maxSize * 100;
    ratio = Math.round(ratio / 5) * 5;

    return ratio + '%';
  }

  return (
    <Table classNames={{ wrapper: "p-0 rounded-lg", table: "bg-sf4 text-txt1", th: "bg-sf3 text-txt1" }} >
      <TableHeader>
        <TableColumn>Size</TableColumn>
        <TableColumn>Price</TableColumn>
      </TableHeader>
      <TableBody >
        {groupedArray.length === 0 ?
          <TableRow >
            <TableCell>No Orders</TableCell>
            <TableCell>.</TableCell>
          </TableRow>
          :
          groupedArray.map((order, key) =>
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