import React,{useState} from "react";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {trimString} from '../utils/TrimString'


const Calender = () => {
  const [date,setdate] = useState('');
  const tomorrow = dayjs().add(1, "day");

  const changeddate = (val)=>{
    const string_val = String(val.$d);
    const trimed_val = trimString(string_val);
    console.log(trimed_val);
    setdate(val);
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        defaultValue={tomorrow}
        disableFuture
        views={["year", "month", "day"]}
        value={date}
        onChange={(val)=>changeddate(val)}
      />
    </LocalizationProvider>
  );
};

export default Calender;
