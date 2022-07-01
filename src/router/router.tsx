import React, { useEffect, FC, ReactNode } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import nav from "@/common/navgations";
import _ from "lodash";
interface RouterProps {
  children: ReactNode;
}
const Router: FC<RouterProps> = ({ children }) => {
  return (
    <>
      <Routes>
        {_.map(nav, ({ path, Element, children }) => {
          return (
            <Route path={path!} key={path!} element={<Element />}>
              {children?.length! !== 0 &&
                _.map(children, ({ path, Element }) => {
                  return (
                    <Route path={path!} key={path!} element={<Element />} />
                  );
                })}
            </Route>
          );
        })}
      </Routes>
      {children}
    </>
  );
};
export default Router;
