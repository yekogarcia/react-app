import { LazyExoticComponent, lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy1 = lazy(() => import("../01-lazyload/pages/LazyPage1"));
const Lazy2 = lazy(() => import("../01-lazyload/pages/LazyPage2"));
const Lazy3 = lazy(() => import("../01-lazyload/pages/LazyPage3"));

const LazyLayout = lazy(() => import("../01-lazyload/Layout/LazyLayout"));

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: Lazy1,
    name: "Lazy1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: Lazy2,
    name: "Lazy2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: Lazy3,
    name: "Lazy3",
  },
  {
    to: "/lazylayout/",
    path: "/lazylayout/*",
    Component: LazyLayout,
    name: "LazyLayout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
