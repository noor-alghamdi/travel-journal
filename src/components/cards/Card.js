import React from "react";
import "../cards/card.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Card(props) {
  // <img src={`../images/${props.img}`} className="card--image" />
  //   <div className="card--stats">
  //     <img src="../images/star.png" className="card--star" />
  //     <span>{props.rating}</span>
  //     <span className="gray">({props.reviewCount}) • </span>
  //     <span className="gray">{props.location}</span>
  //   </div>
  //   <p>{props.title}</p>
  //   <p><span className="bold">From ${props.price}</span> / person</p>

  // title = { card.title }
  // location = { card.location }
  // googleMapsUrl = { card.googleMapsUrl }
  // startDate = { card.startDate }
  // endDate = { card.endDate }
  // description = { card.description }
  // imageUrl = { card.imageUrl }
  return (
    <div className="card--container">
      <div className="location-info">
        <p className="location--text">
          <LocationOnIcon />
          {props.location}
        </p>
        <a className="location--url" href={props.googleMapsUrl}>
          find location on google
        </a>
      </div>
      <h1 className="location--title">{props.title}</h1>
      <div className="dates--info">
        <p className="start--date">{props.startDate}</p>
        <p className="end--date">{props.endDate}</p>
      </div>
      <p className="description">{props.description}</p>

      <div className="media">
        <img src={props.imageUrl} className="image" />
      </div>
    </div>
  );
}

export default Card;
