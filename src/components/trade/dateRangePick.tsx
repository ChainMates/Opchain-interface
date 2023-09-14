"use client"
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import DatepickerType from "react-tailwindcss-datepicker/dist/types/index";

export default function DateRangePick() {

  let endDate: Date = new Date()
  endDate.setMonth(11)

  const [value, setValue] = useState<DatepickerType.DateValueType>({
    startDate: new Date(),
    endDate: endDate
  });

  const handleValueChange = (newValue: DatepickerType.DateValueType) => {
    console.log("newValue:", newValue);
    setValue(newValue as DatepickerType.DateValueType);
  }

  return (
    <div className="flex flex-col justify-center items-start text-txt1 text-sm gap-unit-1">
      <div>
        Expiration Date
      </div>
      <Datepicker
        classNames={{ 
          container: () => "h-unit-12 w-unit-48 bg-sf3 text-txt4",
          input: () => "p-unit-3 bg-sf3 text-txt4 rounded-xl outline-none",
          footer: () => "bg-sf3 text-txt4 ", 
        }}
        useRange={false}
        primaryColor={"rose"}
        value={value}
        onChange={handleValueChange}
        showShortcuts={true}
      />
    </div>
  );
}
