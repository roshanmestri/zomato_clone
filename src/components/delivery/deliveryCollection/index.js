import React from 'react'
import  './deliveryCollection.css'
import PrevArrow from '../../common/carousel/preArrow';
import Slider from 'react-slick';
import DeliveryItem from './deliveryItem';
import NextArrow from '../../common/carousel/nextArrow';

const DeliveryCollections = () => {
    const TypesOfFood=[
        {   id:1,
            name:"Pizza",
            Image: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png'
        },
        {   id:2,
            name:"Burger",
            Image: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png'
        },
        {   id:3,
            name:"Biryani",
            Image: 'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png'
        },
        {   id:4,
            name:"Sandwich",
            Image: 'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png'
        },
        {   id:5,
            name:"Chicken",
            Image: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png'
        },
        {   id:6,
            name:"Rolls",
            Image: 'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png'
        },
        {   id:7,
            name:"Thali",
            Image: 'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png'
        },
        {   id:8,
            name:"Fried Rice",
            Image: 'https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png'
        },
        {   id:9,
            name:"Noodles",
            Image: 'https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png'
        },
        {   id:10,
            name:"Dosa",
            Image: 'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png'
        },
        {   id:11,
            name:"Momos",
            Image: 'https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png'
        },
    ]

    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>
    };
  return (
    <div className='delivery-collections '>
        <div className='max-width' style={{paddingTop:'2rem' ,paddingBottom:'2rem'}}>
            <div className='collection-title'>Eat what makes you happy</div>
            <Slider {...settings}>
                {
                    TypesOfFood?.map((item)=>(
                        <DeliveryItem item={item}/>
                    ))
                }
            </Slider>
        </div>
    </div>
  )
}

export default DeliveryCollections