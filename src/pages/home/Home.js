import { NavLink } from "react-router-dom";
//import { products } from "../products/products";
import { useEffect } from "react";
import "./main.scss";
export default function Home(params) {
  return (
    <>
      <header className="banner-main">
        <div className="banner-main-container">
          <div className="banner-main-hs">
            <h3>ESTEE LAUDER</h3>
            <h4>68,00 р.</h4>
          </div>
          <NavLink className={"view-prod-main-btn"}>View Product</NavLink>
        </div>
      </header>
      <div className="catalog-main-page">
        <header className="catalog-main-page-header">
          <h3>Shop The Latest</h3>
          <NavLink className={"shop-the-latest-view-all"} to={"/shop"}>
            View All
          </NavLink>
        </header>
      </div>
    </>
  );
}

/*
<div className="shopping-main-page">
          {products.map((el) => {
            console.log(el.imgUrl)
            if (el.id<7) {
              return(
            <div className="card" key={el.id}>
              <img src={el.imgUrl} className="product-image-main-page"></img>
              <h4>{el.nameP}</h4>
              <h5>{el.price}</h5>
            </div>
          )
            }
            })}
        </div>
*/
