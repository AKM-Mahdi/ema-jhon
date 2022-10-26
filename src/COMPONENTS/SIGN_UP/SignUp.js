import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../CONTEXT/UserContext";
import "./SignUp.css";

const SignUp = () => {
  // states
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { createUser } = useContext(AuthContext);
  // console.log(user);
  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const psw = form.password.value;
    const confirmPsw = form.confirmPassword.value;

    if (psw !== confirmPsw) {
      setError("password did not match");
      return;
    }
    if (psw.length < 6) {
      setError("password can not be less then 6 character");
      return;
    }
    createUser(email, psw)
      .then((res) => {
        console.log(res.user);
        form.reset();
        navigate("/shop");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">CREATE AN ACCOUNT</h2>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="enter your email" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="enter your password"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="enter your password"
            />
          </div>
          <p>
            <i className="error">{error}</i>
          </p>
          <input className="btn-submit" type="submit" value="SIGN UP" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
