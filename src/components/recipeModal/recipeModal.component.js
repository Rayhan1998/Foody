import React, { useContext, useState, useEffect } from "react";

import axios from "axios";
import "./recipeModal.styles.css";

import { Context } from "../../Context";

function RecipeModal() {
  const { selectedRecipeId, setSelectedRecipeId } = useContext(Context);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  useEffect(() => {
    if (selectedRecipeId != null) {
      axios
        .get(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${selectedRecipeId}?key=a7f381e4-84eb-4f85-8423-f8f9eda04da0`
        )
        .then(function(response) {
          // handle success
          console.log(response);
          setRecipeDetails(response.data.data.recipe);
          setRecipeIngredients(response.data.data.recipe.ingredients);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  }, [selectedRecipeId]);

  return (
    <div>
      {selectedRecipeId == null ? null : (
        <div className="modal-body">
          <a
            href="#"
            className="close"
            onClick={() => setSelectedRecipeId(null)}
          />
          <h1 className="modal-title">{recipeDetails.title}</h1>
          <div className="top-section">
            <h2>{recipeDetails.cooking_time} minutes</h2>
            <h2>{recipeDetails.servings} Servings</h2>
          </div>

          <div className="middle-section">
            <h1 className="modal-title">RECIPE INGREDIANTS</h1>
            <div className="ingrediants">
              {recipeIngredients.map(function(rec, i) {
                return (
                  <div style={{ width: "50%" }} key={i}>
                    {rec.description}
                  </div>
                );
              })}
            </div>
          </div>

          <button>Add to list</button>
        </div>
      )}
    </div>
  );
}

export default RecipeModal;
