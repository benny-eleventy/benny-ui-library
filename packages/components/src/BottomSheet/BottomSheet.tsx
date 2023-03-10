import {
	CenterAlignedColumnContainer,
	A,
	br_large,
	br_circle,
} from "@bennyui/core";
import * as React from "react";

interface BottomSheetProps {
	bottomSheetContent: () => JSX.Element;
	onClose: () => void;
	overlayColor?: string;
	isStorybook?: boolean;
}

const BottomSheet = ({
	bottomSheetContent,
	onClose,
	overlayColor,
	isStorybook,
}: BottomSheetProps) => {
	return (
		<CenterAlignedColumnContainer
			id="bottom-sheet-overlay-container"
			//@ts-ignore
			dataTestId="bottom-sheet-overlay-container"
			position={isStorybook ? "relative" : "fixed"}
			bottom="0"
			width={isStorybook ? "300px" : "100vw"}
			height={isStorybook ? "400px" : "100vh"}
			backgroundColor={overlayColor ? overlayColor : "rgba(0,0,0,0.5)"}
			backdropFilter="blur(10px)"
			zIndex="1000"
			borderRadius="0"
			onClick={() => onClose()}
		>
			<A.CenterAlignedColumnContainer
				//@ts-ignore
				id="bottom-sheet-wrapper-container"
				dataTestId="bottom-sheet-wrapper-container"
				width="100%"
				height="auto"
				position="absolute"
				bottom="0"
				initial={{ y: "100%" }}
				animate={{ y: "0%" }}
				exit={{
					y: "100%",
					transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] },
				}}
				transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
				drag="y"
				dragConstraints={{ top: 0, bottom: 0 }}
				dragElastic={0.1}
				onDragEnd={(info) => {
					//@ts-ignore
					if (info.offset.y > 200) {
						onClose();
					}
				}}
			>
				<CenterAlignedColumnContainer
					id="bottom-sheet-drag-handle"
					width="20%"
					height="0.8vh"
					backgroundColor="black"
					position="absolute"
					top="0.4vh"
					borderRadius={br_large}
				/>
				<CenterAlignedColumnContainer
					id="bottom-sheet-close-button"
					//@ts-ignore
					dataTestId="bottom-sheet-close-button"
					width="32px"
					height="32px"
					position="absolute"
					top="1vh"
					right="1vh"
					backgroundColor="lightgreen"
					borderRadius={br_circle}
					onClick={() => onClose()}
				/>
				{bottomSheetContent()}
			</A.CenterAlignedColumnContainer>
		</CenterAlignedColumnContainer>
	);
};
export { BottomSheet };
export type { BottomSheetProps };
export default BottomSheet;
