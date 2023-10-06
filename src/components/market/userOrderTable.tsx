import { Button, Progress } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { UserOrder } from "@/libs/types";

export default function UserOrderTable({ orders }: { orders: UserOrder[] }) {


  return (
    <Table classNames={{ wrapper: "p-0 rounded-lg", table: "bg-sf4 text-txt1", th: "bg-sf3 text-txt1" }} >
      <TableHeader>
        <TableColumn>Size</TableColumn>
        <TableColumn>Price</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody >
        {orders.length === 0 ?
          <TableRow >
            <TableCell>No Orders</TableCell>
            <TableCell>.</TableCell>
            <TableCell>.</TableCell>
          </TableRow>
          :
          orders.map((order, key) =>
            <TableRow key={key}>
              <TableCell>{order.size}</TableCell>
              <TableCell>{order.price}</TableCell>
              <TableCell>
                <Button>Delete</Button>
              </TableCell>
            </TableRow>
          )}
      </TableBody>
    </Table>
  )
}