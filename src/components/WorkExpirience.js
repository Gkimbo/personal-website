import React from "react";
import launchImg from "../images/launch.png";
import CrowleyImg from "../images/crowley.png";
import MscImg from "../images/MSC.png";

const WorkExperience = () => {
	const experiences = [
		{
			company: "Launch Academy",
			location: "Boston, MA",
			position: "Junior Full Stack Developer",
			date: "April 2023 - August 2023",
			responsibilities: [
				"Completed an immersive Full Stack Developer program, gaining skills in JavaScript, HTML, CSS, React, SQL, Cypress testing, and more.",
				"Practiced unit testing, test-driven development, software engineering, and responsive web design.",
				"Collaborated effectively in a team environment, practiced pair programming, and leveraged teamwork for high-quality project delivery.",
				"Implemented object-oriented programming, design patterns, and flow control to build various web applications.",
			],
			image: launchImg,
		},
		{
			company: "Crowley Petroleum",
			location: "Jacksonville, FL",
			position: "Second Mate",
			date: "June 2022 - April 2023",
			responsibilities: [
				"Oversaw critical aspects, including the weekly transfer of 1.4 million gallons of cargo, maintaining ship stability through ballast and cargo management.",
				"Planned and executed safe navigation routes, effectively managing teams to ensure the safety and security of the vessels.",
			],
			image: CrowleyImg,
		},
		{
			company: "Military Sealift Command",
			location: "Norfolk, VA",
			position: "Second Officer",
			date: "June 2016 - June 2022",
			responsibilities: [
				"Maintained the Ordnance Information System (OIS) using JavaScript, ensuring reliability and functionality.",
				"Collaborated with the IT department to troubleshoot and resolve technical issues related to the OIS, ensuring uninterrupted operations.",
				"Supervised a department of 30 personnel, including but not limited to payroll, safety, training, and communication.",
				"In charge of Ammunition Cargo Operations in port and at sea.",
				"Oversaw all flight deck operations, including safety walk-throughs, firefighting, and cargo transfer.",
			],
			image: MscImg,
		},
	];

	return (
		<div className="work-experience-container">
			<h2 className="section-heading">Work Experience</h2>
			{experiences.map((experience, index) => (
				<div key={index} className="experience-item">
					{experience.image && (
						<img
							src={experience.image}
							alt={`${experience.company} Logo`}
							className="company-logo"
						/>
					)}
					<div className="experience-details">
						<h3 className="experience-title">{`${experience.position} `}</h3>
						<h4 className="experience-place">{`${experience.company}, ${experience.location}`}</h4>
						<p className="experience-date">{experience.date}</p>
						<ul className="responsibilities-list">
							{experience.responsibilities.map((responsibility, i) => (
								<li key={i} className="responsibility-item">
									{responsibility}
								</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};

export default WorkExperience;
