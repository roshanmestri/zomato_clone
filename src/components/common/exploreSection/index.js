import React from 'react'
import "./exploreSection.css"
import ExploreCard from './exploreCard'

const ExploreSection = ({list ,collectionName}) => {
  return (
    <div className='max-width explore-section' >
        <div className='collection-title'> {collectionName}</div>
            <div className='explore-grid'>
                {list.map((restro)=>{
                    return <ExploreCard restro={restro}     />
                }
                )}
        </div>
    </div>
  )
}

export default ExploreSection