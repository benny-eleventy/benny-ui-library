import {
	CenterAlignedColumnContainer,
	CoreProps,
	s_small,
	s,
	styled,
} from "@bennyui/core";
import * as React from "react";

interface TextAreaProps {
	// Add props here
	initialHeight: number | string;
	maxHeight: string;
	value?: string;
	onClick?: (e: any) => void;
	onChange: (value: any) => void;
	onClear?: (e: any) => void;
	onBlur?: () => void;
	displayClearText?: boolean;
	placeholder?: string;
	id?: string;
	borderWidth?: string;
	borderColor?: string;
	borderHoverColor?: string;
	activeBorderColor?: string;
	errorBorderColor?: string;
	placeholderColor?: string;
	autoGrow?: boolean;
}

const TextArea = (props: TextAreaProps) => {
	const {
		value,
		onChange,
		onClear,
		onBlur,
		placeholder,
		id,
		displayClearText = true,
		autoGrow = false,
		...rest
	} = props;

	const [textAreaHeight, setTextAreaHeight] =
		React.useState<number | string>("auto");
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isFocused, setIsFocused] = React.useState(false);
	const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

	React.useLayoutEffect(() => {
		if (textAreaRef.current) {
			setTextAreaHeight(textAreaRef.current.scrollHeight);
			textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
		}
	}, [value]);

	const handleFocus = React.useCallback(() => {
		setIsFocused(true);
	}, []);

	const handleBlur = React.useCallback(() => {
		setIsFocused(false);
		onBlur && onBlur();
	}, [onBlur]);

	React.useEffect(() => {
		if (textAreaRef.current) {
			textAreaRef.current.addEventListener("focus", handleFocus);
			textAreaRef.current.addEventListener("blur", handleBlur);
		}
		//cleanup
		return () => {
			if (textAreaRef.current) {
				textAreaRef.current.removeEventListener("focus", handleFocus);
				textAreaRef.current.removeEventListener("blur", handleBlur);
			}
		};
	}, []);

	const handleChange = React.useCallback(
		(event: React.ChangeEvent<HTMLTextAreaElement>) => {
			onChange(event);
		},
		[onChange]
	);

	const handleClear = React.useCallback(
		(event: React.MouseEventHandler<HTMLDivElement>) => {
			if (textAreaRef.current) {
				textAreaRef.current.value = "";
				textAreaRef.current.focus();
				setIsFocused(true);
				onClear && onClear(event);
			}
		},
		[onClear]
	);
	return (
		// @ts-ignore
		<TextAreaContainer
			{...rest}
			data-testid="text-area-container"
			borderColor={isFocused ? props.activeBorderColor : props.borderColor}
		>
			<s.TextArea
				id={id}
				ref={textAreaRef}
				autoComplete="off"
				autoCorrect="on"
				placeholder={placeholder || "Start typing..."}
				value={value}
				style={{
					width: "100%",
					height: textAreaHeight,
					minHeight: props.initialHeight,
					maxHeight: autoGrow
						? props.maxHeight
							? props.maxHeight
							: props.initialHeight
						: props.initialHeight,
				}}
				onChange={handleChange}
				onBlur={handleBlur}
				{...rest}
			/>
			{/* {displayClearText && value && value.length > 0 ? (
				<CenterAlignedColumnContainer width="auto" height="auto">
					<Icon.Close
						// @ts-ignore
						color="white"
						position="absolute"
						top="calc(clamp(0.89rem,calc(0.78rem + 0.54vw),1.20rem)/2)"
						left="calc(100% - clamp(1.00rem, calc(0.83rem + 0.87vw), 1.50rem))"
						//@ts-ignore
						onClick={handleClear}
						size={fs_regular}
						style={{
							paddingBlock: "0",
							textDecoration: "underline",
						}}
					/>
				</CenterAlignedColumnContainer>
			) : null} */}
		</TextAreaContainer>
	);
};

export { TextArea };
export type { TextAreaProps };
export default TextArea;

interface TextAreaContainerProps extends CoreProps {
	borderWidth?: string;
	borderColor?: string;
	borderHoverColor?: string;
	activeBorderColor?: string;
	errorBorderColor?: string;
	initialHeight?: number | string;
}

const TextAreaContainer = styled(
	CenterAlignedColumnContainer
)<TextAreaContainerProps>`
	width: ${(props) => props.width || "50%"};
	height:"auto";
	position: ${(props) => props.position || "relative"};

	padding: ${(props) => props.padding || s_small};
	border: ${(props) =>
		`${props.borderWidth || "1px"} solid ${props.borderColor || "lightgrey"}`};
	transition: border-color 0.8s ease-in-out;

	&:hover {
		border: ${(props) =>
			`${props.borderWidth || "1px"} solid ${
				props.borderHoverColor || "lightgrey"
			}`};

	&:focus-within {
		border: ${(props) =>
			`${props.borderWidth || "1px"} solid ${
				props.activeBorderColor || "lightgrey"
			}`};
`;
