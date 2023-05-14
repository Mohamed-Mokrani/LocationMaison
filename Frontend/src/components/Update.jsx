import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getbyidmaison, updatemaison } from "../JS/maisonSlice/maisonSlice";

const Update = () => {
  const dispatch = useDispatch();

  
  const params = useParams();
  console.log(params);
  useEffect(() => {
    dispatch(getbyidmaison(params.id));
  }, []);
  const maisonid = useSelector((state) => state.maison?.maison);
  console.log(maisonid);

  const [maison, setMaison] = useState({
    image: maisonid?.image,
    name: maisonid?.name,
    description: maisonid?.description,
    price: maisonid?.price,
  });

  const [confirmation, setConfirmation] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="ajout-maison update-body">
      <Link to="/Mesannonces">
        <div className="back-i">
          <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
      </Link>
      <h1>ajout</h1>
      <div className="inputs-ajout">
        <input
          placeholder={maisonid?.name}
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
      </div >
      <button
        className="btn-add-card"
        onClick={() => {
          dispatch(updatemaison({ id: maisonid?._id, maison: maison }));

          setTimeout(() => {
            navigate("/Mesannonces");
          }, 500);
        }}
      >
        Modifier
      </button>
    </div>
  );
};

export default Update;
