import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HighlightText from "./HighlightText";

describe("HighlightText", () => {
	it("should render successfully", () => {
		const { baseElement } = render(
			<HighlightText
				text="HighlightText"
				highlight="Text"
				highlightColor="lightpink"
				fontFamily="Arial"
			/>
		);
		expect(baseElement).toBeTruthy();
	});
});
