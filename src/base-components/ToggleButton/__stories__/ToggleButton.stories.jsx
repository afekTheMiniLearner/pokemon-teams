import React from "react";

import ToggleButton from "../ToggleButton";

export default {
  title: "components/ToggleButton",
  component: ToggleButton,
  parameters: {
    controls: {
      exclude: /^(onChange)$/g,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "98vh",
          width: "98vw",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <ToggleButton />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "200px",
        height: "200px",
      }}
    >
      <Story />
    </div>
  ),
];

const Template = (args) => <ToggleButton {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  size: {
    control: "inline-radio",
    options: ["small", "medium", "large"],
    defaultValue: "small",
  },
  value: {
    control: { type: "text" },
    defaultValue: "check",
  },
  color: {
    control: { type: "color" },
    defaultValue: "red",
  },
  orientation: {
    control: "inline-radio",
    options: ["horizontal", "vertical"],
    defaultValue: "horizontal",
  },
  selected: {
    control: { type: "boolean" },
    defaultValue: false,
  },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "300px",
        height: "300px",
      }}
    >
      <Story />
    </div>
  ),
];
