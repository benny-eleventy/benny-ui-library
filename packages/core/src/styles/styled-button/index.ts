import styled from "styled-components";
import {
	br_small,
	fs_regular,
	fw_regular,
	primaryFont,
	s_xxsmall,
} from "../../constants";
import type { CoreProps } from "../../types";

export const Button = styled.button.attrs<CoreProps>(({ dataTestId }) => ({
	"data-testid": dataTestId,
}))<CoreProps>`
	display: flex;
	justify-content: center;
	align-items: center;

	width: ${(props) => (props.width ? props.width : "fit-content")};
	height: ${(props) => (props.height ? props.height : "auto")};
	
	max-width: ${(props) => props.maxWidth};
	max-height: ${(props) => props.maxHeight};
	min-width: ${(props) => props.minWidth}
	min-height: ${(props) => props.minHeight};

	padding: ${(props) => (props.padding ? props.padding : s_xxsmall)};
	gap: ${(props) => (props.gap ? props.gap : s_xxsmall)};

	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius : br_small};
	color: ${(props) => (props.color ? props.color : "white")};
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : "transparent"};
	background: ${(props) => (props.background ? props.background : "none")};

	font-size: ${(props) => (props.fontSize ? props.fontSize : fs_regular)};
	font-family: ${primaryFont || "inherit"};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : fw_regular)};
	letter-spacing: ${(props) => (props.letterSpacing ? props.letterSpacing : "1")};

	box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : "none")};

	border-bottom: ${(props) => (props.borderBottom ? props.borderBottom : "none")};
	border: ${(props) => (props.border ? props.border : "none")};

	cursor: pointer;
	-webkit-appearance: none;
	-moz-appearance: none;
	outline: none;
`;
