import { FaBars, FaCartPlus, FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Login from "./Login";

// CartButton Component
const CartButton = ({ user, isAdmin, localItemLength, allOrders, addToCart }) => {
  return (
    <div className="flex items-center">
      {user ? (
        isAdmin ? (
          <Link to="dashboard/manageOrders">
            <button className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300">
              <FaCartPlus className="h-6 w-6" aria-hidden="true" />
              {allOrders?.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-red-800 bg-red-400 rounded-full">
                  +{allOrders?.length}
                </span>
              )}
            </button>
          </Link>
        ) : (
          <Link to="dashboard/cart">
            <button className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black bg-transparent border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300">
              <FaShoppingCart className="h-6 w-6 text-black" aria-hidden="true" />
              {addToCart.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-600 rounded-full">
                  +{addToCart.length}
                </span>
              )}
            </button>
          </Link>
        )
      ) : (
        <Link to="/cart">
          <button className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black bg-transparent border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300">
            <FaShoppingCart className="h-6 w-6 text-black" aria-hidden="true" />
            {localItemLength.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-600 rounded-full">
                +{localItemLength.length || 0}
              </span>
            )}
          </button>
        </Link>
      )}
    </div>
  );
};

// UserMenu Component
const UserMenu = ({
  user,
  isAdmin,
  localItemLength,
  addToCart,
  allOrders,
  logOut,
  adminLinks,
}) => {
  return (
    <div className="ml-auto flex items-center mr-2">
      <CartButton
        user={user}
        allOrders={allOrders}
        isAdmin={isAdmin}
        addToCart={addToCart}
        localItemLength={localItemLength}
      />
      {user ? (
        <Menu as="div" className="relative ml-3">
          <Menu.Button className="relative h-8 w-8 flex items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">Open user menu</span>
            {user?.photoURL ? (
              <img
                loading="lazy"
                className="rounded-full object-cover h-8 w-8"
                src={user?.photoURL}
                alt="User Profile"
              />
            ) : (
              <FaRegCircleUser className="rounded-full text-black h-8 w-8" />
            )}
          </Menu.Button>

          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {adminLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={logOut}
                className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100"
              >
                Log Out
              </button>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default UserMenu;
