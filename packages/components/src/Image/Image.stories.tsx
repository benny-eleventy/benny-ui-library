import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from "./Image";
import type { ImageProps } from "./Image";

export default {
	title: "Components/Image",
	component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args: ImageProps) => (
	<Image {...args} />
);
export const Default = Template.bind({});

export const WithSrc = Template.bind({});
WithSrc.parameters = {
	layout: "centered",
};

WithSrc.args = {
	src: "https://res.cloudinary.com/antilibrary/image/upload/v1670047116/felipe-furtado-mXhxU7vuSVQ-unsplash_rviyj7.jpg",
	placeHolderImage:
		"https://res.cloudinary.com/antilibrary/image/upload/v1676707872/kostiantyn-li-Fi_nhg5itCw-unsplash_qfdbg4.jpg",
	width: "300px",
	aspectRatio: "auto",
};
