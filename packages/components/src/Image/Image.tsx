import * as React from "react";
import { s } from "@bennyui/core";

interface ImageProps {
	// Add props here
	id?: string;
	src: string;
	srcSet?: string;
	alt?: string;
	placeHolderImage: string;
	width?: string;
	height?: string;
	aspectRatio?: string;
	objectFit?: React.CSSProperties["objectFit"];
	borderRadius?: string;
}

const Image = (props: ImageProps) => {
	const { src, placeHolderImage, srcSet, alt, id = "image" } = props;
	const [isError, setIsError] = React.useState(false);
	const handleImageError = () => {
		setIsError(true);
	};

	return (
		<s.Image
			{...props}
			id={id}
			src={isError ? placeHolderImage : src}
			srcSet={isError ? placeHolderImage : srcSet}
			onError={handleImageError}
			maxWidth="100%"
			objectPosition="center"
			//@ts-ignore
			alt={alt}
		/>
	);
};
export { Image };
export type { ImageProps };
export default Image;
