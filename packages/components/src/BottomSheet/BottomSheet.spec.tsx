import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BottomSheet from "./BottomSheet";

describe("BottomSheet", () => {
	it("should render successfully", () => {
		const { baseElement } = render(
			<BottomSheet
				bottomSheetContent={() => <div>Test</div>}
				onClose={() => {}}
			/>
		);

		expect(baseElement).toBeTruthy();
	});

	it("should call onClose when the overlay is clicked", () => {
		const onClose = jest.fn();
		const { getByTestId } = render(
			<BottomSheet
				bottomSheetContent={() => <div>Test</div>}
				onClose={onClose}
			/>
		);
		fireEvent.click(getByTestId("bottom-sheet-overlay-container"));
		expect(onClose).toHaveBeenCalled();
	});

	it("should call onClose when the close button is clicked", () => {
		const onClose = jest.fn();
		const { getByTestId } = render(
			<BottomSheet
				bottomSheetContent={() => <div>Test</div>}
				onClose={onClose}
			/>
		);
		fireEvent.click(getByTestId("bottom-sheet-close-button"));
		expect(onClose).toHaveBeenCalled();
	});
});
