import { useState, useEffect, useRef, useCallback } from "react";
import "./shop.scss";
//import { useSearchProds } from "../../hooks/useSearchProds";
//import { products } from "../products/products";
export function Shop(params) {
  const [plusMeaning, setPlusMeaning] = useState(0);
  //const [prodSorted, setProdSorted] = useState(products);

  return (
    <div className="shop-main-container">
      <div className="sorting-center-container">
        <h2>Последние новинки</h2>
        <select>
          <option>
            <button>Сортировать по цене ↓</button>
          </option>
          <option>
            <button>Сортировать по цене ↑</button>
          </option>
          <option selected>
            <button>Сначала новые</button>
          </option>
        </select>
      </div>
    </div>
  );
}

/*
<div className="shopping-shop-page">
        {prodSorted.map((el) => {
          if (el.id < plusMeaning + 7) {
            return (
              <div className="card" key={el.id}>
                <img src={el.imgUrl} className="product-image-shop-page"></img>
                <h4>{el.nameP}</h4>
                <h5>{el.price}</h5>
              </div>
            );
          }
        })}
      </div>
*/
