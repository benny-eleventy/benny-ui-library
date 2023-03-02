import styled from "styled-components";
import { primaryFont, fs_regular, fw_regular } from "../../constants";
import { SpanProps } from "../../types";

export const Span = styled.span<SpanProps>`
	font-family: ${(props) => props.fontFamily || primaryFont};
	font-size: ${(props) => (props.fontSize ? props.fontSize : fs_regular)};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : fw_regular)};
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : "transparent"};
	color: ${(props) => (props.color ? props.color : "inherit")};
	padding: ${(props) => (props.padding ? props.padding : "0")};
`;
