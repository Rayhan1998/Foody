import React, { useState } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Context.Provider
      value={{
        searchQuery,
        setSearchQuery
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
