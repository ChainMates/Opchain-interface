"use client"
import Datepicker from "react-tailwindcss-datepicker";
import DatepickerType from "react-tailwindcss-datepicker/dist/types/index";

export default function DatePick({ single, showShortcuts, value, setValue, labelColor }: {
  single: boolean, showShortcuts: boolean,
  value: DatepickerType.DateValueType,
  setValue: any, labelColor: string
}) {

  return (
    <div className="flex flex-col justify-center items-start text-txt1 text-sm gap-unit-1">
      <div className={labelColor + " font-bold"}>
        Expiration Date
      </div>
      <Datepicker
        classNames={{
          container: () => "h-unit-12 font-medium",
          input: () => "min-h-unit-12 w-unit-56 p-unit-3 bg-sf5 hover:bg-sf1/50 transform duration-300 text-txt2 hover:text-txt4 placeholder-current rounded-lg outline-none font-medium",
          footer: () => "bg-sf1 text-txt4 ",
        }}
        placeholder={`Select a ${single ? "date" : "range"}`}
        useRange={false}
        asSingle={single}
        primaryColor={"yellow"}
        value={value}
        minDate={new Date()}
        onChange={(newValue) => setValue(newValue as DatepickerType.DateValueType)}
        // showShortcuts={showShortcuts}
      />
    </div>
  );
}