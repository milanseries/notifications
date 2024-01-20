import { FieldArrayWithId } from "react-hook-form";
import { Dayjs } from "dayjs";

export type DaysOfWeek = {
  day: string;
  start_time?: Dayjs;
  end_time?: Dayjs;
};

export type DaysOfWeekArray = FieldArrayWithId<FormData, "daysOfWeek", "id">[];

export type FormData = {
  enableNotification: boolean;
  timezone: string;
  message: string;
  daysOfWeek: DaysOfWeek[];
};

export type AboutSectionDetailViewPros = {
  orderDays: (args: DaysOfWeekArray) => DaysOfWeekArray;
  control: any;
  watch: any;
  fields: DaysOfWeekArray;
  handleClick: any;
  register: any;
  // handleSubmit: any;
  // onSubmit: any;
};
