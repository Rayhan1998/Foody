import Header from "../src/components/header/header.component";
import Homepage from "../src/pages/homepage/homepage.pages";

import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
