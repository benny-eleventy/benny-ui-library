import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextArea from "./TextArea";
import type { TextAreaProps } from "./TextArea";

export default {
	title: "Components/TextArea",
	component: TextArea,
	parameters: {
		layout: "centered",
	},
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args: TextAreaProps) => (
	<TextArea {...args} />
);
export const Default = Template.bind({});
Default.args = {
	//@ts-ignore
	width: "600px",
	autoGrow: true,
	initialHeight: "100px",
	maxHeight: "200px",
};
