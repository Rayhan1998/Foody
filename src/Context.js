import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
  const [recipesSaved, setRecipesSaved] = useState(false);

  function localStorageRecipeList(recipes) {
    localStorage.setItem("recipes", JSON.stringify(recipeList));
  }

  function updateRecipesFromStorage() {
    setRecipeList(JSON.parse(localStorage.getItem("recipes")));
  }

  useEffect(() => {
    if (localStorage.getItem("recipes") === null) {
      localStorageRecipeList(recipeList);
    } else {
      updateRecipesFromStorage();
      setRecipesSaved(true);
    }
  }, []);

  return (
    <Context.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        setSelectedRecipeId,
        selectedRecipeId,
        recipeList,
        setRecipeList,
        localStorageRecipeList,
        recipesSaved
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
