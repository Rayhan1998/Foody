import Header from "../src/components/header/header.component";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
