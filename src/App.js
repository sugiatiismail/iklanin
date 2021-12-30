
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Home from "./component/Home";
import ProductShow from "./component/ProductShow";


function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product">
            <ProductShow />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}



export default App;
