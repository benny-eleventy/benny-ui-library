import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tooltip from "./Tooltip";

describe("Tooltip", () => {
	it("should render successfully", () => {
		const { baseElement } = render(
			<Tooltip
				tooltipText="Tooltip Text"
				position={["bottom", "0.5rem"]}
				displayTooltip={true}
			/>
		);
		expect(baseElement).toBeTruthy();
	});

	it("should display tooltip text", () => {
		const { getByText } = render(
			<Tooltip
				tooltipText="Tooltip Text"
				position={["bottom", "0.5rem"]}
				displayTooltip={true}
			/>
		);
		expect(getByText("Tooltip Text")).toBeTruthy();
	});

	it("should not display tooltip text", () => {
		const { queryByText } = render(
			<Tooltip
				tooltipText="Tooltip Text"
				position={["bottom", "0.5rem"]}
				displayTooltip={false}
			/>
		);
		expect(queryByText("Tooltip Text")).toBeNull();
	});
});
