import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Bar() {
  const [search, setSearch] = useState(true);

  function searchAnimation(params) {
    console.log("#### searchAnimation");
    if (search) {
      document.getElementById("search-header-container").style.overflow =
        "visible";
      document.getElementById("search-header-span").style.transitionDuration =
        500 + "ms";

        document.getElementById("search-header-span").style.opacity = 1;
      setTimeout(() => {
        document.getElementById("search-header-span").style.width = 9.5 + "vw";
        document.getElementById("search-header-span").style.display = "block";
        
        
      }, 350);
      document.getElementById("search-header-container").style.width =
        14 + "vw";

      /*document.getElementById("search-header-container").style.gap = 19 + "px";
       */

setTimeout(()=>{
  document.getElementById("search-header-span").focus();
},350)

      setSearch(false);
      
    }
  }

  function blurFunc() {
    console.log("#### blurFunc");
    document.getElementById("search-header").style.width = 100 + "%";
    document.getElementById("search-header-container").style.width = 24 + "px";
    document.getElementById("search-header-container").style.gap = 0 + "px";
    document.getElementById("search-header-span").style.opacity = 0;
    document.getElementById("search-header-span").style.width = 0;
    setTimeout(() => {
      document.getElementById("search-header-span").style.display = "none";
    }, 510);

    setSearch(true);
  }

  return (
    <header className="main-header">
      <NavLink className="logo" id="header-logo" to={"/"}></NavLink>
      <div className="nav-bar">
        <div className="main-links-header">
          <NavLink className={"header-links-main"} to={"/shop"}>
            Магазин
          </NavLink>
          <NavLink className={"header-links-main"} to={"/about"}>
            О Нас
          </NavLink>
        </div>
        <div className="svg-buttons-click">
          <div id="search-header-container">
            <button
              id="search-header"
              onClick={() => searchAnimation()}
              className="header-btn-svg"
            ></button>
            <input onBlur={blurFunc} id="search-header-span" />
          </div>

          <NavLink to={'/basket'} id="busket-header" className="header-btn-svg"></NavLink>
          <NavLink
            to={"/auth"}
            id="person-header"
            className="header-btn-svg"
          ></NavLink>
        </div>
      </div>
    </header>
  );
}
