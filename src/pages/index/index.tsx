import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useLocation, Outlet } from "react-router-dom";
import { Button } from "antd";
const Index = observer(() => {
  return (
    <>
      <Button type="primary">asdas</Button>
      {/* 嵌套需要用的Outlet 非嵌套就走别的关系？ */}
      <Outlet></Outlet>
    </>
  );
});
export default Index;
