exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("ingredients_quantity")
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex("ingredients_quantity").insert([
				{ quantity: 1 },
				{ quantity: 2 },
				{ quantity: 3 },
			]);
		});
};
