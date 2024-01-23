import { StoryFn } from "@storybook/react";
import NotificationForm from "./notification-form";
import { useForm } from "react-hook-form";
import { defaultDays, defaultTimeZone } from "./use-notification-form";
import { NotificationFormDataType } from "./notification-form.types";

export default {
  title: "Component/Form/Notification",
  component: NotificationForm,
};

const Template: StoryFn<typeof NotificationForm> = () => {
  const methods = useForm<NotificationFormDataType>({
    defaultValues: {
      daysOfWeek: defaultDays,
      timezone: defaultTimeZone,
    },
  });
  return <NotificationForm formMethods={methods} handleClick={() => {}} />;
};

export const Default = Template.bind({});
