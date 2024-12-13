import React from "react";
import { Link } from "react-router-dom";
import data from "../data/data";

function HomePage() {
  return (
   
    <div className="home-page">
       <h1>Galleria</h1>
       <div className="gallery">
       {data.map((item) => (
           <Link
             to={`/details/${item.name}`}
             key={item.name}
             className="gallery-item"
           >
             <img src={item.images.hero.large} alt={item.name} />
             <h2>{item.name}</h2>
           </Link>
         ))}
      </div>
    </div>
  );
}

export default HomePage;
