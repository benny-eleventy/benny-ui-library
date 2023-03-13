import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from "./Tooltip";
import type { TooltipProps } from "./Tooltip";

export default {
	title: "Components/Tooltip",
	component: Tooltip,
	// parameters: {
	// 	layout: "centered",
	// },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args: TooltipProps) => (
	<Tooltip {...args} />
);
export const Default = Template.bind({});

Default.args = {
	label: "Tooltip Text",
	position: ["bottom", "0%"],
	id: "storyboo",
};
