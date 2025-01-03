import React from "react";
import { Link } from "react-router-dom"; // Make sure you have react-router-dom installed

// Assuming DisclosureButton is a component you want to use for toggling the menu or something else
const DisclosureButton = ({ children, className }) => (
  <button className={className}>{children}</button>
);

const Login = () => {
  return (
    <div className=" px-2">
      <DisclosureButton className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white">
        <Link to="/logIn">Login</Link>
      </DisclosureButton>
    </div>
  );
};

export default Login;
