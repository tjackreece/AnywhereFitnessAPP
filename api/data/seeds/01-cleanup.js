exports.seed = async function (knex) {
	await knex("clientList").truncate();
	await knex("userInfo").truncate();
	await knex("class").truncate();
	await knex("class").insert([
		{
			class_name: "Running The Block",
			class_time: "12:00",
			class_am_or_pm: "pm",
			class_date: "2021-26-08",
			class_duration: 90,
			class_type: "Cardio",
			class_intensity_level: "Hard",
			class_location: "Naples",
			class_description:
				"You know what it is. time to run the block, hold down my set, get shit started",
			class_instructor_username: "tjackreece",
			class_cost: "35",
		},
		{
			class_name: "Running Up a Hill",
			class_time: "5:00",
			class_am_or_pm: "AM",
			class_date: "2021-26-08",
			class_duration: 120,
			class_type: "Cardio",
			class_intensity_level: "Hard",
			class_location: "Naples",
			class_description:
				"You know what it is. time to run this, hold down my breakfast",
			class_instructor_username: "tjackreece",
			class_cost: "20",
		},
	]);
	await knex("userInfo").insert([
		{
			first_name: "Timothy",
			last_name: "Jackreece",
			email: "tjackreece@gmail.com",
			username: "tjackreece",
			password: "password",
			role: "Instructor",
		},
		{
			first_name: "Carlotta",
			last_name: "Jackreece",
			email: "cjackreece@gmail.com",
			username: "cjackreece",
			password: "password",
			role: "Instructor",
		},
	]);
	await knex("clientList").insert([
		{
			class_id: 1,
			usersId: 1,
		},
	]);
};
