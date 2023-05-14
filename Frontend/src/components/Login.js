import React, { useState, useRef } from "react";
import logvideo from "../Storage/login.mp4";
import { useDispatch } from "react-redux";
import { userLogin, userRegister } from "../JS/userSlice/userSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = ({ setNavBtn }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const handleSignInClick = () => {
    setIsSignUp(false);
    containerRef.current.classList.remove("right-panel-active");
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
    containerRef.current.classList.add("right-panel-active");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const isAuth = localStorage.getItem("token");
  const handleRefresh = () => {
    window.location.reload();
  };
  const test = () => {
    isAuth !== undefined && navigate("/");
  };
  const dispatch = useDispatch();

  return (
    <div className="login-body">
      <Link to="/">
        <div className="back-i">
          <i class="fa-solid fa-circle-chevron-left"></i>
        </div>
      </Link>
      <video className="app-video" src={logvideo} autoPlay muted loop />
      <div className="container" id="container" ref={containerRef}>
        <div
          className={`form-container ${
            isSignUp ? "sign-up-container" : "sign-in-container"
          }`}
        >
          <form onSubmit={handleFormSubmit}>
            {isSignUp ? (
              <div>
                <h1>Créer un compte</h1>
                <input
                  type="text"
                  placeholder="Nom"
                  onChange={(e) =>
                    setRegister({ ...register, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="e-mail"
                  onChange={(e) =>
                    setRegister({ ...register, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  onChange={(e) =>
                    setRegister({ ...register, password: e.target.value })
                  }
                />

                <button
                  onClick={() => {
                    dispatch(userRegister(register));
                    test();
                    handleRefresh();
                  }}
                >
                  S'inscrire
                </button>
              </div>
            ) : (
              <div>
                <h1>Connexion</h1>
                <input
                  type="email"
                  placeholder="E-mail"
                  onChange={(e) =>
                    setlogin({ ...login, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  onChange={(e) =>
                    setlogin({ ...login, password: e.target.value })
                  }
                />
                {/* <button onClick={() => dispatch(userLogin(login), test())}>
                  S'identifier
                </button> */}
                <button
                  onClick={() => {
                    dispatch(userLogin(login));
                    navigate("/");
                  }}
                >
                  login
                </button>
              </div>
            )}
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Content de te revoir!</h1>
              <p>
                Pour rester en contact avec nous, veuillez vous connecter avec
                vos informations personnelles
              </p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>
                S'identifier
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Salut l'ami!</h1>
              <p>
                Entrez vos données personnelles et commencez votre voyage avec
                nous
              </p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
