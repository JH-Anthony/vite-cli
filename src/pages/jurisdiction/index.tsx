import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Jurisdiction = () => {
  const pathname = useLocation().pathname;
  useEffect(() => {
    console.log("我刷新了？");
    console.log("pathname", pathname);
  }, [pathname]);
  return <></>;
};

export default Jurisdiction;
