import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import JavaScript from "./pages/pages-blog/JavaScript";
import LayoutBlog from "./components/Layout/LayoutBlog";
import Css from "./pages/pages-blog/Css";
import Html from "./pages/pages-blog/Html";
import ReactJs from "./pages/pages-blog/ReactJs";
import NodeJs from "./pages/pages-blog/NodeJs";
import DB from "./pages/pages-blog/DB";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index exact path="/Home" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blog" element={<LayoutBlog />}>
            <Route exact path="/blog/htm/" element={<Html />} />
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
