import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import JavaScript from "./pages/JavaScript";
import LayoutBlog from "./components/Layout/LayoutBlog";
import Css from "./pages/Css";
import Html from "./pages/Html";
import ReactJs from "./pages/ReactJs";
import NodeJs from "./pages/NodeJs";
import DB from "./pages/DB";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index exact path="/home" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blog" element={<LayoutBlog />}>
            <Route exact path="/blog/html" element={<Html />} />
            <Route exact path="/blog/css" element={<Css />} />
            <Route exact path="/blog/javascript" element={<JavaScript />} />
            <Route exact path="/blog/reactjs" element={<ReactJs />} />
            <Route exact path="/blog/nodejs" element={<NodeJs />} />
            <Route exact path="/blog/bd" element={<DB />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
