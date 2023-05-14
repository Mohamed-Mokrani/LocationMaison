


import { useDispatch } from 'react-redux';
import './App.css';

import Main from './components/Main';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { userCurrent } from './JS/userSlice/userSlice';


function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {

      dispatch(userCurrent());
    
  }, []);
  return (
    <div className="App">
       {/* {isAuth ? (
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : null} */}
    <Main/>
    </div>
  );
}


export default App;
