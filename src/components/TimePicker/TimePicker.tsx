import { useState } from "react";
import { Button } from "../Button/Button";
import {
  ACTIVE_STATUS,
  HOUR_VALUES,
  MINUTE_VALUES,
  TITLE,
} from "../utils/constant";
import {
  TimePickerBox,
  TimePickerContainer,
  TimePickerHeader,
} from "./TimePicker.style";

export const TimePicker: React.FC = () => {
  const [hourValue, setHourValue] = useState<string>("");
  const [minuteValue, setMinuteValue] = useState<string>("");
  const [timeFieldStatus, setTimeFieldStatus] = useState<string>(
    TITLE.minuteTitle
  );

  const handleNumberClick = (timeValue: string, btnStatus: string) => {
    btnStatus === TITLE.hourTitle
      ? setHourValue(timeValue)
      : setMinuteValue(timeValue);
    setTimeFieldStatus(btnStatus);
  };

  return (
    <>
      <TimePickerContainer>
        <TimePickerHeader>
          <Button
            title={hourValue === "" ? TITLE.hourTitle : hourValue}
            active={
              timeFieldStatus === TITLE.minuteTitle
                ? ACTIVE_STATUS.trueStatus
                : ACTIVE_STATUS.falseStatus
            }
          />
          <Button
            title={minuteValue === "" ? TITLE.minuteTitle : minuteValue}
            active={
              timeFieldStatus !== TITLE.minuteTitle
                ? ACTIVE_STATUS.trueStatus
                : ACTIVE_STATUS.falseStatus
            }
          />
        </TimePickerHeader>
        <TimePickerBox>
          {timeFieldStatus === TITLE.minuteTitle &&
            HOUR_VALUES.map((timeValue, index) => {
              return (
                <Button
                  key={index}
                  title={timeValue}
                  onClickHandler={() => {
                    handleNumberClick(timeValue, TITLE.hourTitle);
                  }}
                />
              );
            })}
          {timeFieldStatus === TITLE.hourTitle &&
            MINUTE_VALUES.map((timeValue, index) => {
              return (
                <Button
                  key={index}
                  title={timeValue}
                  onClickHandler={() => {
                    handleNumberClick(timeValue, TITLE.minuteTitle);
                  }}
                />
              );
            })}
        </TimePickerBox>
      </TimePickerContainer>
    </>
  );
};
