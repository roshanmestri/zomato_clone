import React from 'react'
import './filter_item.css'

const FilterItem = ({filterItem}) => {
  console.log(filterItem.icon);
  return (
    <div className='filter-item'>
        {filterItem?.icon && filterItem?.icon}
        <div className='filter-name'>{filterItem.title}</div>
    </div>
  )
}

export default FilterItem