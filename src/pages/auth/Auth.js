/* eslint-disable no-restricted-globals */
import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useRef, useState, useContext } from "react";
import "./auth.scss";
import { obj } from "./authObjs";

import { Enter } from "./components/Enter";
import { Regist } from "./components/Regist";

import "../../pages/home/main.scss";
import { Pather, pather } from "../../firebase/Pather";

export function Auth() {
  const [option, setOption] = useState(obj.enter);
  const [error, setError] = useState(""),
    [translate, setTranslate] = useState(-53.5 + "%");
  const [path, setPath] = useState();
  function submitFunc(e) {
    e.preventDefault();
    setError("");
    let data = new FormData(e.target);
    let obj = Object.fromEntries(data);
    console.log(obj);

    if (option.option === "enter") {
      let user = {
        email: obj["enter-email"],
        password: obj["enter-password"],
      };
      console.log(user);
      //to find user
      setPath([user, "findUser"]);
    } else {
      let user = {
        email: obj["regist-email"],
        password: obj["regist-password"],
        name: obj["regist-name"],
        surname: obj["regist-surname"],
        birthdate: obj["regist-birthday"],
        role: "user",
      };
      console.log(user);

      //to create user
      setPath([user, "createUser"]);
    }
  }

  function handleClck(act) {
    switch (act) {
      case "reg":
        setOption(obj.regist);
        setTranslate(53.5 + "%");
        break;

      case "ent":
        setOption(obj.enter);
        setTranslate(-53.5 + "%");
        break;
      default:
        break;
    }
  }

  return (
    <div className="auth-main-container">
      <div className="auth-main">
        <h2>{option.h2}</h2>
        <div className="enter-or-regist">
          <span id="auth-span" style={{ translate: translate }}></span>
          <button id="enter-btn-option" onClick={() => handleClck("ent")}>
            Вход
          </button>
          <button id="regist-btn-option" onClick={() => handleClck("reg")}>
            Регистрация
          </button>
        </div>
        <form id={option.id} onSubmit={submitFunc}>
          {option === obj.enter ? <Enter /> : <Regist />}
          <div id="error">{error}</div>
          <div className="submitContainer">
            <button className="submitBtn" type="submit">
              {option.submit}
            </button>
          </div>
        </form>
      </div>
      <Pather params={path} />
    </div>
  );
}
