import {
	A,
	styled,
	s_xxsmall,
	s,
	CenterAlignedColumnContainer,
} from "@bennyui/core";
import * as React from "react";
interface InputBoxProps {
	// Add props here
	activeBorderColor?: string;
	autoComplete?: string;
	borderColor?: string;
	borderWidth?: string;
	dataTestId?: string;
	displayClearText?: boolean;
	focusInputBox?: boolean;
	focusOnMount?: boolean;
	hoverBorderColor?: string;
	id: string;
	leftIcon?: React.ReactNode;
	onBlur?: () => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClear?: (e: React.ChangeEvent<HTMLDivElement>) => void;
	onEnter?: () => void;
	placeholder?: string;
	placeholderColor?: string;
	rightIcon?: React.ReactNode;
	value: string | " ";
}

const InputBox = ({
	activeBorderColor = "#A685E2",
	autoComplete,
	borderColor = "rgba(255, 255, 255, 0.5)",
	borderWidth = "2px",
	dataTestId,
	displayClearText = true,
	focusInputBox = false,
	focusOnMount = false,
	hoverBorderColor = "#FFEB99",
	id,
	leftIcon,
	onBlur,
	onChange,
	onClear,
	onEnter,
	placeholder,
	placeholderColor = "rgba(255, 255, 255, 0.5)",
	rightIcon,
	value,
	...rest
}: InputBoxProps) => {
	const inputBoxRef = React.useRef<HTMLInputElement>(null);

	React.useEffect(() => {
		if (focusOnMount || focusInputBox) {
			// inputBoxRef.current?.focus();
			if (inputBoxRef.current) {
				inputBoxRef.current.focus();
			}
			setIsFocused(true);
		}
	}, [focusOnMount, focusInputBox]);

	//if the input box is focused, then the border should be blue
	const [isFocused, setIsFocused] = React.useState(false);

	const handleBlur = React.useCallback(() => {
		setIsFocused(false);
		onBlur && onBlur();
	}, []);

	const handleFocus = React.useCallback(() => {
		setIsFocused(true);
	}, []);

	const handleClear = React.useCallback(
		(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			if (inputBoxRef.current) {
				inputBoxRef.current.value = "";
				inputBoxRef.current.focus();
				setIsFocused(true);
				//@ts-ignore
				onClear && onClear(event);
			}
		},
		[onClear]
	);

	const handleChange = React.useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			return onChange(event);
		},
		[onChange]
	);

	const handleKeyDown = React.useCallback(
		(event: React.KeyboardEvent<HTMLInputElement>) => {
			if (event.key === "Enter") {
				event.preventDefault();
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const target = event.target as HTMLInputElement;
				onEnter && onEnter();
			}
		},
		[]
	);

	React.useEffect(() => {
		if (inputBoxRef.current) {
			inputBoxRef.current.addEventListener("focus", handleFocus);
			inputBoxRef.current.addEventListener("blur", handleBlur);
		}
		//cleanup
		return () => {
			if (inputBoxRef.current) {
				inputBoxRef.current.removeEventListener("focus", handleFocus);
				inputBoxRef.current.removeEventListener("blur", handleBlur);
			}
		};
	}, []);

	const getBorderStyle = (variant: any) => {
		switch (variant) {
			case "active":
				return activeBorderColor
					? `${borderWidth} solid ${activeBorderColor}`
					: "2px solid #A685E2";
			case "inactive":
				return borderColor
					? `${borderWidth} solid ${borderColor}`
					: "2px solid rgba(255, 255, 255, 0.5)";
			case "hover":
				return hoverBorderColor
					? `${borderWidth} solid ${hoverBorderColor}`
					: "2px solid #FFEB99";
			default:
				return "none";
		}
	};

	return (
		<InputTextContainer
			{...rest}
			data-testid="inputBox"
			border={getBorderStyle(isFocused ? "active" : "inactive")}
			hoverBorder={getBorderStyle(isFocused ? "active" : "hover")}
			paddingInline={s_xxsmall}
			paddingBlock={"0.5rem"}
			color="white"
			gap="0.2rem"
		>
			{leftIcon && leftIcon}
			<s.InputText
				ref={inputBoxRef}
				id={id}
				data-testid={dataTestId}
				onChange={handleChange}
				onBlur={handleBlur}
				onKeyDown={handleKeyDown}
				value={value}
				width="100%"
				height="100%"
				placeholder={placeholder}
				placeholderColor={placeholderColor}
				color="inherit"
				autoComplete={autoComplete ? autoComplete : "off"}
				enterKeyHint={autoComplete ? "search" : "go"}
			/>
			{displayClearText && value && value.length > 0 ? (
				<CenterAlignedColumnContainer
					width="2em"
					aspectRatio="1:1"
					onClick={handleClear}
					data-testid="clear-button"
				/>
			) : (
				rightIcon && rightIcon
			)}
		</InputTextContainer>
	);
};

export { InputBox };
export type { InputBoxProps };
export default InputBox;

interface InputTextContainerProps {
	hoverBorder?: string;
}

const InputTextContainer = styled(
	A.CenterAlignedRowContainer
)<InputTextContainerProps>`
	width: ${(props) => (props.width ? props.width : "100%")};
	height: ${(props) => (props.height ? props.height : "100%")};
	transition: all 0.8s easeInOut;
	&:hover {
		border: ${(props) => (props.hoverBorder ? props.hoverBorder : "none")};
	}
`;
