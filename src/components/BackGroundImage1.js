import React from "react";
import { Parallax } from "react-parallax";
import image1 from "../images/IMG_5335.jpg";
import linkedin from "../images/linkedin-logo.png";
import github from "../images/GitHub-Logo-removebg-preview.png";
import email from "../images/email-logo-removebg-preview.png";
// import phone from "../images/phone_logo-removebg-preview.png";

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
			<div className="social-links">
				<p>
					<a href="mailto:gavin.a.kimball@gmail.com">
						<img src={email} alt="Email" />
					</a>
				</p>
				<p>
					<a
						href="https://linkedin.com/in/gavinkimball"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={linkedin} alt="LinkedIn" className="linkedin-logo" />
					</a>
				</p>
				<p>
					<a
						href="https://github.com/Gkimbo"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={github} alt="GitHub" />
					</a>{" "}
				</p>
				{/* <p>
					<a href="tel:+17749913064">
						<img src={phone} alt="Phone Number" />
					</a>
				</p> */}
			</div>
			<div className="content">
				<h3>Hey, I'm</h3>
				<h1>Gavin Kimball</h1>
				<p>Software Developer</p>
			</div>
		</Parallax>
	);
};
