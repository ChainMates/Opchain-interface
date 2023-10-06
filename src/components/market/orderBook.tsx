import { Tab, Tabs } from "@nextui-org/react";
import OrderBookTab from "./orderBookTab";
import { useState } from "react";
import OrderTable from "./orderBookTable";
import { useGlobalStates } from "@/app/providers";
import { GlobalStates } from "@/libs/types";
import UserOrderTable from "./userOrderTable";

export default function OrderBook() {

  const [selectedMode, setSelectedMode] = useState("buy");

  const { option, userOrders }: GlobalStates = useGlobalStates()

  return (
    <div className="flex flex-col justify-items-center gap-unit-2">

      <div className="flex justify-items-center gap-unit-2">

        <OrderTable orders={option?.orders?.sell || []} isAccending={true} color="from-danger" gradiant="bg-gradient-to-l" />
        <OrderTable orders={option?.orders?.buy || []} isAccending={false} color="from-success" gradiant="bg-gradient-to-r" />
        <div className="ml-unit-4 flex flex-col justify-items-center">
          <Tabs
            color={selectedMode === "buy" ? "success" : "danger"}
            fullWidth
            size="lg"
            selectedKey={selectedMode}
            onSelectionChange={() => setSelectedMode(prev => prev === "buy" ? "sell" : "buy")}
            classNames={{ base: "w-unit-56", tabList: "bg-sf1" }}

          >
            <Tab key="buy" title="Buy">
              <OrderBookTab title="Buy" color="success" />
            </Tab>
            <Tab key="sell" title="Sell">
              <OrderBookTab title="Sell" color="danger" />
            </Tab>
          </Tabs>
        </div>

      </div>
<p>Your Orders</p>
      <div className="flex flex-col justify-items-center gap-unit-2">
        <UserOrderTable orders={userOrders?.filter(({ optionId }) => optionId === option?.id) || []} />
      </div>

    </div>
  )
}
