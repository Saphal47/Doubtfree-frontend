import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container-footer mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>


            <h4 className="text-xl font-bold mb-4">Company</h4>
            <ul className="list-none">
              <li className="mb-2">
                <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Resources</h4>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">Documentation</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">Tutorials</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
          <h4 className="text-xl font-bold mb-4">Social Media</h4>
          <div className="flex items-center">
                <ul className="list-none flex space-x-8">
                    <li className="mb-2">
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                        <i className="bi bi-facebook fs-4"></i>
                    </a>
                    </li>
                    <li className="mb-2">
                    <Link 
                          to="https://twitter.com/DoubtfreeO1" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800"
                        >
                        <i className="bi bi-twitter fs-4"></i>
                    </Link>
                    </li>
                    <li className="mb-2">
                    <Link
                          to="https://www.instagram.com/doubtfreelearning/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800"
                        >
                          <i className="bi bi-instagram fs-4"></i>
                    </Link>

                    </li>
                </ul>
          </div>
          </div>


          <div>
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter to receive updates and news.</p>
            <form>
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-gray-300 focus:outline-none focus:ring focus:border-blue-500 mb-2"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-1 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr className="border-gray-800 my-6" />
        <div className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} DoubtFree. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
