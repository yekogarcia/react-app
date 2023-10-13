import { BrowserRouter, NavLink, Navigate } from "react-router-dom";
import { Route, Link, Routes } from "react-router-dom";

import logo from "../assets/react.svg";
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";

// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export const Navigatios = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink
                to="/shopping"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                ShoppingPage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                lazy2
              </NavLink>
              {/* //ma5L.S)Gr#D=B?S< */}
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                lazy3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/shopping" element={<ShoppingPage />} />
          {/* <Route path="/lazy2" element={ <LazyPage2 /> } />
          <Route path="/lazy3" element={<LazyPage3 />} /> */}

          <Route path="/*" element={<Navigate to="/shopping" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
