import styled from "styled-components";
import type { ImageProps } from "../../types";

export const Image = styled.img<ImageProps>`
	display: block;
	width: ${(props) => (props.width ? props.width : "100%")};
	max-width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
	height: ${(props) => (props.height ? props.height : "auto")};
	object-fit: ${(props) => (props.objectFit ? props.objectFit : "cover")};
	object-position: ${(props) =>
		props.objectPosition ? props.objectPosition : "center"};
	border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "0")};
`;
