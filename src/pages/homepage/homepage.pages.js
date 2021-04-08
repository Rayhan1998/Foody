import React, { useContext } from "react";
import "./homepage.styles.css";
import RecipesSection from "../../components/recipesSection/recipesSection.component";
import RecipeModal from "../../components/recipeModal/recipeModal.component";
import { Context } from "../../Context";

export default function Homepage() {
  const { searchResults } = useContext(Context);

  return (
    <div className="homepage">
      <h2 className="homepage-title">
        {searchResults.length > 0 ? null : "Popular Recipes"}
      </h2>
      <RecipesSection />
      <RecipeModal />
    </div>
  );
}
