/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import dayjs from "dayjs";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { DaysOfWeekArray, FormData } from "./notification-view.types";
import { useForm, useFieldArray } from "react-hook-form";

export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const fiveAM = dayjs().set("hour", 5).startOf("hour");
export const nineAM = dayjs().set("hour", 9).startOf("hour");

export const defaultTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const useNotificationView = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<FormData>({
    defaultValues: {
      daysOfWeek: [{ day: "Sunday" }, { day: "Monday" }],
      timezone: defaultTimeZone,
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "daysOfWeek",
    control,
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  const handleClick = (day: string) => {
    const existingFieldIndex = fields.findIndex((field) => field.day === day);
    if (existingFieldIndex !== -1) {
      remove(existingFieldIndex);
    } else {
      append({ day });
    }
  };
  const orderDays = useMemo(
    () => (fields: DaysOfWeekArray) => {
      return [...fields].sort((a, b) => days.indexOf(a.day) - days.indexOf(b.day));
    },
    [],
  );

  return {
    orderDays,
    control,
    watch,
    fields,
    handleClick,
    register,
    handleSubmit,
    onSubmit,
  };
};

// const { data, isLoading } = useQuery<any, Error>(
//   ["blog"],
//   async () => await fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => res.json()),
//   {
//     retry: 0,
//     refetchOnMount: false,
//     refetchOnWindowFocus: false,
//   },
// );
