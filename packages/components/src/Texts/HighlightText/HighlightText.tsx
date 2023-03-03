import { fs_regular, primaryFont, s } from "@bennyui/core";
import * as React from "react";

interface HighlightTextProps {
	// Add props here
	text: string;
	highlight: string;
	highlightColor?: string;
	highlightedTextColor?: string;
	fontFamily?: string;
	fontWeight?: number | string;
	color?: string;
}

const HighlightText: React.FC<HighlightTextProps> = ({
	text,
	highlight,
	highlightColor = "lightpink",
	fontFamily,
	fontWeight,
	color,
	highlightedTextColor,
}) => {
	const parts = text.split(new RegExp(`(${highlight})`, "gi"));
	return (
		<s.Span style={{ fontFamily, fontWeight, color }}>
			{parts.map((part, i) =>
				part.toLowerCase() === highlight.toLowerCase() ? (
					<s.Span
						key={i}
						fontFamily={primaryFont}
						fontSize={fs_regular}
						backgroundColor={highlightColor}
						color={highlightedTextColor || "black"}
						padding="0.2rem"
					>
						{part}
					</s.Span>
				) : (
					<s.Span
						fontFamily={primaryFont}
						fontSize={fs_regular}
						backgroundColor={"transparent"}
						color="white"
						padding="0.2rem"
						key={i}
					>
						{part}
					</s.Span>
				)
			)}
		</s.Span>
	);
};

export { HighlightText };
export type { HighlightTextProps };
export default HighlightText;
