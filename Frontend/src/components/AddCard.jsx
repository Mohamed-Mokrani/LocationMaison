import React, { useState } from "react";
import logvideo from "../Storage/login.mp4";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { maisonAdd } from "../JS/maisonSlice/maisonSlice";

const AddCard = () => {
  const [confirmation, setConfirmation] = useState(true);

  const [maison, setMaison] = useState({
    image: "",
    name: "",
    description: "",
    price: "",
  });
  const dispatch = useDispatch();

  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className="login-body">
      <Link to="/">
        <div className="back-i">
          <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
      </Link>
      <video className="app-video" src={logvideo} autoPlay muted loop />

      {confirmation ? (
        <div className="ajout-maison">
          <h1>ajout</h1>
          <div className="inputs-ajout">
            <input
              placeholder="Nom "
              onChange={(e) => setMaison({ ...maison, name: e.target.value })}
            />
            <input
              placeholder="lien image "
              onChange={(e) => setMaison({ ...maison, image: e.target.value })}
            />
            <input
              placeholder="prix "
              onChange={(e) => setMaison({ ...maison, price: e.target.value })}
            />
            <input
              placeholder="Nombre de chambre "
              onChange={(e) =>
                setMaison({ ...maison, description: e.target.value })
              }
            />
          </div>
          <button
            className="btn-add-card"
            onClick={() => {
              dispatch(maisonAdd(maison));
              
              setConfirmation(false);
              setTimeout(() => {
                handleRefresh();
              }, 1000);
            }}
          >
            Ajouter
          </button>
        </div>
      ) : (
        <div className="notif-ajout">
          <p>Annonce bien ajoutée</p>
      
        </div>
      )}
    </div>
  );
};

export default AddCard;
