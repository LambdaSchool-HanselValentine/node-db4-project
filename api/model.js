const db = require("../data/config-db");

const getRecipes = async () => {
	/* RAW: 
'select
    r.recipe_id, r.recipe_name, r.created_at,
    s.step_id, s.step_instructions, s.step_number,
    i.ingredient_id, i.ingredient_name,
    iq.quantity
from recipes r
join steps s
    on s.recipe_id = r.recipe_id
join ingredients i
    on s.ingredient_id = i.ingredient_id
join ingredients_quantity iq
      on s.ingredientQuantity_id = iq.ingredientQuantity_id'
*/

	const recipeList = await db
		.select(
			"r.recipe_id",
			"r.recipe_name",
			"r.created_at",
			"s.step_id",
			"s.step_instructions",
			"s.step_number",
			"i.ingredient_id",
			"i.ingredient_name",
			"iq.quantity",
		)
		.from("recipes as r")
		.join("steps as s", "s.recipe_id", "r.recipe_id")
		.join("ingredients as i", "s.ingredient_id", "i.ingredient_id")
		.join(
			"ingredients_quantity as iq",
			"s.ingredientQuantity_id",
			"iq.ingredientQuantity_id",
		);

	// const newList = recipeList.map((item) => ({
	// 	recipe_id: item.recipe_id,
	// 	recipe_name: item.recipe_name,
	// 	created_at: item.created_at,
	//     // steps:

	// }));

	return recipeList;
};

const getRecipeById = (recipe_id) => {};

module.exports = {
	getRecipes,
	getRecipeById,
};
