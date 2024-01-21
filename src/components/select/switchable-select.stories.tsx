import { Meta, StoryObj } from "@storybook/react";
import { SwitchableSelect, SwitchableSelectProps } from "./switchable-select";

const meta: Meta<SwitchableSelectProps> = {
  title: "Components/Switchable Select",
  component: SwitchableSelect,
};

export default meta;
type Story = StoryObj<SwitchableSelectProps>;

export const SwitchOff: Story = {
  args: {
    title: "title--name",
    toggleStatus: false,
  },
};

export const SwitchOn: Story = {
  args: {
    title: "title--name",
    toggleStatus: true,
    children: <div>This is children</div>,
  },
};
