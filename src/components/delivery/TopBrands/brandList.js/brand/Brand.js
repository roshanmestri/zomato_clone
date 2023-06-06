import React from 'react'
import "./brand.css"

const Brand = ({brand}) => {
  return (
    <div className='brand' >
        <div className='brand-cover'>
            <img src={brand?.icon} className='brand-img'/>
        </div>
        <div className='brand-name'>{brand?.name}</div>
    </div>
  )
}

export default Brand