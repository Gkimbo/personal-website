import { Parallax } from "react-parallax";
import image1 from "../images/tudor-baciu-vc3iVL_znJ8-unsplash.jpg";

export const BackGroundImage1 = () => (
	<Parallax className="image" bgImage={image1} bgImageAlt="mug" strength={800}>
		<div className="content">
			<h3>Hey, I'm</h3>
			<h1>Gavin Kimball</h1>
		</div>
	</Parallax>
);
