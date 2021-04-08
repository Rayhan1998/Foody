import React, { useState } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  return (
    <Context.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        setSelectedRecipeId,
        selectedRecipeId
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
