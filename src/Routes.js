import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

export default function MainRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
