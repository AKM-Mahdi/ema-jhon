import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../COMPONENTS/CONTEXT/UserContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    console.log("yes loading found");
    return <h1>Loading</h1>;
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;

  // must return navigate
};

export default PrivateRoutes;
