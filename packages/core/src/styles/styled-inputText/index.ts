import styled from "styled-components";
import { fs_regular, primaryFont } from "../../constants";
import { InputTextProps } from "../../types";

export const InputText = styled.input<InputTextProps>`
	width: ${(props) => (props.width ? props.width : "auto")};
	height: ${(props) => (props.height ? props.height : "auto")};
	border: ${(props) => (props.border ? props.border : "none")};
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius : "br_regular"};

	padding: ${(props) => (props.padding ? props.padding : "0")};
	font-size: ${(props) => (props.fontSize ? props.fontSize : fs_regular)};
	font-family: ${primaryFont || "inherit"};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
	letter-spacing: ${(props) =>
		props.letterSpacing ? props.letterSpacing : "1"};
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : "none"};
	background: ${(props) => (props.background ? props.background : "none")};
	color: ${(props) => (props.color ? props.color : "black")};
	box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : "none")};
	outline: none;
	cursor: ${(props) => (props.cursor ? props.cursor : "text")};
	outline: 0px;
	text-indent: ${(props) => (props.textIndent ? props.textIndent : "0")};
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
