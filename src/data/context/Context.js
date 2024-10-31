/* eslint-disable no-undef */
import React, { useState, createContext, useContext } from "react";

export const AuthContext = createContext();

export function Context(props) {
  const [mainData, setMainData] = useState({
    lastname: "",
    firstname: "",
    fathername: "",
    email: "",
    password: "",
    phone: "",
    security: "guest",
  });

  return (
    <AuthContext.Provider value={[mainData, setMainData]}>
      {props.children}
    </AuthContext.Provider>
  );
}
