import React from 'react';
import PropTypes from 'prop-types';

function Categories({items=[],onClickCategory ,activeCategory}) {

  
  return (
    <div>
      <div className="categories">
        <ul>
          <li 
          className={activeCategory===null?'active':''}
          onClick = {()=>onClickCategory(null)} >Все</li>
          {items.map((name,index) => (
            <li 
            className={activeCategory===index?'active':''}
            onClick = {()=>onClickCategory(index)}
            key={`${name}_${index}`}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number,null]),
  items:PropTypes.arrayOf(PropTypes.string),
  onClickCategory:PropTypes.func

};

Categories.defaultProps={
  items:[] ,activeCategory:null
};
export default Categories;
