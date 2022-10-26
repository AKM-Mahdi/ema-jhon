import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../COMPONENTS/CONTEXT/UserContext";
import "./Login.css";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/shop";
  console.log(from);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const psw = form.password.value;

    // sign in
    signIn(email, psw)
      .then((res) => {
        console.log(res.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error("error", err);
      });
    form.reset();
  };
  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">LOGIN</h2>
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
          <input className="btn-submit" type="submit" value="LOGIN NOW" />
        </form>
        <div className="thirdPartyLogin">
          <p>OR Login with Google</p>
          <button className="btn-submit">Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
