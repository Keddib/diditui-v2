import type { Meta, StoryObj } from "@storybook/react-vite";

import { QrCode } from "@diditui/core";
import { IconIcon } from "@diditui/icons-react";

const meta: Meta<typeof QrCode> = {
  title: "Components/QrCode",
  component: QrCode,
  argTypes: {
    uri: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    color: {
      control: "color",
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    uri: "http://example.com",
    size: "md",
    color: "black",
  },
};

export const WithIcon: Story = {
  args: {
    uri: "http://example.com",
    size: "md",
    color: "black",
    cutoutElement: <IconIcon className="text-brand-primary size-full" />,
  },
};
