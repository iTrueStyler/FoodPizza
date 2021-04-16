import React from 'react';
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters.js';
import { fetchPizzas } from '../redux/actions/pizzas.js';
import { addPizzaToCart } from '../redux/actions/cart.js';



function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category ,sortBy } = useSelector(({filters}) => filters);
  

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy,category))
  }, [category,sortBy]);


  const onSelectSortType = React.useCallback((type)=>{
    dispatch(setSortBy(type));
  },[])

  const handleAddPizzaToCart = (obj) =>{
    dispatch(addPizzaToCart(obj))
  };


  return (
    <div className="container">
      <div className="content__top">
        <Categories
        activeCategory ={category}
        onClickCategory={(index) => dispatch(setCategory(index))}
          items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
        activeSortType={sortBy.type}
          items={[
            { name: 'популярности', type: 'popular',order:'desc' },
            { name: 'цене', type: 'price',order:'desc' },
            { name: 'алфавит', type: 'name',order:'asc' },
          ]}
          onClickSortType={onSelectSortType}
        />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded 
            ? items.map((obj) => (
              <PizzaBlock onClickAddPizza={handleAddPizzaToCart} 
              addedCount={cartItems[obj.id]&&cartItems[obj.id].length}
              key={obj.id} {...obj} />
            ))
            : Array(10).fill(0).map((_,index)=><PizzaLoadingBlock key={index}/>)}
      </div>
    </div>
  );
}

export default Home;
