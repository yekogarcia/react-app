import { BrowserRouter, NavLink, Navigate } from "react-router-dom";
import { Route, Link, Routes } from "react-router-dom";
import { Suspense } from "react";

import logo from "../assets/react.svg";
import { routes } from "./routes";

// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export const Navigatios = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo" />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            {/* <Route path="/lazy2" element={<LazyPage2 />} />
          <Route path="/lazy3" element={<LazyPage3 />} /> */}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
