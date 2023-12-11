import React from "react";
import { Grid } from "@mui/material";
import { Parallax } from "react-parallax";
import backgroundImage from "../images/tudor-baciu-vc3iVL_znJ8-unsplash.jpg";

const TechnicalSkills = () => {
	const skillsData = {
		Languages: [
			"React",
			"React Native",
			"TypeScript",
			"JavaScript",
			"Python",
			"HTML",
			"CSS",
		],
		Databases: ["SQL", "PostgreSQL"],
		Tools: ["Sass", "Foundation", "Git", "GitHub", "Express.js", "Passport"],
	};

	return (
		<Parallax
			className="technical-skills-container"
			bgImage={backgroundImage}
			bgImageAlt="mug"
			strength={400}
		>
			<h2 className="section-heading-tech">Technical Skills</h2>
			<Grid container spacing={2} justifyContent="center">
				{Object.entries(skillsData).map(([category, skills], index) => (
					<Grid
						className="skills-categories-container"
						key={index}
						item
						xs={12}
						md={4}
					>
						<div className="skills-category">
							<h3>{category}</h3>
							<p className="skills-list">{skills.join(", ")}</p>
						</div>
					</Grid>
				))}
			</Grid>
		</Parallax>
	);
};

export default TechnicalSkills;
