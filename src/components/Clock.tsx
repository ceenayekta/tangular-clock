import { Stack } from "@mui/material";
import Rectangle from "./Rectangle";
import { getHours, getMinutes, getSeconds } from "date-fns";
import { useEffect, useState } from "react";

const Clock = () => {
  const [currentSecond, setcurrentSecond] = useState(getSeconds(new Date()));
  const [currentMinute, setCurrentMinute] = useState(getMinutes(new Date()));
  const [currentHour, setCurrentHour] = useState(getHours(new Date()));
  const secondsPercentage = currentSecond === 0 ? 1 : (currentSecond / 60);
  const minutesPercentage = ((currentMinute * 60) + currentSecond) / 3600;
  const hoursPercentage = ((currentHour * 3600) + (currentMinute * 60) + currentSecond) / 86400;
  
  useEffect(() => {
    const updateStates = () => {
      setcurrentSecond(getSeconds(new Date()));
      setCurrentMinute(getMinutes(new Date()));
      setCurrentHour(getHours(new Date()));
    };
    const secondsInterval = setInterval(updateStates, 1000);
    return () => {
      clearInterval(secondsInterval);
    };
  });
  

  return (
    <Stack direction="row" gap={2}>
      {[hoursPercentage, minutesPercentage, secondsPercentage].map((percent, index) => (
        <Rectangle key={index} percentage={percent * 100} />
      ))}
    </Stack>
  );
};

export default Clock;