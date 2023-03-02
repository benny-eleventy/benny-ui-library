import * as React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Image from "./Image";

describe("Image", () => {
	it("should render successfully", () => {
		const { baseElement } = render(
			<Image
				src="https://images.unsplash.com/photo-1616480461419-8e1b0e1b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
				placeHolderImage="https://images.unsplash.com/photo-1616480461419-8e1b0e1b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
			/>
		);
		expect(baseElement).toBeTruthy();
	});

	it("should display placeholder image when src incorrect", () => {
		const { getByTestId } = render(
			<Image
				data-testid="image"
				src="https://res.cloudinar.com/antilibrary/image/upload/v1670047116/felipe-furtado-mXhxU7vuSVQ-unsplash_rviyj7.jpg"
				placeHolderImage="https://res.cloudinary.com/antilibrary/image/upload/v1676707872/kostiantyn-li-Fi_nhg5itCw-unsplash_qfdbg4.jpg"
			/>
		);
		const image = getByTestId("image");
		fireEvent.error(image);
		expect(image).toHaveAttribute(
			"src",
			"https://res.cloudinary.com/antilibrary/image/upload/v1676707872/kostiantyn-li-Fi_nhg5itCw-unsplash_qfdbg4.jpg"
		);
	});
});
