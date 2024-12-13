import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data";
import './main.css';


function DetailsPage() {
  const { name } = useParams();
  const item = data.find((item) => item.name === name);

  return (
    <div className="details-page">
      <h1>{item.name}</h1>
      <img src={item.images.hero.small} alt={item.name} />
      <p>{item.description}</p>
    </div>
  );
}

export default DetailsPage;
