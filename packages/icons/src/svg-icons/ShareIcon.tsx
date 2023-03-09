import * as React from "react";

const SvgComponent = (
	props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g
			style={{
				fill: "currentColor",
			}}
		>
			<path
				style={{
					fill: "currentColor",
					fillOpacity: 1,
					stroke: "none",
					strokeWidth: 3.20318,
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeDasharray: "none",
					strokeOpacity: 1,
					paintOrder: "markers stroke fill",
				}}
				d="M56.018 3.289a9.507 8.356 87.454 0 0-3.557 1.193 9.507 8.356 87.454 0 0-3.896 10.55L30.035 26.87a9.507 8.356 87.454 0 0-5.075-1.701 9.507 8.356 87.454 0 0-7.926 9.869 9.507 8.356 87.454 0 0 8.77 9.126 9.507 8.356 87.454 0 0 5.302-2.503l19.085 9.925a9.507 8.356 87.454 0 0 4.817 10.164 9.507 8.356 87.454 0 0 11.043-4.652 9.507 8.356 87.454 0 0-4.217-12.612 9.507 8.356 87.454 0 0-9.816 2.502l-18.586-9.665a9.507 8.356 87.454 0 0 .298-3.028 9.507 8.356 87.454 0 0-.756-3.46l17.792-11.368a9.507 8.356 87.454 0 0 10.026 1.605 9.507 8.356 87.454 0 0 3.082-12.937 9.507 8.356 87.454 0 0-7.856-4.846zm-.272 4.91a4.754 4.178 87.454 0 1 4.485 2.34 4.754 4.178 87.454 0 1-1.542 6.47 4.754 4.178 87.454 0 1-5.706-1.829 4.754 4.178 87.454 0 1 1.542-6.465 4.754 4.178 87.454 0 1 1.221-.516zm-30.632 21.66a4.754 4.178 87.454 0 1 4.385 4.562 4.754 4.178 87.454 0 1-3.963 4.935 4.754 4.178 87.454 0 1-4.385-4.563 4.754 4.178 87.454 0 1 3.963-4.935zM57.53 48.375a4.754 4.178 87.454 0 1 2.57.344 4.754 4.178 87.454 0 1 2.11 6.306 4.754 4.178 87.454 0 1-5.522 2.328 4.754 4.178 87.454 0 1-2.11-6.307 4.754 4.178 87.454 0 1 2.952-2.671z"
				transform="matrix(.7173 .02804 -.0319 .63048 -5.062 1.432)"
			/>
		</g>
	</svg>
);

export default SvgComponent;
