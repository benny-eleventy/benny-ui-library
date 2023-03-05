import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BottomSheet from "./BottomSheet";
import type { BottomSheetProps } from "./BottomSheet";
import { CenterAlignedColumnContainer } from "@bennyui/core";

export default {
	title: "Components/BottomSheet",
	component: BottomSheet,
	parameters: {
		docs: {
			description: {
				component:
					"A bottom sheet component that can be used to display content at the bottom of the screen. The bottom sheet can be dragged up and down to reveal or hide the content. The bottom sheet can be closed by clicking on the overlay or by dragging the bottom sheet down.",
			},
		},
		layout: "centered",
	},
} as ComponentMeta<typeof BottomSheet>;

const Template: ComponentStory<typeof BottomSheet> = (
	args: BottomSheetProps
) => (
	<CenterAlignedColumnContainer
		width="300px"
		height="400px"
		position="fixed"
		bottom="0"
		background="lightpink"
	>
		<BottomSheet {...args} />
	</CenterAlignedColumnContainer>
);
export const Default = Template.bind({});

Default.args = {
	bottomSheetContent: () => (
		<CenterAlignedColumnContainer
			width="300px"
			height="200px"
			backgroundColor="white"
			borderRadius="10px 10px 0 0"
		>
			Test
		</CenterAlignedColumnContainer>
	),
	onClose: () => console.log("close"),
	isStorybook: true,
};
