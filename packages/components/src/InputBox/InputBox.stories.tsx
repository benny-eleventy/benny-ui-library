import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputBox from "./InputBox";
import type { InputBoxProps } from "./InputBox";

export default {
	title: "Components/InputBox",
	component: InputBox,
	parameters: {
		layout: "centered",
	},
} as ComponentMeta<typeof InputBox>;

const Template: ComponentStory<typeof InputBox> = (args: InputBoxProps) => (
	<div
		style={{
			width: "100%",
		}}
	>
		<InputBox {...args} />
	</div>
);
export const Default = Template.bind({});

Default.args = {
	id: "test",
	value: "test",
	onChange: () => {},
	//@ts-ignore
	width: "300px",
};
