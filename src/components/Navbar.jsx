import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  let [mobailemenu, setmobailemenu] = useState(false);

  let menutoggole = () => {
    setmobailemenu(!mobailemenu);
  };
  let handlehidden = () => {
    setmobailemenu(false);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="" />
            <span className="text-xl trackinng-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Feature">Features</NavLink>
            </li>

            <li>
              <NavLink to="/workflow">Workflow</NavLink>
            </li>
            <li>
              <NavLink to="/Pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/Testimonial">Testimonials</NavLink>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={menutoggole}>
              {mobailemenu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobailemenu && (
          <div className="fixed right-0 z-10 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li onClick={handlehidden} className="my-2">
                <NavLink to="/">Home</NavLink>
              </li>
              <li onClick={handlehidden} className="my-2">
                <NavLink to="/Feature">Features</NavLink>
              </li>

              <li onClick={handlehidden} className="my-2">
                <NavLink to="/workflow">Workflow</NavLink>
              </li>
              <li onClick={handlehidden} className="my-2">
                <NavLink to="/Pricing">Pricing</NavLink>
              </li>
              <li onClick={handlehidden} className="my-2">
                <NavLink to="/Testimonial">Testimonials</NavLink>
              </li>
            </ul>
            <div className="flex space-x-6 mt-4  ">
              <a href="#" className="py-2 px-3 rounded-md border">
                Sing In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
