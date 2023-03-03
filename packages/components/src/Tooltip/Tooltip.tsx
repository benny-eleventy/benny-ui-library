import * as React from "react";
import { A, fs_small, Text, AnimatePresence } from "@bennyui/core";
interface TooltipProps {
	tooltipText: string;
	position: string[];
	displayTooltip: boolean;
}

const Tooltip = (props: TooltipProps) => {
	return (
		<AnimatePresence>
			{props.displayTooltip ? (
				<A.CenterAlignedColumnContainer
					width="auto"
					height="auto"
					position="absolute"
					bottom={
						props.position[0] === "bottom"
							? `calc(-100% - ${props.position[1]})`
							: "auto"
					}
					top={
						props.position[0] === "top"
							? `calc(-100% - ${props.position[1]})`
							: "auto"
					}
					left={
						props.position[0] === "left"
							? `calc(-100% - ${props.position[1]})`
							: "auto"
					}
					right={
						props.position[0] === "right"
							? `calc(-100% - ${props.position[1]})`
							: "auto"
					}
					padding="0.25rem 0.4rem"
					backgroundColor="rgba(255,255,255,0.3)"
					animationType="opacity"
					animationConfig={[0, 1, 0]}
					animationDuration={[0.4, 0.2]}
				>
					<Text
						fontSize={fs_small}
						color="white"
						textAlign="center"
						fontWeight="bold"
						whiteSpace="nowrap"
					>
						{props.tooltipText}
					</Text>
				</A.CenterAlignedColumnContainer>
			) : null}
		</AnimatePresence>
	);
};
export { Tooltip };
export type { TooltipProps };
export default Tooltip;
