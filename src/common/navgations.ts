import React, { lazy, LazyExoticComponent, ReactNode } from "react";
interface NavProps {
  title?: string;
  path?: string;
  Element: LazyExoticComponent<() => React.ReactElement>;
  children?: NavProps[];
}

const nav: NavProps[] = [
  {
    title: "首页",
    path: "/foo",
    Element: lazy(() => import("@/pages/index")),
    children: [
      {
        path: "details",
        title: "首页详情",
        Element: lazy(() => import("@/pages/index/details"))
      }
    ]
  },
  {
    title: "数字社区",
    path: "/number",
    Element: lazy(() => import("@/pages/index"))
  }
];
export default nav;
