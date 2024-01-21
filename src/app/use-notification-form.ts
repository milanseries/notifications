/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import dayjs from "dayjs";
import { useCallback, useMemo, useState } from "react";
import { DaysOfWeekArray, NotificationFormData, UseNotificationFormFn } from "./notification-form.types";
import { useForm, useFieldArray } from "react-hook-form";

export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const nineAM = dayjs().set("hour", 9).startOf("hour");
export const fivePM = dayjs().set("hour", 17).startOf("hour");

export const defaultTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const useNotificationForm: UseNotificationFormFn = () => {
  const [switchToggle, setSwitchToggle] = useState(true);

  const handleSwitchToggle = useCallback(() => {
    setSwitchToggle((prev) => !prev);
  }, []);

  const formMethods = useForm<NotificationFormData>({
    defaultValues: {
      daysOfWeek: [
        { day: "Monday", start_time: nineAM, end_time: fivePM },
        { day: "Tuesday", start_time: nineAM, end_time: fivePM },
        { day: "Wednesday", start_time: nineAM, end_time: fivePM },
        { day: "Thursday", start_time: nineAM, end_time: fivePM },
      ],
      timezone: defaultTimeZone,
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "daysOfWeek",
    control: formMethods.control,
  });

  const onSubmit = async (data: any) => {
    alert(JSON.stringify(data)); // api handle
  };

  const handleClick = useCallback(
    (day: string) => {
      const existingFieldIndex = fields.findIndex((field) => field.day === day);
      if (existingFieldIndex !== -1) {
        remove(existingFieldIndex);
      } else {
        append({ day, start_time: undefined, end_time: undefined });
      }
    },
    [fields, remove, append],
  );

  const orderDays = useMemo(
    () => (fields: DaysOfWeekArray) => {
      return [...fields].sort((a, b) => days.indexOf(a.day) - days.indexOf(b.day));
    },
    [],
  );

  return {
    orderDays,
    fields,
    handleClick,
    onSubmit,
    formMethods,
    switchToggle,
    handleSwitchToggle,
  };
};
