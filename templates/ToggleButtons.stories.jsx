import React from "react";

import ToggleButtons from "../ToggleButtons";

export default {
  title: "base-components/ToggleButtons",
  component: ToggleButtons,
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

export const Default = () => <ToggleButtons />;
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

const Template = (args) => <ToggleButtons {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  size: {
    control: "inline-radio",
    options: ["small", "medium", "large"],
    defaultValue: "small",
  },
  values: {
    control: "inline-radio",
    options: [
      ["WEB", "ANDROID", "IPHONE"],
      ["A", "B"],
    ],
    defaultValue: ["WEB", "ANDROID", "IOS"],
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
  exclusive: {
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
