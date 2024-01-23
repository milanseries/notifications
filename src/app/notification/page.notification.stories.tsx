import { Meta, StoryObj } from "@storybook/react";
import Notification from "./page";

const meta: Meta<typeof Notification> = {
  title: "Page/Notification",
  component: Notification,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
export default meta;

type Story = StoryObj<typeof Notification>;

export const Default: Story = {};
