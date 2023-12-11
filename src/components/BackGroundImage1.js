import React from "react";
import { Parallax } from "react-parallax";
import image1 from "../images/IMG_5335.jpg";

export const BackGroundImage1 = () => {
	const bgImageStyle = {
		width: "100%",
		height: "auto",
	};

	return (
		<Parallax
			className="image"
			bgImage={image1}
			bgImageAlt="mug"
			strength={400}
			bgImageStyle={{ ...bgImageStyle }}
		>
			<div className="content">
				<h3>Hey, I'm</h3>
				<h1>Gavin Kimball</h1>
			</div>
		</Parallax>
	);
};
