import './App.css';
import ProductsPage from './Components/ProductsPage'
import ItemPage from './Components/ItemPage'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="App container mt-5">
      <Router>
        <div className="row text-center">
          <div className="col">
            <h1> Fishing Hooks </h1>
            <Switch>
              <Route exact={true} path="/">
                <ProductsPage />
              </Route>
              <Route path="/ItemPage">
                <ItemPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

