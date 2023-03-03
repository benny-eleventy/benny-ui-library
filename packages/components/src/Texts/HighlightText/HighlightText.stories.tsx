import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HighlightText from "./HighlightText";
import type { HighlightTextProps } from "./HighlightText";

export default {
	title: "Components/HighlightText",
	component: HighlightText,
	parameters: {
		layout: "centered",
	},
} as ComponentMeta<typeof HighlightText>;

const Template: ComponentStory<typeof HighlightText> = (
	args: HighlightTextProps
) => <HighlightText {...args} />;
export const Default = Template.bind({});

Default.args = {
	text: "HighlightText",
	highlight: "Text",
	highlightColor: "lightpink",
	fontFamily: "Arial",
};
