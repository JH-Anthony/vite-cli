import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import globalStore from "./stores/global";
import { observer } from "mobx-react";
import { HashRouter, Link } from "react-router-dom";
import Router from "./router/router";
import Jurisdiction from "./pages/jurisdiction";
// import "antd/dist/antd.less";
import "@/common/style.less";
const App = () => {
  const { count, setCount, getTotalCount } = globalStore;

  return (
    <HashRouter>
      <Jurisdiction />
      <Router>
        <Link to={"/foo"}>asddasd</Link>
        <br></br>
        <Link to={"/foo/details"}>sss</Link>
      </Router>
    </HashRouter>
  );
};

export default observer(App);
