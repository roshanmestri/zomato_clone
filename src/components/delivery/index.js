import React from 'react'
import Filters from '../common/filters'
import DeliveryCollections from './deliveryCollection'
import BrandCollections from './TopBrands'
import ExploreSection from '../common/exploreSection'
import { restaurantList } from '../../data/restaurants'


const Delivery = () => {
  const DeliveryFilters=[
    {
      id:1,
      icon : <i class="fi fi-rs-settings-sliders absolute-center"></i>,
      title: "Filters"
    },
    {
      id:2,
      title: "Rating 4.0+"
    },
    {
      id:3,
      title: "Safe and Hygenic"
    },
    {
      id:4,
      title: "Pure Veg"
    },
    {
      id:5,
      icon :  <i class="fi fi-rs-sort-amount-up-alt absolute-center"></i>,
      title: "Filters"
    },
    {
      id:6,
      title: "Great Offers"
    },
  ]

  const Restaurants = restaurantList;

  return (
    <div>
      <div className='max-width'>
      <Filters filterList={DeliveryFilters}/>
    </div>
    <DeliveryCollections/>
    <BrandCollections/>
    <ExploreSection list= {Restaurants} collectionName={"Delivery Restaurants in Turbhe"}/>
    </div>
    
  )
}

export default Delivery