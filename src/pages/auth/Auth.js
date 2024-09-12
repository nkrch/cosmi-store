import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import "./auth.scss";

export function Auth() {
  const obj = {
    enter: {
      h2: "Вход в аккаунт",
      id: 'enter-container-form',
      fields: [
        {
          placeholder: "Email",
          id: "enter-email",
          type: "email",
        },
        {
          placeholder: "Пароль",
          id: "enter-password",
          type: "password",
        },
        {
          placeholder: "Запомнить меня",
          id: "enter-checkbox",
          type: "checkbox",
        },
      ],
      submit: "Войти",
    },
    regist: {
      h2: "Регистрация аккаунта",
      id: 'regist-container-form',
      fields: [
        {
          placeholder: "Фамилия",
          id: "regist-surname",
          type: "text",
        },
        {
          placeholder: "Имя",
          id: "regist-name",
          type: "text",
        },
        {
          placeholder: "Дата рождения",
          id: "regist-birthday",
          type: "date",
        },
        {
          placeholder: "Email",
          id: "regist-email",
          type: "email",
        },
        {
          placeholder: "Пароль",
          id: "regist-password",
          type: "password",
        },
        {
          placeholder: "Повторите пароль",
          id: "regist-repeat-password",
          type: "password",
        },
        {
          placeholder: "Запомнить меня",
          id: "enter-checkbox",
          type: "checkbox",
        },
      ],
      submit: "Зарегистрироваться",
    },
  };

  const [option, setOption] = useState(obj.enter);

  const enterBtn = document.getElementById("enter-btn-option");
  //document.getElementById('auth-span').style.left=document.getElementById('enter-btn-option').clientLeft+'px';

  const [translate, setTranslate] = useState(-53.5 + "%");

  

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
      <form id={option.id}>
        {option.fields.map((el) => {
          if (el.type === "checkbox") {
            return (
              <div id="checkbox-div">
                <label for={el.id}>{el.placeholder}</label>
                <input name={el.id} type={el.type} />
              </div>
            );
          }
          return (
            <input name={el.id} placeholder={el.placeholder} type={el.type} />
          );
        })}
        
      </form><button className="submitBtn" type="submit">{option.submit}</button>
    </div>
    </div>
    
  );
}
