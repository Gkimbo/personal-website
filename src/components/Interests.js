import React from "react";
import { Grid } from "@mui/material";

const Interests = () => {
	const interestsData = [
		{
			name: "Hiking",
			description:
				"Exploring scenic trails, breathing in fresh mountain air, and connecting with nature are some of the reasons why hiking is my favorite outdoor activity. Whether it's a leisurely day hike or a challenging multi-day trek, I love the sense of adventure and tranquility that hiking brings.",
		},
		{
			name: "Skiing",
			description:
				"Carving through snow-covered slopes, feeling the rush of cold wind, and enjoying the winter wonderland – skiing is truly thrilling. Making winter my favorite season.",
		},
		{
			name: "Electric Vehicles",
			description:
				"I'm passionate about the future of transportation, I am fascinated by electric vehicles and their role in creating a sustainable and eco-friendly world. Keeping up with the latest advancements in EV technology, exploring electric car models, and advocating for clean energy solutions drive my interest.",
		},
		{
			name: "Traveling",
			description:
				"Exploring new cultures, trying local cuisines, and immersing myself in diverse landscapes inspire my love for travel. Whether it's a bustling city or a remote natural wonder, every journey provides a new perspective and enriches my understanding of the world.",
		},
		{
			name: "Fitness",
			description:
				"Maintaining an active and healthy lifestyle is important to me. Whether it's going to the gym, or just going for a long walk. Staying fit helps me stay energized and focused in all aspects of life.",
		},
	];

	return (
		<div className="interests-container">
			<h2 className="section-heading">My Interests</h2>
			<Grid container spacing={4} justifyContent="center">
				{interestsData.map((interest, index) => (
					<Grid key={index} item sm={12} md={4} lg={2}>
						<div key={index} className="interest-item">
							<h3 className="interest-title">{interest.name}</h3>
							<p className="interest-description">{interest.description}</p>
						</div>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Interests;
