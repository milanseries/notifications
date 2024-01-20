import { Meta, StoryObj } from "@storybook/react";
import { SwitchableSelect, SwitchableSelectProps, ToggleStatus } from "./switchable-select";

const meta: Meta<SwitchableSelectProps> = {
  title: "Components/Switchable Select",
  component: SwitchableSelect,
};

export default meta;
type Story = StoryObj<SwitchableSelectProps>;

export const SwitchOff: Story = {
  args: {
    title: "title--name",
    toggleStatus: ToggleStatus.Off,
  },
};
export const SwitchOn: Story = {
  args: {
    title: "title--name",
    toggleStatus: ToggleStatus.On,
    children: <div>This is children</div>,
  },
};
