import { NavLink, Routes, Route } from "react-router-dom";
import { ProductManage } from "./ProductManage";

export function AdminMenu(params) {
  return (
    <div>
      <h2>AdminMenu</h2>
      <NavLink to={"/admin/productmanagement"}>ProductManagement</NavLink>
     
    </div>
  );
}
