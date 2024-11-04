import { obj } from "../authObjs";
import { useState } from "react";

export function Regist() {
  const [option, setOption] = useState(obj.regist);
  return (
    <>
      {option.fields.map((el) => {
        if (el.type === "checkbox") {
          return (
            <div className="checkbox-div">
              <label for={el.id}>{el.placeholder}</label>
              <input
                name={el.id}
                id={el.id}
                key={el.id}
                type={el.type}
                onChange={el.events.onChange}
              />
            </div>
          );
        }

        return (
          <input
            name={el.id}
            id={el.id}
            key={el.id}
            placeholder={el.placeholder}
            type={el.type}
            onInput={el.events.onChange}
          />
        );
      })}
    </>
  );
}
