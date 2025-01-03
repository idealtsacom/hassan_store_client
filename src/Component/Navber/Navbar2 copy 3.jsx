import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { useContext } from "react";
import { FaBars, FaCartPlus, FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from "../../assets/logo2.png";
import useCart from "../../Hooks/useCart";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAdmin from "../../Hooks/useAdmin";

const Navbar2 = () => {
  const { user, logOut, localItemLength } = useContext(AuthContext);
  const [addToCart] = useCart();
  const axiosSecure = useAxiosSecure();
  const [isAdmin] = useAdmin();

  const { data: allOrders = [] } = useQuery({
    queryKey: ["allOrders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orders/all");
      return res.data;
    },
  });

  console.log(isAdmin,user,"kkkkkkkkkk");
  const commonLinks = [
    { path: "/cart", label: "Shopping Cart", role: "guest" },
    { path: "/Login", label: "Login", role: "guest" },
  ];

  const adminLinks = [
    { path: "/dashboard/adminHome", label: "Admin Home", role: "admin" },
    { path: "/dashboard/manageOrders", label: "Manage Orders", role: "admin" },
    { path: "/dashboard/manageItems", label: "Manage Items", role: "admin" },
    { path: "/dashboard/addItems", label: "Add Items", role: "admin" },
    { path: "/dashboard/allUsers", label: "All Users", role: "admin" },
    { path: "", label: "Log Out", role: "admin", action: "logOut" },
  ];

  const userLinks = [
    { path: "/dashboard/cart", label: "Shopping Cart", role: "user" },
    { path: "/dashboard/orders", label: "Orders", role: "user" },
    { path: "", label: "Log Out", role: "user", action: "logOut" },
  ];

  // Links array based on the user role
  const links = isAdmin ? adminLinks : user ? userLinks : commonLinks;

  return (
    <div className="min-h-full ">

      <Disclosure as="nav" className="bg-white w-full ">
        {({ open }) => (
          <>
            <div className="px-4 sm:px-6 lg:px-8 w-full ">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link to="/" className="flex items-center">
                      <img
                        loading="lazy"
                        className="h-14"
                        src={logo}
                        alt="Hassan Store"
                      />
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <Link
                        to="/"
                        className="text-black font-bold hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm"
                      >
                        Home
                      </Link>
                      <Link
                        to="/shop"
                        className="text-black font-bold hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm"
                      >
                        Shop
                      </Link>
                      <Link
                        to="/aboutUs"
                        className="text-black font-bold hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm"
                      >
                        About Us
                      </Link>
                    </div>
                  </div>
                </div>

                <>
                  {user ? (
                    <>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          {isAdmin ? (
                            <Link to="dashboard/manageOrders">
                              <button className="btn">
                                <FaCartPlus
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                                <div className="badge badge-secondary">
                                  +{allOrders?.length}
                                </div>
                              </button>
                            </Link>
                          ) : (
                            <Link to="dashboard/cart">
                              <button className="btn bg-transparent hover:bg-slate-100 border-stone-300 outline-none">
                                <FaShoppingCart
                                  className="h-6 w-6 text-black"
                                  aria-hidden="true"
                                />
                                <div className="badge badge-secondary text-white">
                                  +{addToCart.length}
                                </div>
                              </button>
                            </Link>
                          )}

                          {/* User Profile Menu */}
                          <Menu as="div" className="relative ml-3">
                            <MenuButton className="relative flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="sr-only">Open user menu</span>
                              {user?.photoURL ? (
                                <img
                                  loading="lazy"
                                  className="h-8 w-8 rounded-full"
                                  src={user?.photoURL}
                                  alt=""
                                />
                              ) : (
                                <FaRegCircleUser className="h-8 w-8 rounded-full" />
                              )}
                            </MenuButton>
                            <Transition
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {links.map((link, index) =>
                                  link.path ? (
                                    <Link
                                      key={index}
                                      to={link.path}
                                      className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700"
                                    >
                                      {link.label}
                                    </Link>
                                  ) : (
                                    <a
                                      key={index}
                                      onClick={link.action ? logOut : null}
                                      className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700"
                                    >
                                      {link.label}
                                    </a>
                                  )
                                )}
                              </MenuItems>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="ml-auto flex flex-row items-center justify-between">
               
                      <Link to="/cart">
                        <button className="btn bg-transparent  hover:bg-slate-100 border-stone-300 outline-none">
                          <FaShoppingCart
                            className="h-6 w-6 text-black"
                            aria-hidden="true"
                          />
                          <div className="badge badge-secondary text-white">
                            +{localItemLength.length || 0}
                          </div>
                        </button>
                      </Link>

                      {/* Login Button when User is Logged Out */}
                      <Link
                        to="/Login"
                        className="text-black ml-3 font-bold hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm hidden md:block"
                      >
                        Login
                      </Link>
                    </div>
                  )}
                </>

                <div className="mx-2 flex md:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FaXmark className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <FaBars className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
              </div>
            </div>
          
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar2;
