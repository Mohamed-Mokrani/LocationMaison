import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletemaison, getmaison } from "../JS/maisonSlice/maisonSlice";
import { Link, useNavigate } from "react-router-dom";
import logvideo from "../Storage/login.mp4";

function MesAnnonces() {
  const [zIndex, setZIndex] = useState(10);
  const [showing, setShowing] = useState(false);
  const [update, setUpdate] = useState(true)
  const navigate=useNavigate()

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getmaison());
  }, []);

  const maisons = useSelector((state) => state.maison?.maison);
  console.log(maisons);

  const [maison, setMaison] = useState({
    image: "",
    name: "",
    description: "",
    price: "",
  });

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="login-body cards dim-update">
      <video className="app-video" src={logvideo} autoPlay muted loop />
      <Link to="/">
        <div className="back-i">
          <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
      </Link>

      {(maisons?.map((el) => (
        <div className="card card-u" onClick={handleCardClick}>
          
          <div className="card__image-holder annonce-card">
            <img className="card__image card-update-image" src={el?.image} alt="maison" />
          </div>
          <div className="card-title">
            <p className="toggle-info btn">
              <span className="left"></span>
              <span className="right"></span>
            </p>
            <h2>{el?.name}</h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">{el?.description}</div>
            <div className="card-flap flap2">
              <div className="card-actions">
                <p className="btn" onClick={()=>navigate(`/Update/${el?._id}`)}>Modifier</p>
                <p className="btn" onClick={()=>{dispatch(deletemaison(el?._id));handleRefresh()}}>Effacer</p>
              </div>
            </div>
          </div>
        </div>
      )))}
      

      
    </div>
  );
}

export default MesAnnonces;
