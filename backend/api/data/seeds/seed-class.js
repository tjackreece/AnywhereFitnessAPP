exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("class")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("class").insert([
				{
					class_name: "Running The Block",
					class_time: "12:00",
					class_am_or_pm: "pm",
					class_date: "2021-26-08",
					class_duration: 90,
					class_type: "Cardio",
					class_intensity_level: "Hard",
					class_location: "Naples",
					class_address: "101 apple street",
					address_cordinates_lat: 40.412222231,
					address_cordinates_lng: 41.23123412,
					max_class_size: 25,
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
					class_address: "101 apple street",
					address_cordinates_lat: 40.412222231,
					address_cordinates_lng: 41.23123412,
					class_intensity_level: "Hard",
					class_location: "Naples",
					max_class_size: 25,
					class_description:
						"You know what it is. time to run this, hold down my breakfast",
					class_instructor_username: "tjackreece",
					class_cost: "20",
				},
			]);
		});
};
