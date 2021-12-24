import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rastuarant from './component/Rastuarant/Rastuarant';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MealDetails from './component/MealDeatails/MealDetails';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Rastuarant></Rastuarant>
          </Route>
          <Route exact path="/meal/:mealId">
            <MealDetails></MealDetails>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
