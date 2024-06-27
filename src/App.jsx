import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import FeatureSection from "./components/FeatureSection";
import Workflowsection from "./components/Workflowsection";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";

const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
        <Route path="/hero" element={<Herosection />}></Route>
        <Route path="/Feature" element={<FeatureSection />}></Route>
        <Route path="/workflow" element={<Workflowsection />}></Route>
        <Route path="/Pricing" element={<Pricing />}></Route>
        <Route path="/Testimonial" element={<Testimonial />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
