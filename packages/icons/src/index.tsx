import * as I from "./svg-icons";
import * as React from "react";
import {
	A,
	AnimatePresence,
	CoreProps,
	fs_small,
	fw_regular,
	s_xxsmall,
	Text,
} from "@bennyui/core";
import styled, { css } from "styled-components";

export const Icon = (props: { children: any }) => {
	return <>{props.children}</>;
};

type ActiveIndicatorType = {
	background?: string;
	borderBottom?: string;
	color?: string;
	opacity?: string | number;
	scale?: string | number;
};

interface IconCoreProps extends CoreProps {
	color: string;
	animateOnHover?: boolean;
	clickAnimation?: any;
	isActive?: boolean | undefined;
	isCursorPointer?: any;
	onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
	size?: "small" | "large" | "regular" | string;
	tooltipPosition?: string[];
	tooltipStyle?: any;
	tooltipText?: string;
}

interface IconProps extends IconCoreProps {
	activeIndicator: ActiveIndicatorType;
	isActive?: true | false;
}

interface IconWOisActive extends IconCoreProps {
	activeIndicator?: undefined;
	isActive?: undefined;
}

interface AnimateOnHover extends IconCoreProps {
	animateOnHover?: true;
	hoverAnimation: any;
}

interface AnimateHoverDisabled extends IconCoreProps {
	animateOnHover?: false;
	hoverAnimation?: undefined;
}

type IconPropsWithVariant = (IconProps | IconWOisActive) &
	(AnimateOnHover | AnimateHoverDisabled);

const defaultIconProps: IconPropsWithVariant = {
	aspectRatio: "1",
	background: "transparent",
	boxShadow: "none",
	color: "white",
	hoverAnimation: {
		backgroundColor: "#2a2a2a",
		scale: 1.1,
	},
	padding: s_xxsmall,
	size: "regular",
};

function createIconComponent(iconName: string) {
	const Icon = React.memo((props: IconPropsWithVariant) => {
		const {
			activeIndicator,
			hoverAnimation,
			animateOnHover,
			isActive,
			clickAnimation,
			tooltipText,
			tooltipPosition,
			tooltipStyle,
			size,
			color,
			onClick,
			isCursorPointer,
			...rest
		} = props;

		if (isActive == undefined && activeIndicator) {
			throw new Error(
				`Icon ${iconName} is missing the isActive prop. If you are not using the activeIndicator prop, please remove it.`
			);
		}

		if (animateOnHover == false && hoverAnimation) {
			throw new Error(
				`Icon ${iconName} has animateHover as false, please remove the hoverAnimation prop.`
			);
		}

		const [isHovered, setIsHovered] = React.useState(false);

		const getIconSize = React.useMemo(() => {
			console.log("getIconSize", iconName);
			return (size: string | undefined) => {
				switch (size) {
					case "small":
						return "32px";
					case "regular":
						return "48px";
					case "large":
						return "64px";
					default:
						return size;
				}
			};
		}, [props.size]);

		// @ts-ignore
		const IconCmpnt = I[iconName];

		const _color = color || defaultIconProps.color;
		const _hoverAnimation = hoverAnimation || defaultIconProps.hoverAnimation;
		const _size = size || defaultIconProps.size;

		return (
			<IconParentContainer
				{...rest}
				// @ts-ignore
				id={`icon-parent-container-${iconName}`}
				data-testid={`icon-${iconName}`}
				isActive={isActive}
				onClick={onClick}
				// @ts-ignore
				activeIndicator={activeIndicator}
				whileHover={_hoverAnimation}
				whileTap={clickAnimation}
				onHoverStart={() => setIsHovered(true)}
				onHoverEnd={() => setIsHovered(false)}
				cursor={onClick || isCursorPointer ? "pointer" : "default"}
				color={_color}
			>
				<A.CenterAlignedColumnContainer
					// @ts-ignore
					id={`icon-container-${iconName}`}
					data-testid={`icon-container-${iconName}`}
					width={getIconSize(_size)}
				>
					<IconCmpnt />
				</A.CenterAlignedColumnContainer>
				<>
					{props.tooltipText && (
						<ToolTip
							id={`icon-tooltip-${iconName}`}
							displayTooltip={isHovered}
							tooltipText={tooltipText || "Add tooltip text"}
							position={tooltipPosition ? tooltipPosition : ["bottom", "1rem"]}
							tooltipStyle={tooltipStyle}
						/>
					)}
				</>
			</IconParentContainer>
		);
	});
	return Icon;
}

interface ToolTipProps {
	id: string;
	tooltipText: string;
	position: string[];
	displayTooltip: boolean;
	tooltipStyle?: { [key: string]: string };
}

const ToolTip = (props: ToolTipProps) => {
	const { tooltipText, position, displayTooltip, tooltipStyle } = props;

	return (
		<AnimatePresence>
			{displayTooltip ? (
				<>
					<A.CenterAlignedColumnContainer
						{...props}
						width="auto"
						height="auto"
						position="absolute"
						zIndex="1000"
						style={{
							[position[0]]: `calc( -${
								position[0] == "top" || position[0] == "bottom"
									? "50%"
									: `${11 * tooltipText.length}px`
							}  - ${position[1]})`,
							...tooltipStyle,
						}}
						padding="0.25rem 0.4rem"
						backgroundColor="rgba(255,255,255,0.3)"
						animationType="opacity"
						animationConfig={[0, 1, 0]}
						animationDuration={[0.4, 0.2]}
					>
						<Text
							fontSize={fs_small}
							color="rgba(255,255,255,0.8)"
							textAlign="center"
							fontWeight={fw_regular}
							whiteSpace="nowrap"
						>
							{tooltipText}
						</Text>
					</A.CenterAlignedColumnContainer>
				</>
			) : null}
		</AnimatePresence>
	);
};

const getActiveIndicatorStyles = (indicator: {}, value: string) => {
	switch (indicator) {
		case "background":
			return css`
				background-color: ${value || "rgba(255,255,255,0.3)"};
			`;
		case "color":
			return css`
				color: ${value || "rgba(255,255,255,0.3)"};
			`;
		case "borderBottom":
			return css`
				border-radius: 0;
				border-bottom: ${value || "2px solid rgba(255,255,255,0.3)"};
			`;
		case "scale":
			return css`
				transform: scale(${value || 1.2});
			`;
		case "opacity":
			return css`
				opacity: ${value || 0.5};
			`;

		default:
			return css``;
	}
};

const IconParentContainer = styled(A.CenterAlignedColumnContainer)<IconProps>`
	padding: ${({ padding }) => padding || defaultIconProps.padding};
	aspect-ratio: ${({ aspectRatio }) =>
		aspectRatio || defaultIconProps.aspectRatio};
	position: relative;
	max-width: 128px;
	box-shadow: ${({ boxShadow }) => boxShadow || defaultIconProps.boxShadow};
	background-color: ${({ backgroundColor }) =>
		backgroundColor || defaultIconProps.backgroundColor};
	background: ${({ background }) => background || defaultIconProps.background};
	}
		
	${({ isActive, activeIndicator }) =>
		isActive && activeIndicator
			? Object.keys(activeIndicator)?.map((indicator) =>
					getActiveIndicatorStyles(
						indicator,
						// @ts-ignore
						activeIndicator[indicator]
					)
			  )
			: null}
`;

Icon.Author = React.memo(createIconComponent("AuthorsIcon"));
Icon.Cancel = React.memo(createIconComponent("CancelIcon"));
Icon.Checkbox = React.memo(createIconComponent("CheckboxIcon"));
Icon.Chevron = React.memo(createIconComponent("ChevronIcon"));
Icon.Close = React.memo(createIconComponent("CloseIcon"));
Icon.Hey = React.memo(createIconComponent("HeyIcon"));
Icon.Home = React.memo(createIconComponent("HomeIcon"));
Icon.Logo = React.memo(createIconComponent("LogoIcon"));
Icon.Menu = React.memo(createIconComponent("MenuIcon"));
Icon.Quotes = React.memo(createIconComponent("QuotesIcon"));
Icon.Search = React.memo(createIconComponent("SearchIcon"));
Icon.Tags = React.memo(createIconComponent("TagsIcon"));
Icon.Theme = React.memo(createIconComponent("ThemeIcon"));
Icon.ColorSplash = React.memo(createIconComponent("ColorSplashIcon"));
Icon.Share = React.memo(createIconComponent("ShareIcon"));
Icon.Copy = React.memo(createIconComponent("CopyIcon"));
