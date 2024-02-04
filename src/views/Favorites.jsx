import React, { useContext } from "react";
import { CounterContext } from "../components/Api";


const Favorites = () => {
  
  const {api} = useContext(CounterContext);

  const FotosFav = api.filter((img) => img.liked === true);

 
  

  return (
    <>
      <h1 className="favorites__h1" >Fotos Favoritas</h1>
      <div className="gallery">
      <div className="gallery__cards">
        {FotosFav.map((ele) => (
          <div className="cards__card" key={ele.id}>
            <img className="photo" src={ele.src.original}></img>
          </div>
        ))}
      </div>
    </div>
    </>
    



  )
};

export default Favorites;