import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import GradientText from "./GradientText";

describe("GradientText", () => {
	it("should render successfully", () => {
		const { baseElement } = render(
			<GradientText
				text="GradientText"
				gradient="linear-gradient(90deg, #FF008C 0%, #FF8C00 100%)"
			/>
		);
		expect(baseElement).toBeTruthy();
	});
});
