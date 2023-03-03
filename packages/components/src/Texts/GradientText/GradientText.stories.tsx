import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GradientText from "./GradientText";
import type { GradientTextProps } from "./GradientText";

export default {
	title: "Components/GradientText",
	component: GradientText,
	parameters: {
		layout: "centered",
	},
} as ComponentMeta<typeof GradientText>;

const Template: ComponentStory<typeof GradientText> = (
	args: GradientTextProps
) => <GradientText {...args} />;
export const Default = Template.bind({});

Default.args = {
	text: "GradientText",
	gradient: "linear-gradient(90deg, #FF008C 0%, #FF8C00 100%)",
};
