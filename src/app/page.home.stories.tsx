import { Meta, StoryObj } from "@storybook/react";
import Home from "./page";

const meta: Meta<typeof Home> = {
  title: "Page/Home",
  component: Home,
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {};
