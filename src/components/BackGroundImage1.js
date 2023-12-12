import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import image1 from "../images/IMG_5335.jpg";
import linkedin from "../images/linkedin-logo.png";
import github from "../images/GitHub-Logo-removebg-preview.png";
import email from "../images/email-logo-removebg-preview.png";

export const BackGroundImage1 = () => {
	const [arrowClass, setArrowClass] = useState("");
	const [arrowOpacity, setArrowOpacity] = useState("1");

	const handleScroll = () => {
		const scrollPos = window.scrollY;

		if (scrollPos > 100) {
			setArrowClass("x-large");
			setArrowOpacity("0.5");
		} else {
			setArrowClass("");
			setArrowOpacity("1");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

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
				<div className="each-link">
					<a href="mailto:gavin.a.kimball@gmail.com">
						<img src={email} alt="Email" />
					</a>
				</div>
				<div className="each-link">
					<a href="https://linkedin.com/in/gavinkimball">
						<img src={linkedin} alt="LinkedIn" className="linkedin-logo" />
					</a>
				</div>
				<div className="each-link">
					<a href="https://github.com/Gkimbo">
						<img src={github} alt="GitHub" />
					</a>
				</div>
			</div>
			<div className="content">
				<h3>Hey, I'm</h3>
				<h1>Gavin Kimball</h1>
				<p>Software Developer</p>
			</div>
			<div className={`arrow ${arrowClass}`} style={{ opacity: arrowOpacity }}>
				<i className="fa-solid fa-angles-down"></i>
			</div>
		</Parallax>
	);
};
