/* eslint-disable no-restricted-globals */
import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useRef, useState, useContext } from "react";
import "./auth.scss";
import { obj } from "./authObjs";
import { emptyFunction, changingInputs } from "./authObjs";
import { initializeAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Enter } from "./components/Enter";
import { Regist } from "./components/Regist";
import { AuthContext } from "../../data/context/Context";
import "../../pages/home/main.scss";
export function Auth() {
  const [option, setOption] = useState(obj.enter),
    [entEmail, setEntEmail] = useState(""),
    [entPass, setEntPass] = useState(""),
    [registEmail, setRegistEmail] = useState(""),
    [registPass, setRegistPass] = useState(""),
    [repeatPass, setRepeatPass] = useState(""),
    [error, setError] = useState(""),
    [rememberBtn, setRememberBtn] = useState(true),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [registData, setRegistData] = useState("");
  const [translate, setTranslate] = useState(-53.5 + "%");
  const [resultObj, setResultObj] = useState({});

  const contextData = useContext(AuthContext)[0],
    setContextData = useContext(AuthContext)[1];
  console.log(contextData);

  function dataBaseLoad(params) {
    const form = document.querySelector("form");
    if (option.option === "enter") {
      console.log("enter");
    } else {
      const obj = {
        surname: form.elements["regist-surname"].value,
        name: form.elements["regist-name"].value,
        email: form.elements["regist-email"].value.toLowerCase(),
        password: form.elements["regist-password"].value,
        date: form.elements["regist-birthday"].value,
      };
      console.log(obj);
      setContextData(...obj);
      console.log(contextData);
    }
  }

  function submitFunc(event) {
    console.log("event prevented");
    event.preventDefault();
    const form = document.querySelector("form");

    console.log(resultObj);

    if (option.option === "enter") {
      console.log("enter");

      const value1 = option.fields[0].value;
      const value2 = option.fields[1].value;
      signInWithEmailAndPassword(auth, value1, value2)
        .then((user) => {
          console.log(user);
          setError("");
          form.reset();
          console.log("successful enter");
          console.log(value1, value2);
          dataBaseLoad({ value1, value2 });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (option.option === "regist") {
      console.log("regist");

      if (
        form.elements["regist-repeat-password"].value !==
        form.elements["regist-password"].value
      ) {
        setError("Пароли не совпадают");
        console.log("Пароли не совпадают");
      } else {
        console.log(form.elements["regist-email"].value.toLowerCase());
        setEmail(form.elements["regist-email"].value.toLowerCase());
        setPassword(form.elements["regist-password"].value);

        console.log(email);
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            console.log(userCredential.user.providerData[0]);
            setError("");
            dataBaseLoad().catch((error) => console.log(error));
            //form.reset();
            console.log("successful registration");
          })
          .catch((error) => console.log(error));
      }
    }
  }

  useEffect(() => {
    setError("");
  }, [option]);

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
    </div>
  );
}
