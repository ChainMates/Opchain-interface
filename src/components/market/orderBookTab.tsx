import { Button, Input } from "@nextui-org/react";
import Datepicker from "react-tailwindcss-datepicker";
import DatepickerType from "react-tailwindcss-datepicker/dist/types/index";
import { useState } from "react";

export default function OrderBookTab({ title, color }: { title: string, color: "secondary" | "default" | "primary" | "success" | "warning" | "danger" | undefined }) {

  const [value, setValue] = useState<DatepickerType.DateValueType>({
    startDate: null,
    endDate: null
  });

  const handleValueChange = (newValue: DatepickerType.DateValueType) => {
    console.log("newValue:", newValue);
    setValue(newValue as DatepickerType.DateValueType);
  }


  return (
    <form className="flex flex-col gap-4">
      <Input classNames={{ inputWrapper: "bg-sf1" }} isRequired label="Size" type="number" />
      <Input classNames={{ inputWrapper: "bg-sf1" }} isRequired label="price" type="number" />
      <div className="flex gap-2 justify-end">
        <Button fullWidth color={color}>
          {title}
        </Button>
      </div>
    </form>
  )
}
