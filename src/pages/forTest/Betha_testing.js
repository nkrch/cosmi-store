import { useState } from "react";
import "./bethatest.scss";
import { render } from "@testing-library/react";
import { useEffect } from "react";

export function Betha_testing(params) {
  const prods = [
    {
      nameP: "uno",
      priceNumeric: 500,
      totalForIt: 0,
      quant: 0,
      id: 0,
    },
    {
      nameP: "dos",
      priceNumeric: 800,
      totalForIt: 0,
      quant: 0,
      id: 1,
    },
    {
      nameP: "quatra",
      priceNumeric: 1000,
      totalForIt: 0,
      quant: 0,
      id: 2,
    },
  ];

  const [arrOfProds, setArrOfProds] = useState(prods);
  const [totalCost, setTotalCost] = useState(0);

useEffect(()=>{
  setTotalCost(0)
arrOfProds.map((el)=>{
  setTotalCost(prev=>prev+el.totalForIt)

})
}, [arrOfProds])

  const handleClck = (id, option) => {
    switch (option) {
      case "plus":
        setArrOfProds(
          arrOfProds.map((el) => {
            if (el.id === id) {
              return {
                ...el,
                quant: el.quant + 1,
                totalForIt: el.priceNumeric * (el.quant + 1),
              };
            } else {
              return el;
            }
          })
        );

        break;
      case "minus":
        setArrOfProds(
          arrOfProds.map((el) => {
            if (el.id === id && el.quant !== 0) {
              return {
                ...el,
                quant: el.quant - 1,
                totalForIt: el.priceNumeric * (el.quant - 1),
              };
            } else {
              return el;
            }
          })
        );

        break;
      default:
        break;
    }

    console.log(arrOfProds);
  };

  return (
    <div className="betha-testing">
      <h2>Betha_testing</h2>
      <div className="naming-prods">
        {arrOfProds.map((el) => {
          return (
            <div className="prod-item" key={el.id}>
              <h2>{el.nameP}</h2>
              <h3>{el.priceNumeric} BYN</h3>
              <h3>{el.quant}</h3>
              <h3>{el.totalForIt}</h3>
              <button onClick={() => handleClck(el.id, "plus")}>+</button>
              <button onClick={() => handleClck(el.id, "minus")}>-</button>
            </div>
          );
        })}
        <div className="total-sum">{totalCost}</div>
      </div>
    </div>
  );
}
