import React, { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAdmin from "../../Hooks/useAdmin";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
import UserMenu from "./UserMenu";
const Navbar = () => {
  const { user, logOut, localItemLength } = useContext(AuthContext);
  const [addToCart] = useCart();
  const axiosSecure = useAxiosSecure();
  const [isAdmin] = useAdmin();

  const { data: allOrders = [] } = useQuery({
    queryKey: ["allOrders"],
    queryFn: async () => {
      if (isAdmin) {
        const res = await axiosSecure.get("/orders/all");
        return res.data ?? [];
      } else return [];
    },
  });

  // console.log(isAdmin, user, "kkkkkkkkkk");
  // console.log(allOrders, addToCart, "allOrders, addToCart");
  const commonLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/aboutUs", label: "About Us" },
  ];

  const adminLinks = [
    { path: "/dashboard/adminHome", label: "Admin Home" },
    { path: "/dashboard/manageOrders", label: "Manage Orders" },
    { path: "/dashboard/manageItems", label: "Manage Items" },
    { path: "/dashboard/addItems", label: "Add Items" },
    { path: "/dashboard/allUsers", label: "All Users" },
  ];

  const userLinks = [
    { path: "/dashboard/cart", label: "Shopping Cart" },
    { path: "/dashboard/orders", label: "Orders" },
  ];

  // Links array based on the user role
  const links = isAdmin
    ? [...commonLinks, ...adminLinks]
    : user
    ? [...commonLinks, ...userLinks]
    : commonLinks;
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 bg-white  mx-auto w-full px-4 text-white">
      {/* Logo */}

      {/* Desktop Navigation */}
      <ul className="hidden md:flex w-full">
        <li className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img
              loading="lazy"
              className="h-14"
              src={logo}
              alt="Hassan Store"
            />
          </Link>
        </li>
        {links.map((item) => (
          <li
            key={item.label}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 text-black font-bold "
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <UserMenu
        user={user}
        localItemLength={localItemLength}
        allOrders={allOrders}
        isAdmin={isAdmin}
        addToCart={addToCart}
        logOut={logOut}
        adminLinks={adminLinks}
      />
      {/* Mobile Navigation Icon */}
      <div
        onClick={handleNav}
        className="block md:hidden  text-black cursor-pointer"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
        style={{ zIndex: 9999999 }}
      >
        {/* Mobile Logo */}
        <li className="w-full py-2 flex items-center  justify-between">
          <Link to="/" className="w-70 ps-2 flex items-center">
            <img
              loading="lazy"
              className="h-14 w-70"
              src={logo}
              alt="Hassan Store"
            />
          </Link>
          <div onClick={handleNav} className="ml-auto mr-2 text-black">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </li>

        {/* Mobile Navigation Items */}
        {links.map((item) => (
          <li
            key={item.label}
            className="p-4 m-1 hover:bg-[#00df9a] duration-300 text-black font-bold cursor-pointer border-b-2 border-gray-600"
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
