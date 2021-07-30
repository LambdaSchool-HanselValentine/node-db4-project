exports.up = async function (knex) {
	await knex.schema
		.createTable("recipes", (table) => {
			table.increments("recipe_id");
			table.string("recipe_name", 128).notNullable().unique();
			table.timestamp("created_at").defaultTo(knex.fn.now());
		})
		.createTable("ingredients", (table) => {
			table.increments("ingredient_id");
			table.string("ingredient_name", 128).notNullable().unique();
		})
		.createTable("ingredients_quantity", (table) => {
			table.increments("ingredientQuantity_id");
			table.integer("quantity").notNullable();
		})
		.createTable("steps", (table) => {
			table.increments("step_id");
			table.string("step_instructions").notNullable().unique();
			table.integer("recipe_id");
			table
				.integer("ingredient_id")
				.unsigned()
				.references("recipe_id")
				.inTable("recipe")
				.onDelete("RESTRICT")
				.onUpdate("RESTRICT");
			table
				.integer("ingredientQuantity_id")
				.unsigned()
				.references("ingredientQuantity_id")
				.inTable("ingredients_quantity")
				.onDelete("RESTRICT")
				.onUpdate("RESTRICT");
		});
};

exports.down = async function (knex) {
	await knex.schema
		.dropTableIfExists("ingredients_quantity")
		.dropTableIfExists("ingredients")
		.dropTableIfExists("recipe_steps")
		.dropTableIfExists("steps")
		.dropTableIfExists("recipes");
};
