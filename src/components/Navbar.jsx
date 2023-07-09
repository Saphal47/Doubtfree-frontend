import React, { useState } from "react";
import Home from "../pages/home/Home";
import { Link } from "react-router-dom";
import "./css/navbar.css";
import { Button } from "antd";
import {
  CodeFilled,
  LoginOutlined,
  PoweroffOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../services/auth/logout";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.verify).result;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img
                    class="block h-8 w-auto lg:hidden"
                    src="https://doubtfree.in/wp-content/uploads/2023/04/logo2.png"
                    alt="Your Company"
                  />
                  <img
                    class="hidden h-8 w-auto lg:block"
                    src="https://doubtfree.in/wp-content/uploads/2023/04/logo2.png"
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  {isLoggedIn && (
                    <Link
                      to={"/dashboard/profile"}
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      aria-current="page"
                    >
                      {" "}
                      Dashboard
                    </Link>
                  )}
                  <Link
                    to={"/courses"}
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    {" "}
                    Courses
                  </Link>

                  <Link
                    to={"/doubtSupport"}
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    {" "}
                    DoubtSupport
                  </Link>

                  <Link
                    to={"/About"}
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    {" "}
                    About
                  </Link>
                  <Link
                    to={"/Contact"}
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    {" "}
                    Contact
                  </Link>
                </div>
              </div>
              <div
                className="text-right"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                {isLoggedIn && (
                  <>
                    <Link
                      to="/dashboard/playground"
                      class="text-gray-300 bg-blue-600 hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium mx-2"
                      aria-current="page"
                      style={{
                        width: "150px",
                        padding: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CodeFilled className="mx-1" />
                      Playground
                    </Link>
                    <Link
                      to="/login"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium mx-2"
                      aria-current="page"
                      onClick={() => LogoutUser(dispatch)}
                    >
                      <PoweroffOutlined className="mx-2" />
                      Logout
                    </Link>
                  </>
                )}
                {!isLoggedIn && (
                  <>
                    <Link
                      to="/register"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium mx-2"
                      aria-current="page"
                    >
                      Register
                    </Link>
                    <Link
                      to="/login"
                      class="text-gray-300 bg-blue-600 hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium mx-2"
                      aria-current="page"
                      style={{
                        width: "150px",
                        padding: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <UserOutlined />
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">
              <a
                href="#"
                class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Dashboard
              </a>
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Team
              </a>
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Calendar
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
