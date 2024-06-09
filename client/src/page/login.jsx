import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Grant } from "../assets";
import { LoginComponent } from "../components";
import { setLoading } from "../redux/loading";
import "./style.scss";
import Toggle from "../components/Toggle/Toggle";

const Login = () => {
  const location = useLocation();

  const [auth, setAuth] = useState(false);

  const { user } = useSelector((state) => state);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      if (location?.pathname === "/login/auth") {
        setAuth(true);
        setTimeout(() => {
          dispatch(setLoading(false));
        }, 1000);
      } else {
        setAuth(false);
        setTimeout(() => {
          dispatch(setLoading(false));
        }, 1000);
      }
    }
  }, [location]);

  return (
    <>
    <Toggle/>
    <div className="Auth">
      <div className="inner">
        {auth ? (
          <LoginComponent />
        ) : (
          <div className="suggection">
            <div>
              <Grant />
            </div>

            <div>
              <p>Welcome to GE CoPilot™</p>
              <p>Log in or Sign up with your account to continue</p>
            </div>

            <div className="btns">
              <button class="fancy" onClick={() => {
                navigate("/login/auth");
              }}>
                <span class="top-key"></span>
                <span class="text">Log in</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </button>
              <button class="fancy" onClick={() => {
                navigate("/signup");
              }}>
                <span class="top-key"></span>
                <span class="text">Sign up</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </button>
            </div>
          </div>
        )}

        <div className="bottum">

        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
