import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [agree, setAgree] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    // const agree = event.target.terms.checked;

    if (!agree) {
      alert("Terms and conditions are not checked");
      return;
    }

    if (password !== confirmPassword) {
      console.error("Password did not matched!");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="container">
      <div className="formContainer">
        <h3 className="text-center text-secondary pb-2">Register</h3>
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
          <div className="input-fields">
            <label htmlFor="password">Confirm Password</label>
            <input
              ref={confirmPasswordRef}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
          </div>
          <div
            className={`d-flex align-items-center mt-1 ${
              agree || "text-danger"
            }`}
          >
            <input
              ref={confirmPasswordRef}
              type="checkbox"
              name="terms"
              id="checkbox"
              className={`mt-1 me-1`}
              onClick={() => setAgree(!agree)}
            />
            <label htmlFor="checkbox">Accept terms and conditions</label>
          </div>

          <input
            disabled={!agree}
            className="submitBtn"
            type="submit"
            value="Register"
          />
          <p className="text-center mt-1">
            <small>
              {" "}
              Have an account?{" "}
              <Link className="text-decoration-none " to={`/login`}>
                Login
              </Link>
            </small>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
