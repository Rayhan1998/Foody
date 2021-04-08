import React, { useContext } from "react";
import "./recipesSection.styles.css";
import RecipeCard from "../recipeCard/recipeCard.component";
import { Context } from "../../Context";

function RecipesSection() {
  const { searchResults } = useContext(Context);

  return (
    <div className="recipes-section">
      {searchResults.map(recipe => {
        return (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image_url}
            recipe={recipe}
          />
        );
      })}
    </div>
  );
}

export default RecipesSection;
