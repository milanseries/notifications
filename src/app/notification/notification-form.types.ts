import { FieldArrayWithId, UseFormReturn } from "react-hook-form";
import { Dayjs } from "dayjs";

export type DaysOfWeek = {
  day: string;
  start_time?: Dayjs | string;
  end_time?: Dayjs | string;
  visible: boolean;
};

export type DaysOfWeekArray = FieldArrayWithId<NotificationFormData, "daysOfWeek", "id">[];

export type NotificationFormData = {
  enableNotification: boolean;
  timezone: string;
  message: string;
  daysOfWeek: DaysOfWeek[];
};

export type UseNotificationFormFn = () => {
  formMethods: UseFormReturn<NotificationFormData>;
  fields?: DaysOfWeekArray;
  handleClick: (arg: string) => void;
  switchToggle: boolean;
  handleSwitchToggle: () => void;
  onSubmit: (data: any) => Promise<void>;
  isLoading?: boolean;
};

export type NotificationFormProps = ReturnType<UseNotificationFormFn>;
