import { Meta, StoryObj } from "@storybook/react";
import { SectionHeader } from "./section-header";

const meta: Meta<typeof SectionHeader> = {
  title: "Components/Section",
  component: SectionHeader,
};
export default meta;

type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: {
    title: "section--title",
    subtitle: "section-subtitle ",
  },
};
