/* eslint-disable no-restricted-globals */
import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useRef, useState } from "react";
import "./auth.scss";
import { obj } from "./authObjs";
import { emptyFunction } from "./authObjs";
import { changingInputs } from "./authObjs";
import { initializeAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
export function Auth() {
  
  const [option, setOption] = useState(obj.enter);
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
  
  function submitFunc(event) {
    console.log('event prevented')
    event.preventDefault();
    const form=document.querySelector('form');
    console.log(option)

    if (option.option==='enter') {
      console.log('enter')
      setEmail(String(form.elements["enter-email"].value).toLowerCase());
        setPassword(form.elements["enter-password"].value);
      signInWithEmailAndPassword(auth,email,password).then((user)=>{console.log(user)
        setError("");
        form.reset();
        console.log('successful enter')
      }).catch((error)=>console.log(error))
    }
      
    
    else if (option.option==='regist') {
      console.log('regist')
      
      if(form.elements["regist-repeat-password"].value!==form.elements["regist-password"].value) {
        setError('Пароли не совпадают');
        console.log('Пароли не совпадают')
      }else{
        const registSurname=form.elements["regist-surname"].value;
        const registName=form.elements["regist-name"].value;
        setEmail(String(form.elements["regist-email"].value).toLowerCase());
        setPassword(form.elements["regist-password"].value);
        const registBirthday=form.elements["regist-birthday"].value;
        console.log(email)
        createUserWithEmailAndPassword(auth,email,password, registSurname, registName, registBirthday).then((userCredential)=>{console.log(userCredential); console.log(userCredential.user.providerData[0])
          setError("");
          form.reset();
          console.log('successful registration')
        }).catch((error)=>console.log(error))
      }
    }

  }

  useEffect(() => {
    setError("")
  }, [option]);
  
  const enterBtn = document.getElementById("enter-btn-option");
  //document.getElementById('auth-span').style.left=document.getElementById('enter-btn-option').clientLeft+'px';

  const [translate, setTranslate] = useState(-53.5 + "%");

  const [error, setError] = useState("");

  function handleClck(act) {
    switch (act) {
      case "reg":
        setOption(obj.regist);
        setTranslate(53.5 + "%")
        break;

      case "ent":
        setOption(obj.enter);
        setTranslate(-53.5 + "%")
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
        <button
          id="enter-btn-option"
          onClick={()=>handleClck('ent')}
        >
          Вход
        </button>
        <button
          id="regist-btn-option"
          onClick={()=>handleClck('reg')}
        >
          Регистрация
        </button>
      </div>
      <form id={option.id} onSubmit={submitFunc}>
        {option.fields.map((el) => {
          if (el.type === "checkbox") {
            return (
              <div className="checkbox-div">
                <label for={el.id}>{el.placeholder}</label>
                <input name={el.id} type={el.type} onChange={el.events.onChange} />
              </div>
            );
          }
          
          return (
            <input name={el.id} key={el.id} placeholder={el.placeholder} type={el.type} onInput={el.events.onChange}  />
          );
        })}
        <div id="error">{error}</div>
        <div className="submitContainer">
        <button className="submitBtn" type="submit">{option.submit}</button>
        </div>
        
      </form>
    </div>
    
    </div>
    
  );
}


