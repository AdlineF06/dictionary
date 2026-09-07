recipes = {
    "pasta": {
        "ingredients": ["pasta", "tomato sauce", "garlic", "olive oil", "basil"],
        "steps": "Boil pasta. Saute garlic in olive oil, add tomato sauce, simmer, mix with pasta, garnish with basil."
    },
    "omelette": {
        "ingredients": ["eggs", "salt", "pepper", "butter"],
        "steps": "Whisk eggs with salt and pepper. Cook in buttered pan until set. Fold and serve."
    },
    "salad": {
        "ingredients": ["lettuce", "tomato", "cucumber", "olive oil", "lemon"],
        "steps": "Chop vegetables, toss with olive oil and lemon juice, season to taste."
    },
}

def search_recipe(name):
    return recipes.get(name.lower())

def main():
    print("--- RECIPE FINDER ---")
    print("Available recipes:", ", ".join(recipes.keys()))
    while True:
        query = input("\nSearch a recipe (or 'exit' to quit): ").strip()
        if query.lower() == "exit":
            print("Goodbye!")
            break
        recipe = search_recipe(query)
        if recipe:
            print("Ingredients:", ", ".join(recipe["ingredients"]))
            print("Steps:", recipe["steps"])
        else:
            print("Recipe not found in local database.")

if __name__ == "__main__":
    main()
