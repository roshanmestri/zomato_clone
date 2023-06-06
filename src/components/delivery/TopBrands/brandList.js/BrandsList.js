import React from 'react'
import Slider from 'react-slick/lib/slider';
import "./BrandsList.css"
import Brand from './brand/Brand';
import PrevArrow from '../../../common/carousel/preArrow';
import NextArrow from '../../../common/carousel/nextArrow';
const BrandsList = () => {
    const TopBrands=[
        {
            id :1,
            name: "MacDonald's",
            icon:"https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png?output-format=webp"
        },
        {
            id :2,
            name: "Domino's Pizza",
            icon:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252779.png?output-format=webp"
        },
        {
            id :3,
            name: "SubWay",
            icon:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520651.png?output-format=webp"
        },
        {
            id :4,
            name: "Burger King",
            icon:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188211.png?output-format=webp"
        },
        {
            id :5,
            name: "KFC",
            icon:"https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617874818.png?output-format=webp"
        },
        {
            id :6,
            name: "Pizza Hut",
            icon:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp"
        },
        {
            id :7,
            name: "Box8 Desi Meals",
            icon:"https://b.zmtcdn.com/data/brand_creatives/logos/dc25345966698c3077d648ecf3c5b3d1_1643349213.png?output-format=webp"
        },
        {
            id :8,
            name: "Naturals Ice Creams",
            icon:"https://b.zmtcdn.com/data/brand_creatives/logos/11f0a050068db77b5b959dd97cc11965_1644900886.png?output-format=webp"
        },
        {
            id :9,
            name: "Merwan's",
            icon:"https://b.zmtcdn.com/data/brand_creatives/logos/ea590b040a4902b757fd6126439bd5c3_1605071443.png?output-format=webp"
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
    <div className='brand-names'>
        <div className='max-width' style={{paddingTop:'2rem' ,paddingBottom:'2rem'}}>
            <div className='collection-title'>Top Brands for you</div>
            <Slider {...settings}>
                {
                    TopBrands.map((brand)=>(
                        <Brand brand={brand}/>
                    ))
                }
            </Slider>
        </div>
    </div>
  )
}

export default BrandsList