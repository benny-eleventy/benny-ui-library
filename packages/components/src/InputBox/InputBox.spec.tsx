import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputBox from "./InputBox";

describe("InputBox", () => {
	it("should render successfully", () => {
		const { baseElement } = render(
			<InputBox id="test" value="test" onChange={() => {}} />
		);
		expect(baseElement).toBeTruthy();
	});
	it("should call onChange function with the expected value", () => {
		const onChangeMock = jest.fn();
		const { getByTestId } = render(
			<InputBox
				id="input-box"
				value="test"
				onChange={(e) => onChangeMock(e.target.value)}
				dataTestId="input-box"
			/>
		);
		const inputBox = getByTestId("input-box");

		fireEvent.change(inputBox, { target: { value: "Hello, world!" } });

		expect(onChangeMock).toHaveBeenCalledWith("Hello, world!");
	});

	it("should call handleBlur function when input box blurs", () => {
		const handleBlurMock = jest.fn();
		const { getByTestId } = render(
			<InputBox
				id="input-box"
				value="test"
				onChange={() => {}}
				onBlur={handleBlurMock}
				dataTestId="input-box"
			/>
		);
		const inputBox = getByTestId("input-box");

		fireEvent.blur(inputBox);

		expect(handleBlurMock).toHaveBeenCalled();
	});

	it("should clear input box when clear button is clicked", () => {
		const onChangeMock = jest.fn();
		const { getByTestId } = render(
			<InputBox
				id="input-box"
				value="test"
				onChange={() => {}}
				onClear={() => onChangeMock("")}
				dataTestId="input-box"
			/>
		);
		// const inputBox = getByTestId("input-box") as HTMLInputElement;
		const clearButton = getByTestId("clear-button");

		fireEvent.click(clearButton);
		expect(onChangeMock).toHaveBeenCalledWith("");
		// expect(inputBox.value).toBe("");
	});

	it("should set focus on inputbox when focusInputBox is true", () => {
		const { getByTestId } = render(
			<InputBox
				id="input-box"
				value="test"
				onChange={() => {}}
				focusInputBox={true}
				dataTestId="input-box"
			/>
		);
		const inputBox = getByTestId("input-box") as HTMLInputElement;
		expect(inputBox).toHaveFocus();
	});

	it("should set focus on inputbox when focusOnMount is true", () => {
		const { getByTestId } = render(
			<InputBox
				id="input-box"
				value="test"
				onChange={() => {}}
				focusOnMount={true}
				dataTestId="input-box"
			/>
		);
		const inputBox = getByTestId("input-box") as HTMLInputElement;
		expect(inputBox).toHaveFocus();
	});

	it("should call onBlur function when input box blurs", () => {
		const onBlurMock = jest.fn();
		const { getByTestId } = render(
			<InputBox
				id="input-box"
				value="test"
				onChange={() => {}}
				onBlur={onBlurMock}
				dataTestId="input-box"
			/>
		);
		const inputBox = getByTestId("input-box");

		fireEvent.blur(inputBox);

		expect(onBlurMock).toHaveBeenCalled();
	});

	it("should call onEnter function when Enter key pressed in Input box", () => {
		const onEnterMock = jest.fn();
		const { getByTestId } = render(
			<InputBox
				id="input-box"
				value="test"
				onChange={() => {}}
				onEnter={onEnterMock}
				dataTestId="input-box"
			/>
		);
		const inputBox = getByTestId("input-box");

		fireEvent.keyDown(inputBox, { key: "Enter", code: "Enter" });

		expect(onEnterMock).toHaveBeenCalled();
	});
});
