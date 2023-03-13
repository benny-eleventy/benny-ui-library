import * as React from "react";
import {
	A,
	CustomAnimation,
	br_small,
	fs_regular,
	fs_xsmall,
	primaryFont,
	s_xsmall,
	s_xxsmall,
} from "@bennyui/core";
import { ReactComponent } from "../types";

interface TooltipProps {
	id: string;
	label: string;
	position: string[];
	styles?: React.CSSProperties;
	leftIcon?: ReactComponent;
	rightIcon?: ReactComponent;
	animation?: CustomAnimation;
}

const Tooltip = (props: TooltipProps) => {
	const { label, position, styles, leftIcon, rightIcon, animation, id } = props;

	const getTooltipPositionStyles = (position: string[]) => {
		switch (position[0]) {
			case "top":
				return {
					bottom: `calc(100% + ${position[1]})`,
				};
			case "bottom":
				return {
					top: `calc(100% + ${position[1]})`,
				};
			case "left":
				return {
					right: `calc(100% + ${position[1]})`,
				};
			case "right":
				return {
					left: `calc(100% + ${position[1]})`,
				};
			default:
				return {
					top: "calc(100% + 1rem)",
				};
		}
	};

	const _animationType = animation?.animationType ?? "opacity";
	const _animationDuration = animation?.animationDuration ?? [0.4, 0.2];
	const _animationConfig = animation?.animationConfig ?? [0, 1, 0];
	return (
		<A.FlexStartRowContainer
			id={id}
			dataTestId="tooltip"
			width="auto"
			height="auto"
			position="absolute"
			gap="0.4rem"
			style={{
				borderRadius: br_small,
				fontSize: fs_regular,
				paddingBlock: s_xxsmall,
				paddingInline: s_xsmall,
				gap: s_xsmall,
				...getTooltipPositionStyles(position),
				...styles,
			}}
			backgroundColor="rgba(255,255,255,0.3)"
			{...animation}
			animationType={_animationType}
			animationConfig={_animationConfig}
			animationDuration={_animationDuration}
			fontFamily={primaryFont}
			fontSize={fs_xsmall}
			color="rgba(255,255,255,0.8)"
			textAlign="center"
			whiteSpace="nowrap"
		>
			{leftIcon &&
				React.cloneElement(leftIcon ?? <></>, {
					disableHoverAnimation: true,
					color: "inherit",
				})}
			{label}
			{rightIcon &&
				React.cloneElement(rightIcon ?? <></>, {
					disableHoverAnimation: true,
					color: "inherit",
				})}
		</A.FlexStartRowContainer>
	);
};
export { Tooltip };
export type { TooltipProps };
export default Tooltip;
