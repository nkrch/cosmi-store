/* eslint-disable no-restricted-globals */

export function emptyFunction() {
  console.log("nothing happened");
}

export function changingInputs(id, event) {
  console.log("event.target.value");

  console.log(event);

  console.log("changing input " + id);
  if (id.includes("enter")) {
    console.log("opening enter obj");
    obj.enter.fields.map((el) => {
      if (el.id === id) {
        console.log("successful finding");
        if (el.type !== "checkbox") {
          let form = document.querySelector("form");

          el.value = form.elements[id].value;
          event.target.value = el.value;
          console.log(obj.enter);
        } else {
          console.log("checkbox");
        }
      }
    });
  } else {
    obj.regist.fields.map((el) => {
      if (el.id === id) {
        console.log("successful finding");
        if (el.type !== "checkbox") {
          let form = document.querySelector("form");

          el.value = form.elements[id].value;
          event.target.value = el.value;
          console.log(obj.regist);
        } else {
          console.log("checkbox");
        }
      }
    });
  }
}

export const obj = {
  enter: {
    h2: "Вход в аккаунт",
    id: "enter-container-form",
    option: "enter",
    fields: [
      {
        placeholder: "Email",
        id: "enter-email",
        type: "email",
        events: {
          onClick: () => emptyFunction(),
          onChange: () => changingInputs("enter-email", event),
          onMouseOver: () => emptyFunction(),
        },
        value: "",
      },
      {
        placeholder: "Пароль",
        id: "enter-password",
        type: "password",
        events: {
          onClick: () => emptyFunction(),
          onChange: () => changingInputs("enter-password", event),
          onMouseOver: () => emptyFunction(),
        },
        value: "",
      },
      {
        placeholder: "Запомнить меня",
        id: "enter-checkbox",
        type: "checkbox",
        events: {
          onClick: () => emptyFunction(),
          onChange: () => changingInputs("enter-checkbox", event),
          onMouseOver: () => emptyFunction(),
        },
        value: "",
      },
    ],
    submit: "Войти",
  },
  regist: {
    h2: "Регистрация аккаунта",
    id: "regist-container-form",
    option: "regist",
    fields: [
      {
        placeholder: "Фамилия",
        id: "regist-surname",
        type: "text",
        events: {
          onClick: () => emptyFunction(),
          onChange: () => changingInputs("regist-surname", event),
          onMouseOver: () => emptyFunction(),
        },
        value: "",
      },
      {
        placeholder: "Имя",
        id: "regist-name",
        type: "text",
        events: {
          onClick: () => emptyFunction(),
          onChange: () => changingInputs("regist-name", event),
          onMouseOver: () => emptyFunction(),
        },
        value: "",
      },
      {
        placeholder: "Дата рождения",
        id: "regist-birthday",
        type: "date",
        events: {
          onClick: () => emptyFunction(),
          onChange: () => changingInputs("regist-birthday", event),
          onMouseOver: () => emptyFunction(),
        },
        value: "",
      },
      {
        placeholder: "Email",
        id: "regist-email",
        type: "email",
        events: {
          onClick: () => emptyFunction(),
          onChange: () => changingInputs("regist-email", event),
          onMouseOver: () => emptyFunction(),
        },
        value: "",
      },
      {
        placeholder: "Пароль",
        id: "regist-password",
        type: "password",
        events: {
          onClick: () => emptyFunction(),
          onChange: () => changingInputs("regist-password", event),
          onMouseOver: () => emptyFunction(),
        },
        value: "",
      },
      {
        placeholder: "Повторите пароль",
        id: "regist-repeat-password",
        type: "password",
        events: {
          onClick: () => emptyFunction(),
          onChange: () => changingInputs("regist-repeat-password", event),
          onMouseOver: () => emptyFunction(),
        },
        value: "",
      },
      {
        placeholder: "Запомнить меня",
        id: "enter-checkbox",
        type: "checkbox",
        events: {
          onClick: () => emptyFunction(),
          onChange: () => changingInputs("enter-checkbox", event),
          onMouseOver: () => emptyFunction(),
        },
        value: true,
      },
    ],
    submit: "Зарегистрироваться",
  },
};
