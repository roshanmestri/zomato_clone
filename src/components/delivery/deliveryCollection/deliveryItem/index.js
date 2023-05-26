import React from 'react'
import "./deliveryItem.css"
const DeliveryItem = ({item}) => {
  return (
    <div>
        <div className='delivery-item-cover'>
            <img src={item?.Image} className='delivery-item-img' alt={item.name}/>
        </div>
        <div className='delivery-item-title'>{item.name}</div>
    </div>
  )
}

export default DeliveryItem