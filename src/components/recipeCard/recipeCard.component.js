import React, { useContext } from "react";
import "./recipeCard.styles.css";
import { Context } from "../../Context";

export default function RecipeCard({ title, image, recipe }) {
  const { setSelectedRecipeId } = useContext(Context);

  function selectedRecipe(id) {
    setSelectedRecipeId(id);
  }

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-left">
          <div className="card-img-container">
            <img src={image} alt="recipe-image" className="card-img" />
          </div>
        </div>
        <div className="card-right">
          <h1 className="card-title">{title}</h1>

          <button
            className="card-btn"
            onClick={() => selectedRecipe(recipe.id)}
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
