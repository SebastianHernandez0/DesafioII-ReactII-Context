import { useContext,useState } from "react";
import { CounterContext } from "./Api";
import IconHeart from "./IconHeart";

const Gallery = () => {

  const { api,setApi } = useContext(CounterContext)
  
  
  
  const handleImageClick = (img) => {
    
    const newArray = [...api];
    img.liked=!img.liked
  
    setApi(newArray);
  };

  return (
    <div className="gallery">
      <div className="gallery__cards">
        {api.map((ele) => (
          <div className="cards__card" key={ele.id}>
            <img
            onClick={()=>handleImageClick(ele)}
            className="photo" src={ele.src.original}></img>
            <h5 className="photo__desc">{ele.alt}</h5>
            <IconHeart filled={ele.liked}></IconHeart>
        
          </div>
        ))}
      </div>
    </div>



  )
};
export default Gallery;
