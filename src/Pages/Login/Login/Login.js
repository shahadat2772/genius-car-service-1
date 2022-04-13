import React, { useEffect, useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";
import "./Login.css";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
    // if (user) {
    //   navigate(`/home`);
    // }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  return (
    <div className="container">
      <div className="formContainer">
        <h3 className="text-center text-secondary pb-2">Login</h3>
        <form onSubmit={handleSubmit} action="">
          <div className="input-fields">
            <label htmlFor="email">Enter email</label>
            <input ref={emailRef} type="email" name="email" id="email" />
          </div>
          <div className="input-fields">
            <label htmlFor="password">Password</label>
            <input
              ref={passwordRef}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <input className="submitBtn" type="submit" value="Login" />
          <p className="text-center mt-1">
            <small>
              {" "}
              New to Genius?{" "}
              <Link className="text-decoration-none " to={`/register`}>
                Register
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
