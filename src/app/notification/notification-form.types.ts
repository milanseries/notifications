import { FieldArrayWithId, SubmitHandler, UseFormReturn } from "react-hook-form";
import { Dayjs } from "dayjs";
import { ToggleStatus } from "@/components/select/switchable-select";

export type DaysOfWeek = {
  day: string;
  start_time?: Dayjs | string;
  end_time?: Dayjs | string;
  visible: boolean;
};

export type DaysOfWeekArray = FieldArrayWithId<NotificationFormDataType, "daysOfWeek", "id">[];

export type NotificationFormDataType = {
  timezone: string;
  notification_message: string;
  daysOfWeek: DaysOfWeek[];
};

export type UseNotificationFormFn = () => {
  formMethods: UseFormReturn<NotificationFormDataType>;
  handleClick: (arg: string) => void;
  switchToggle: ToggleStatus;
  handleSwitchToggle: () => void;
  onSubmit: SubmitHandler<NotificationFormDataType>;
  isLoading?: boolean;
};

export type NotificationFormProps = Pick<ReturnType<UseNotificationFormFn>, "formMethods" | "handleClick">;

export type NotificationPayloadType = Omit<NotificationFormDataType, "daysOfWeek"> & {
  enabled: boolean;
  time_ranges: {
    data: Omit<DaysOfWeek, "visible">[];
  };
};
