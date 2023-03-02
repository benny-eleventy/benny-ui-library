import * as React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<Button label="Test" onClick={() => {}} />);
		expect(baseElement).toBeTruthy();
	});
	//test to check if the button is clickable
	it("calls onClick when clicked", () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<Button label="Click me" onClick={handleClick} />
		);
		const button = getByText("Click me");
		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("should render left Icon to the left of the label", () => {
		const { getByTestId } = render(
			<Button
				label="Test"
				onClick={() => {}}
				leftIcon={<div data-testid="leftIcon" />}
			/>
		);
		const leftIcon = getByTestId("leftIcon");
		expect(leftIcon).toBeInTheDocument();
	});
});
