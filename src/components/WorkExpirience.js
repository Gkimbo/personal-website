import React from "react";
import launchImg from "../images/launch.png";
import CrowleyImg from "../images/crowley.png";
import MscImg from "../images/MSC.png";

const WorkExperience = () => {
	const experiences = [
		{
			company: "Military Sealift Command",
			location: "Norfolk, VA",
			position: "Damage Control Officer",
			date: "March 2024 - Present",
			responsibilities: [
				" Lead training on flight deck Operations, including safety walk-throughs, FireFighting, and Shipboard safety.",
				" Created training plans, for all mariners.",
			],
			image: MscImg,
		},
		{
			company: "Launch Academy",
			location: "Boston, MA",
			position: "Junior Full Stack Developer",
			date: "April 2023 - August 2023",
			responsibilities: [
				" Completed an immersive Full Stack Developer program, gaining skills in various tools and languages, including JavaScript, React, SQL, Cypress testing, Jest testing, Express.js, Node.js, RESTful API Design, Responsive Web Design, Problem Solving, Version Control (Git).",
				" Implemented unit testing, test-driven development, and responsive web design, including use of JSON, HTTP.",
				" Collaborated effectively in a team environment, pair programmed and working fast to deliver high-quality projects in an efficient and effective manner.",
				" Implemented object-oriented design patterns to create efficient flow control in the development of diverse web applications.",
			],
			image: launchImg,
		},
		{
			company: "Crowley Petroleum",
			location: "Jacksonville, FL",
			position: "Second Mate",
			date: "June 2022 - April 2023",
			responsibilities: [
				" Demonstrated leadership in managing diverse teams, prioritizing safety, and fostering effective teamwork while overseeing critical operations.",
				" Executed key responsibilities, including managing the coordination of vessel logistics and overseeing the weekly transfer of 1.4 million gallons of cargo.",
				" Thrived in high-pressure scenarios, making decisions to guarantee the safety and security of vessels, showcasing exceptional attention to detail and focus.",
			],
			image: CrowleyImg,
		},
		{
			company: "Military Sealift Command",
			location: "Norfolk, VA",
			position: "Second Officer",
			date: "June 2016 - June 2022",
			responsibilities: [
				" Drove enhancements and maintenance of the Ordnance Information System (OIS) utilizing JavaScript, ensuring seamless functionality and reliability.",
				" Spearheaded collaborative efforts with the IT department to troubleshoot and resolve technical issues.",
				" Supervised a department of 30 personnel including but not limited to payroll, safety, training, and communication.",
				" In charge of Ammunition Cargo Operations in port and at sea.",
				" Oversaw all flight deck Operations, including safety walk-throughs, FireFighting, and Cargo Transfer.",
			],
			image: MscImg,
		},
	];

	return (
		<div className="container">
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
