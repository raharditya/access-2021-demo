import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { Redirect } from "react-router-dom";

function Home(props) {
  const user = useContext(UserContext);

  return user ? (
    <Redirect to="/dashboard"></Redirect>
  ) : (
    <Redirect to="/login"></Redirect>
  );
}

export default Home;
