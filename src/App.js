import React from 'react';
import Header from './components/Header.jsx';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import axios from 'axios';
import {fetchPizzas} from './redux/actions/pizzas.js';
import {useSelector, useDispatch} from 'react-redux';



function App() {
  // const [pizzas, setPizzas] = React.useState([]);
  const dispatch = useDispatch();
  


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}
export default App;
