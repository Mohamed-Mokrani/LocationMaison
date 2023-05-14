import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../JS/userSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const [navBtn, setNavBtn] = useState(true);
  const user = useSelector((state) => state.user?.user);

  const [navBarBackgroundColor, setNavBarBackgroundColor] = useState("");
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setNavBarBackgroundColor(scrollPosition > 0 ? "black" : "");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <div
      className="nav-fixed"
      style={{ backgroundColor: navBarBackgroundColor }}
    >
      <div>
        <h2>
          <p>Location ++</p>
        </h2>
      </div>

      <div className="right">
        {isAuth && isAuth !== "undefined" && (
          <div className="options-nav">
            <Link to="/AddCard" className="link-btn">
              <p>Créer une annonce</p>
            </Link>
            <Link to="/MesAnnonces" className="link-btn">
              <p>Mes annonces</p>
            </Link>
          </div>
        )}

        {isAuth && isAuth !== "undefined" ? (
          <Link to="/Login" className="link-btn">
            <p
              className="nav-btn"
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
            >
              Se déconnecter
            </p>
          </Link>
        ) : (
          <Link to="/Login" className="link-btn">
            <p className="nav-btn">Se connecter</p>
          </Link>
        )}

       
      </div>
    </div>
  );
};

export default NavBar;
