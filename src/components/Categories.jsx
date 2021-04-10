import React,{ useState } from 'react';
import PropTypes from 'prop-types';

function Categories({items=[],onClickCategory ,activeCategory}) {

    

    const onSelectItem =(index)=>{
      
      onClickCategory(index);
    };

  
  return (
    <div>
      <div className="categories">
        <ul>
          <li 
          className={activeCategory===null?'active':''}
          onClick = {()=>onSelectItem(null)} >Все</li>
          {items.map((name,index) => (
            <li 
            className={activeCategory===index?'active':''}
            onClick = {()=>onSelectItem(index)}
            key={`${name}_${index}`}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


Categories.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  items:PropTypes.arrayOf(PropTypes.object),
  onClickCategory:PropTypes.func

};

Categories.defaultProps={
  items:[] ,activeCategory:null
};
export default Categories;
