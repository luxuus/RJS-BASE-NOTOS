/* eslint-disable */
import React from "react";
import Skeleton from "./Skeleton";

export default {
  title: "UI/Skeleton",
  component: Skeleton,
  parameters: {
    docs: { autodocs: true },
  },
};

export const Default = () => (
  <div style={{ display: "grid", gap: 12, maxWidth: 480 }}>
    <Skeleton>
      <Skeleton.Image width={480} height={240} />
      <Skeleton.Text width={320} height={14} rows={2} />
      <Skeleton.Paragraph width={460} height={12} rows={3} />
      <Skeleton.Button width={120} height={36} />
    </Skeleton>
  </div>
);
Default.story = { name: "Default (mix de blocs)" };

export const ImageOnly = () => (
  <Skeleton>
    <Skeleton.Image width={600} height={300} />
  </Skeleton>
);

export const CardPreview = () => (
  <Skeleton>
    <Skeleton.Card width={360} height={180} />
    <Skeleton.Text width={240} height={14} rows={3} />
    <Skeleton.Button width={100} height={36} />
  </Skeleton>
);

export const TextRows = () => (
  <Skeleton>
    <Skeleton.Text width={300} height={12} rows={5} />
  </Skeleton>
);

export const Playground = (args: {
  width: number;
  height: number;
  rows: number;
}) => (
  <Skeleton>
    <Skeleton.Text width={args.width} height={args.height} rows={args.rows} />
  </Skeleton>
);
Playground.args = { width: 320, height: 12, rows: 4 };
Playground.argTypes = {
  width: { control: { type: "number", min: 50, max: 800, step: 10 } },
  height: { control: { type: "number", min: 6, max: 80, step: 2 } },
  rows: { control: { type: "number", min: 1, max: 10, step: 1 } },
};
