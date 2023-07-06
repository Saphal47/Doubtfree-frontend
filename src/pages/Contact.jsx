import React, { useState } from "react";
import Footer from "../components/Footer";

import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { message } from "antd";
import axios from "axios";

const { useMessage } = message;

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.712776,
  lng: -74.005974,
};

const Contact = () => {
  const userprofile = useSelector((state) => state.getuser?.result?.result);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(userprofile?.name);
  const [email, setEmail] = useState(userprofile?.email);
  const [message, setMessage] = useState("");
  const [messageApi, contextHolder] = useMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === "" || name.trim() === "" || email.trim() === "") {
      messageApi.open({
        type: "error",
        content: "Please fill required field first",
      });
      return;
    }
    setLoading(true);
    try {
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const data = {
        email: email,
        name: name,
        message: message,
      };
      const res = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/contact_us`,
        data,
        { headers }
      );

      if (res.data.error) {
        messageApi.open({
          type: "error",
          content: res.data.error,
        });
      } else {
        messageApi.open({
          type: "success",
          content: res?.data?.message,
        });
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
      messageApi.open({
        type: "error",
        content: "Server Error",
      });
    }
    setLoading(false);
    setMessage("");
  };
  return (
    <div className="bg-white">
      {contextHolder}
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
                We'd love to hear from you! If you have any questions, feedback,
                or inquiries, please reach out to us using the contact details
                below or fill out the contact form. Our team will get back to
                you as soon as possible.
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-2">Contact Details</h3>
                <p className="text-gray-800 font-semibold">
                  <i class="bi bi-phone"></i> : +1234567890
                </p>
                <p className="text-gray-800 font-semibold">
                  <i class="bi bi-mailbox"></i> : info@doubtfree.com
                </p>
                <p className="text-gray-800 font-semibold">
                  <i class="bi bi-house"></i> : 123 Example Street, City,
                  Country
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
              <form noValidate onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="text-gray-800 font-bold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    disabled={userprofile?.name ? true : false}
                    onChange={(e) => setName(e.target.value)}
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
                    name="email"
                    value={email}
                    disabled={userprofile?.email ? true : false}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 py-2 px-4 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="text-gray-800 font-bold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className="border border-gray-300 py-2 px-4 rounded-md w-full h-32 resize-none focus:outline-none focus:ring focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                >
                  {loading ? "Please Wait.." : "Submit"}
                </button>
              </form>
            </div>
          </section>

          {/* Google map */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <LoadScript googleMapsApiKey="YOUR_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={14}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </section>
        </div>
      </main>

      <div className="mt-2">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
