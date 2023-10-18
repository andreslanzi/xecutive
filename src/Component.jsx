import React from "react";

const Component = ({ data }) => {
	const peopleWithAge = data.filter((item) => item.age !== null);
	const totalAges = peopleWithAge.reduce((acc, curr) => acc + curr.age, 0);
	const averageAge = totalAges / peopleWithAge.length;

	return (
		<div>
			<h1>Average Age: {averageAge}</h1>
		</div>
	);
};

export default Component;
