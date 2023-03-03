import { styled, Text, TextProps } from "@bennyui/core";
import * as React from "react";
interface GradientTextProps extends TextProps {
	// Add props here
	text: string;
	gradient: string;
}

const GradientText = (props: GradientTextProps) => {
	return (
		<>
			<GText {...props}>{props.text}</GText>;
		</>
	);
};
export { GradientText };
export type { GradientTextProps };
export default GradientText;

const GText = styled(Text)<GradientTextProps>`
	background: ${(props) => props.gradient};
	color: transparent;
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	mask-image: linear-gradient(to right, #000, #000);
`;
