import styled from "styled-components";
import { fs_regular, primaryFont } from "../../constants";
import type { TextAreaProps } from "../../types";

export const TextArea = styled.textarea<TextAreaProps>`
	width: ${(props) => props.width || "100%"};
	border: none;
	background: ${(props) => props.background || "none"};
	color: ${(props) => props.color || "white"};
	padding-inline: ${(props) => props.paddingInline};
	padding-block: ${(props) => props.paddingBlock};
	font-size: ${(props) => props.fontSize || fs_regular};
	font-family: ${(props) => props.fontFamily || primaryFont};
	box-sizing: border-box;
	resize: none;
	overflow: auto;

	&:focus {
		outline: none;
	}

	//hide the scrollbar
	&::-webkit-scrollbar {
		display: none;
	}
	//hide on mozilla firefox
	-ms-overflow-style: none;

	&::-webkit-input-placeholder {
		/* Webkit-based browsers (e.g., Chrome, Safari) */
		color: ${(props) => props.placeholderColor || "white"};
	}

	&::-moz-placeholder {
		/* Firefox 19+ */
		color: ${(props) => props.placeholderColor || "white"};
	}

	&:-ms-input-placeholder {
		/* IE 10+ */
		color: ${(props) => props.placeholderColor || "white"};
	}

	&::placeholder {
		/* Standard */
		color: ${(props) => props.placeholderColor || "white"};
	}
`;
