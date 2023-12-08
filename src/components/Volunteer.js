import React from "react";

const VolunteerExperience = () => {
	const volunteerData = [
		{
			organization: "Code For Boston",
			location: "Cambridge, MA",
			dates: ["August 2023 - Present"],
			description:
				"I am currently volunteering my expertise to a React with TypeScript project that aims to assist homeowners in comprehending their energy consumption and adopting sustainable practices to reduce their carbon footprint. My role involves assisting in the development of a user-friendly frontend for an energy calculator. This entails crafting an intuitive interface, seamlessly integrating real-time data sources, and implementing interactive data visualization to offer homeowners a transparent view of their energy usage patterns. This project reflects my dedication to using technology for the betterment of the community and the environment.",
		},
		// Add more volunteer experiences as needed
	];

	return (
		<div className="container">
			<h2 className="section-heading">Volunteer Experience</h2>
			{volunteerData.map((volunteer, index) => (
				<div key={index} className="volunteer-item">
					<h3 className="organization">{volunteer.organization}</h3>
					<p className="location">{volunteer.location}</p>
					{volunteer.dates.map((date, i) => (
						<p key={i} className="dates">
							{date}
						</p>
					))}
					<ul className="responsibilities-list">
						{volunteer.description.split("\n").map((item, i) => (
							<li key={i} className="responsibility-item">
								{item}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default VolunteerExperience;
