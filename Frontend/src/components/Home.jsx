import React, { useEffect, useState } from "react";
import "../home.css";
import NavBar from "./NavBar";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import { userCurrent } from "../JS/userSlice/userSlice";
import { getmaison } from "../JS/maisonSlice/maisonSlice";

const Home = () => {
  useEffect(() => {
    dispatch(userCurrent());
  }, []);
  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();
  const [zIndex, setZIndex] = useState(10);
  const [showing, setShowing] = useState(false);

  function handleCardClick(e) {
    e.preventDefault();

    let isShowing = false;

    if (e.currentTarget.classList.contains("show")) {
      isShowing = true;
    }

    if (showing) {
      // a card is already in view
      const showCard = document.querySelector(".card.show");
      showCard.classList.remove("show");

      if (isShowing) {
        // this card was showing - reset the grid
        document.querySelector(".cards").classList.remove("showing");
        setShowing(false);
      } else {
        // this card isn't showing - get in with it
        e.currentTarget.style.zIndex = zIndex;
        e.currentTarget.classList.add("show");
      }

      setZIndex((prevZIndex) => prevZIndex + 1);
    } else {
      // no cards in view
      const cards = document.querySelector(".cards");
      cards.classList.add("showing");
      e.currentTarget.style.zIndex = zIndex;
      e.currentTarget.classList.add("show");

      setZIndex((prevZIndex) => prevZIndex + 1);
      setShowing(true);
    }
  }
  
  useEffect(() => {
 dispatch(getmaison())
  }, [])
  
  const maisons=useSelector((state)=>state.maison?.maison)
  console.log(maisons)

  return (
    <div className="container-home">
      <img src="https://wallpapercave.com/wp/jnETzbZ.jpg" alt="" className="image-home-cont"/>
      <NavBar />
      
     
      <div className="cards ">
      {maisons?.map((el)=>(
      <div className="card list-cards" onClick={handleCardClick}>
        
        <div className="card__image-holder ">
          <img
            className="card__image"
            src={el?.image}
            alt="maison"
          />
        </div>
        <div className="card-title">
          <p className="toggle-info btn">
            <span className="left"></span>
            <span className="right"></span>
          </p>
          <h2>
           {el?.name}
           
          </h2>
        </div>
        <div className="card-flap flap1">
          <div className="card-description">
            S+ 
          {el?.description}
          </div>
          <div className="card-flap flap2">
            <div className="card-actions">
              <p className="btn">{el?.price}</p>
            </div>
          </div>
        </div>
      </div>
     ))}
    </div>
    </div>
  );
};

export default Home;
