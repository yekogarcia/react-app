import { BrowserRouter, NavLink, Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import logo from "../assets/react.svg";

import { LazyPage3 } from "../01-lazyload/pages";
import { RegisterPage } from "../03-forms/pages/ResgisterPage";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
import { FormikYupPage } from "../03-forms/pages/FormikYupPage";
import { FormikComponents } from "../03-forms/pages/FormikComponents";
import { FormikAbstract } from "../03-forms/pages/FormikAbstract";
import { RegisterFormikPage } from "../03-forms/pages/RegisterFormikPage";
import { DynamicForm } from "../03-forms/pages/DynamicForm";

export const Navigatios = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink
                to="/register-page"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic
              </NavLink>
              {/* //ma5L.S)Gr#D=B?S< */}
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstract"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstract
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register-formik"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
               Register Formik
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dynamic-form"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
               Dinamic Form
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/formik-basic" element={ <FormikBasicPage /> } />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-abstract" element={<FormikAbstract />} />
          <Route path="/register-formik" element={<RegisterFormikPage />} />
          <Route path="/dynamic-form" element={<DynamicForm />} />

          <Route path="/*" element={<Navigate to="/lazy1" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
