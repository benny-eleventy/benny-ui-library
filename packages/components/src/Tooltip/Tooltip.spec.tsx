import * as React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tooltip from "./Tooltip";

describe("Tooltip", () => {
	it("should render successfully", () => {
		const { baseElement } = render(
			<Tooltip id="test" label="Tooltip Text" position={["bottom", "0.5rem"]} />
		);
		expect(baseElement).toBeTruthy();
	});

	it("should display tooltip text", () => {
		const { getByText } = render(
			<Tooltip id="test" label="Tooltip Text" position={["bottom", "0.5rem"]} />
		);
		expect(getByText("Tooltip Text")).toBeTruthy();
	});

	it("applies the position prop correctly", () => {
		const { getByTestId } = render(
			<Tooltip id="test" label="Tooltip content" position={["top", "10px"]} />
		);
		expect(getByTestId("tooltip")).toHaveStyle("bottom: calc(100% + 10px)");
		expect(getByTestId("tooltip")).toHaveAttribute("id", "test");
	});

	it("renders the leftIcon and rightIcon props correctly", () => {
		const leftIcon = <span>Left icon</span>;
		const rightIcon = <span>Right icon</span>;
		const { getByText } = render(
			<Tooltip
				id="test"
				label="Tooltip content"
				leftIcon={leftIcon}
				rightIcon={rightIcon}
				position={["top", "10px"]}
			/>
		);
		expect(getByText("Left icon")).toBeInTheDocument();
		expect(getByText("Right icon")).toBeInTheDocument();
	});

	it("applies the styles prop correctly", () => {
		const styles = { backgroundColor: "red", color: "white" };
		const { getByTestId } = render(
			<Tooltip
				id="test"
				position={["top", "1rem"]}
				label="Tooltip content"
				styles={styles}
			/>
		);
		expect(getByTestId("tooltip")).toHaveStyle(
			"background-color: red; color: white"
		);
	});

	it("applies the animation props correctly", async () => {
		const { getByTestId } = render(
			<Tooltip
				id="test"
				position={["top", "1rem"]}
				label="Tooltip content"
				animation={{
					animationType: "opacity",
					animationDuration: [0.4, 0.2],
					animationConfig: [0, 1, 0],
				}}
			/>
		);
		expect(getByTestId("tooltip")).toHaveStyle("opacity: 0");
		await waitFor(
			() => expect(getByTestId("tooltip")).toHaveStyle("opacity: 1"),
			{ timeout: 500 }
		);
	});
});
