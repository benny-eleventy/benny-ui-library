import * as React from "react";
import {
	A,
	AnimatePresence,
	CenterAlignedColumnContainer,
	fs_small,
	Text,
} from "@bennyui/core";
import { CoreProps } from "@bennyui/core";
import { useCallback, useEffect } from "react";

interface ButtonProps extends CoreProps {
	// Add props here
	isLoading?: boolean;
	label?: string;
	leftIcon?: React.ReactNode;
	onClick: () => void;
	rightIcon?: React.ReactNode;
	tooltipPosition?: string[];
	tooltipText?: string;
}

const Button = (props: ButtonProps) => {
	const {
		label,
		onClick,
		rightIcon,
		leftIcon,
		tooltipText,
		tooltipPosition,
		isLoading,
		...rest
	} = props;

	const [isHovered, setIsHovered] = React.useState(false);

	const handleMouseEnter = useCallback(() => {
		setIsHovered(true);
	}, []);

	const handleMouseLeave = useCallback(() => {
		setIsHovered(false);
	}, []);

	const handleClick = useCallback(() => {
		props.onClick();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.onClick]);

	useEffect(() => {
		const handleMouseDown = () => {
			setIsHovered(false);
		};

		window.addEventListener("mousedown", handleMouseDown);

		return () => {
			window.removeEventListener("mousedown", handleMouseDown);
		};
	}, []);

	return (
		<CenterAlignedColumnContainer
			width="auto"
			height="auto"
			position="relative"
		>
			<A.Button
				{...rest}
				onClick={handleClick}
				onHoverStart={handleMouseEnter}
				onHoverEnd={handleMouseLeave}
				textTransform="uppercase"
			>
				{leftIcon && leftIcon}
				{label}
				{rightIcon && rightIcon}
			</A.Button>
			<>
				{tooltipText && (
					<ToolTip
						displayTooltip={isHovered}
						tooltipText={tooltipText}
						position={tooltipPosition ? tooltipPosition : ["bottom", "0.5rem"]}
					/>
				)}
			</>
		</CenterAlignedColumnContainer>
	);
};
export { Button };
export type { ButtonProps };
export default Button;

interface ToolTipProps {
	tooltipText: string;
	position: string[];
	displayTooltip: boolean;
}

const ToolTip = (props: ToolTipProps) => {
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
