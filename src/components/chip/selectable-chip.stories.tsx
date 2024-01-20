import { Meta, StoryObj } from "@storybook/react";
import { SelectableChip } from "./selectable-chip";

const meta: Meta<typeof SelectableChip> = {
  title: "Components/About Section",
  component: SelectableChip,
};

export default meta;
type Story = StoryObj<typeof SelectableChip>;

export const Default: Story = {
  args: {
    data: "Monday",
    label: "M",
  },
};

export const Selected: Story = {
  args: {
    data: "Monday",
    label: "M",
    isSelected: true,
  },
};
export const Disabled: Story = {
  args: {
    data: "Monday",
    label: "M",
    isDisabled: true,
  },
};
