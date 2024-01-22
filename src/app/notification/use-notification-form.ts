"use client";

import dayjs from "dayjs";
import { useCallback, useState } from "react";
import { NotificationFormData, UseNotificationFormFn } from "./notification-form.types";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiClient } from "../../config/axios.config";

export const nineAM = dayjs().set("hour", 9).startOf("hour");
export const fivePM = dayjs().set("hour", 17).startOf("hour");
export const defaultDays = [
  { day: "Sunday", start_time: nineAM, end_time: fivePM, visible: false },
  { day: "Monday", start_time: nineAM, end_time: fivePM, visible: true },
  { day: "Tuesday", start_time: nineAM, end_time: fivePM, visible: true },
  { day: "Wednesday", start_time: nineAM, end_time: fivePM, visible: true },
  { day: "Thursday", start_time: nineAM, end_time: fivePM, visible: true },
  { day: "Friday", start_time: nineAM, end_time: fivePM, visible: true },
  { day: "Saturday", start_time: nineAM, end_time: fivePM, visible: false },
];

export const defaultTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const useNotificationForm: UseNotificationFormFn = () => {
  const [switchToggle, setSwitchToggle] = useState(true);
  const { mutateAsync, isLoading } = useMutation(async (data: any) => await apiClient.post("/notification", data));

  const handleSwitchToggle = useCallback(() => {
    setSwitchToggle((prev) => !prev);
  }, []);

  const formMethods = useForm<NotificationFormData>({
    defaultValues: {
      daysOfWeek: defaultDays,
      timezone: defaultTimeZone,
    },
  });

  const onSubmit = useCallback(
    async (data: any) => {
      const { timezone, message, daysOfWeek } = data.data;
      await mutateAsync({
        timezone,
        notification_message: message,
        enabled: true,
        timeRanges: {
          data: daysOfWeek,
        },
      });
    },
    [mutateAsync],
  );

  const handleClick = useCallback(
    (day: string) => {
      const updatedDaysOfWeek = formMethods.getValues().daysOfWeek.map((d) => ({
        ...d,
        visible: d.day === day ? !d.visible : d.visible,
      }));
      formMethods.setValue("daysOfWeek", updatedDaysOfWeek);
    },
    [formMethods],
  );

  return {
    handleClick,
    onSubmit,
    formMethods,
    switchToggle,
    handleSwitchToggle,
    isLoading,
  };
};
