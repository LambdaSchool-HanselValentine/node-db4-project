exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("steps")
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex("steps").insert([
				{
					step_instructions: "Put a large saucepan on a medium heat",
					recipe_id: 1,
				},
				{
					step_instructions: "Mix eggs and ham",
					recipe_id: 1,
					ingredient_id: 1,
					ingredientQuantity_id: 3,
				},
				{
					step_instructions: "Mix eggs and ham",
					recipe_id: 1,
					ingredient_id: 2,
					ingredientQuantity_id: 2,
				},
			]);
		});
};
