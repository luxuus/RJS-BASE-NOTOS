/* eslint-disable */
import type { Meta, StoryObj } from "@storybook/react";
import Loader from "./Loader";

const meta: Meta<typeof Loader> = {
  title: "UI/Loader",
  component: Loader,
  args: {
    label: "Chargement…",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: { type: "inline-radio" }, options: ["spinner", "bar"] },
    value: { control: { type: "number", min: 0, max: 100, step: 1 } },
    indeterminate: { control: "boolean" },
    size: { control: "number" },
    thickness: { control: "number" },
    barWidth: { control: "number" },
    barHeight: { control: "number" },
    rounded: { control: "boolean" },
    inline: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Loader>;

export const Spinner: Story = {
  args: { variant: "spinner", label: "Chargement…" },
};

export const ProgressDetermined: Story = {
  args: { variant: "bar", value: 42, label: "Import des données" },
};

export const ProgressIndeterminate: Story = {
  args: { variant: "bar", indeterminate: true, label: "Traitement en cours" },
};
