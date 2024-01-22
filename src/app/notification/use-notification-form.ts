"use client";

import dayjs from "dayjs";
import { useCallback, useState } from "react";
import { NotificationFormDataType, NotificationPayloadType, UseNotificationFormFn } from "./notification-form.types";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiClient } from "../../config/axios.config";
import { ToggleStatus } from "../../components/select/switchable-select";
import { toast } from "react-toastify";

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
  const [switchToggle, setSwitchToggle] = useState<ToggleStatus>(ToggleStatus.Off);
  const { mutateAsync, isLoading } = useMutation(
    async (data: NotificationPayloadType) => await apiClient.post("/notification", data),
    {
      onSuccess: () => {
        toast.success("Successfully config your notification");
      },
      onError: () => {
        toast.error("Please try again");
      },
    },
  );

  const handleSwitchToggle = useCallback(() => {
    setSwitchToggle((prev) => (prev === ToggleStatus.On ? ToggleStatus.Off : ToggleStatus.On));
  }, []);

  const formMethods = useForm<NotificationFormDataType>({
    defaultValues: {
      daysOfWeek: defaultDays,
      timezone: defaultTimeZone,
    },
  });

  const { getValues, setValue } = formMethods;

  const onSubmit = useCallback(
    async (data: NotificationFormDataType) => {
      const { timezone, notification_message, daysOfWeek } = data;
      await mutateAsync({
        timezone,
        notification_message,
        enabled: true,
        time_ranges: {
          data: daysOfWeek.filter((d) => d.visible).map(({ visible, ...rest }) => rest),
        },
      });
    },
    [mutateAsync],
  );

  const handleClick = useCallback(
    (day: string) => {
      const updatedDaysOfWeek = getValues().daysOfWeek.map((d) => ({
        ...d,
        ...(d.day === day && d.visible ? { start_time: nineAM, end_time: fivePM } : {}),
        visible: d.day === day ? !d.visible : d.visible,
      }));
      setValue("daysOfWeek", updatedDaysOfWeek);
    },
    [getValues, setValue],
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
