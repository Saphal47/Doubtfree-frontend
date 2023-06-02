import React from "react";
import Footer from "../components/Footer";

import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.712776,
  lng: -74.005974,
};


const Contact = () => {
  return (
    <div className="bg-white">
      <header className="bg-blue-600 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-800 font-poppins">
                We'd love to hear from you! If you have any questions, feedback, or inquiries, please reach out to us
                using the contact details below or fill out the contact form. Our team will get back to you as soon as
                possible.
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-2">Contact Details</h3>
                <p className="text-gray-800 font-semibold"><i class="bi bi-phone"></i> : +1234567890</p>
                <p className="text-gray-800 font-semibold"><i class="bi bi-mailbox"></i> :   info@doubtfree.com</p>
                <p className="text-gray-800 font-semibold"><i class="bi bi-house"></i> :  123 Example Street, City, Country</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="text-gray-800 font-bold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-300 py-2 px-4 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="text-gray-800 font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 py-2 px-4 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="text-gray-800 font-bold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="border border-gray-300 py-2 px-4 rounded-md w-full h-32 resize-none focus:outline-none focus:ring focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>

          {/* Google map */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <LoadScript googleMapsApiKey="YOUR_API_KEY">
              <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={14}>
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </section>


        </div>
      </main>

      <div className="mt-2">
        <Footer/>
      </div>

    </div>
  );
};

export default Contact;
