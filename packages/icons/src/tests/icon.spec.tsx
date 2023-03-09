import * as React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Icon } from "../index";

describe("Icon", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<Icon.Search color="white" />);
		expect(baseElement).toBeTruthy();
	});
	//test to check if the button is clickable
	it("calls onClick when clicked", () => {
		const handleClick = jest.fn();
		const { getByTestId } = render(
			<Icon.Search color="white" onClick={handleClick} />
		);
		const icon = getByTestId("icon-SearchIcon");
		fireEvent.click(icon);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("applies activeIndicator as Styles when isActive is true", () => {
		const { getByTestId } = render(
			<Icon.Search
				color="white"
				isActive={true}
				activeIndicator={{
					borderBottom: "2px solid #fff",
				}}
			/>
		);
		const icon = getByTestId("icon-SearchIcon");
		expect(icon).toHaveStyle("border-bottom: 2px solid #fff");
	});

	it("calls getIconSize when size is passed", () => {
		const { getByTestId } = render(<Icon.Search color="white" size="small" />);
		const icon = getByTestId("icon-container-SearchIcon");
		expect(icon).toHaveStyle("width: 32px");
	});

	it("applies color as Styles when color is passed", () => {
		const { getByTestId } = render(<Icon.Search color="seagreen" />);
		const icon = getByTestId("icon-SearchIcon");
		expect(icon).toHaveStyle("color: seagreen");
	});

	it("overrrides default styles padding,background,boxShadow when padding as prop is passed", () => {
		const { getByTestId } = render(
			<Icon.Search
				color="seagreen"
				background="red"
				boxShadow="0 0 0 1px #fff"
				padding="10px"
			/>
		);
		const icon = getByTestId("icon-SearchIcon");
		expect(icon).toHaveStyle("color: seagreen");
		expect(icon).toHaveStyle("padding: 10px");
		expect(icon).toHaveStyle("background: red");
		expect(icon).toHaveStyle("box-shadow: 0 0 0 1px #fff");
	});

	it("should have width 48px when no size prop is passed", () => {
		const { getByTestId } = render(<Icon.Search color="white" />);
		const icon = getByTestId("icon-container-SearchIcon");
		expect(icon).toHaveStyle("width: 48px");
	});
});
