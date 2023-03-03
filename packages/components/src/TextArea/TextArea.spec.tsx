import * as React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextArea from "./TextArea";

describe("TextArea", () => {
	it("should render successfully", () => {
		const { baseElement } = render(
			<TextArea
				value="Test"
				onChange={() => {}}
				initialHeight={0}
				maxHeight="0px"
			/>
		);
		expect(baseElement).toBeTruthy();
	});

	it("should call onChange function with the expected value", () => {
		const onChangeMock = jest.fn();
		const { getByTestId } = render(
			<TextArea
				initialHeight={0}
				maxHeight="0px"
				onChange={(e) => onChangeMock(e.target.value)}
				data-testid="text-area"
			/>
		);
		const textArea = getByTestId("text-area");

		fireEvent.change(textArea, { target: { value: "Hello, world!" } });

		expect(onChangeMock).toHaveBeenCalledWith("Hello, world!");
	});

	it("should call handleBlur function when textarea blurs", () => {
		const handleBlurMock = jest.fn();
		const { getByTestId } = render(
			<TextArea
				initialHeight={0}
				onChange={() => {}}
				maxHeight="0px"
				onBlur={handleBlurMock}
				data-testid="text-area"
			/>
		);
		const textArea = getByTestId("text-area");

		fireEvent.blur(textArea);

		expect(handleBlurMock).toHaveBeenCalled();
	});
});
