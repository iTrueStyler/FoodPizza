import React from 'react';
import Header from './components/Header.jsx';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import axios from 'axios';
import {setPizzas} from './redux/actions/pizzas.js';
import {useSelector, useDispatch} from 'react-redux';



function App() {
  // const [pizzas, setPizzas] = React.useState([]);
  const dispatch = useDispatch();
  


  React.useEffect(() => {
    axios.get('http://localhost:3000/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);



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
