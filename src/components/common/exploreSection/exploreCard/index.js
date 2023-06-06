import React from "react";
import "./exploreCard.css";
const ExploreCard = ({ restro }) => {
  const name = restro?.info?.name ?? "";
  const covering = restro?.info?.image?.url;
  const deliveryTime = restro?.order?.deliveryTime;
  const rating = restro?.info?.rating?.rating_text;
  const approxPrice = restro?.info?.cfo?.text;
  const offers = restro?.bulkOffers ?? [];
  const cuisines = restro?.info?.cuisine?.map((item) => item.name).slice(0, 3);

  const bottomContainer = restro?.bottomContainers;
  const goldOff = restro?.gold[0]?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

  return <div className="explore-card cur-po">
    <div className="explore-card-cover">
        <img src={covering} alt={name} className="explore-card-image"/>
        <div className="delivery-time">{deliveryTime}</div>
        {proOff && <div className="pro-off absolute-center"> {proOff}</div>}
        {goldOff && <div className="gold-off absolute-center"> {goldOff}</div>}
        {discount && <div className="discount absolute-center"> {discount}</div>}
    </div>
    <div className="res-row">
      <div  className="res-name">{name}</div>
      {rating &&  ( <div className="res-rating">
        {rating} <i className="fi fi-rr-star absolute-center"></i>
        </div>
        )}
    </div>
  </div>;
};

export default ExploreCard;
