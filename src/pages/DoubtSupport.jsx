import React from "react";
import Footer from "../components/Footer";
import QueryBar from "../components/QueryBar";
import Grid from "./grid/grid";
import GridLower from "./grid/gridLower";

const DoubtSupport = () => {
  return (
    <>
      <div className="container-home">
        <div className="home-left">
          <div className="text-5xl md:text-6xl font-bold mt-0">
            Prepare Your Kids For The Future with Experienced Teacher
          </div>
        </div>
        <div className="home-right">
          <img
            className="w-[50%] h-[50%] ml-40"
            src="/dizzy-happy-girl-in-graduation-gown-jumps-and-tosses-her-graduation-cap 1.png"
          />
        </div>
      </div>
      <div className="text-gray py-4 px-6 text-left container-home1">
        <div className="text-lg font-semibold mb-2">
          Kids who learn to code are ready to face their ever-changing future.
          Our Experienced teacher will help your kids develop the resilience,
          skills, and abilities to respond productively to those changes.
        </div>
      </div>
      

        <div className="mt-0 z-0"><GridLower/></div>
      {/* </section> */}

    
      

      

      <h1 className="mb-6 mt-4 text-5xl font-extrabold tracking-tight text-center text-black-900 lg:mb-8 lg:text-5xl">
                  CONNECT WITH OUR MENTORS
      </h1>
            <div>
              <section className="container mx-auto p-2">
              <div className="mb-4">
                <h2 className="text-3xl font-semibold mb-2">Submit a Doubt</h2>
                <form>
                  <div className="flex flex-col mb-2">
                    <label for="mentor" className="text-sm mb-1">
                      Select a Mentor
                    </label>
                    <select
                      id="mentor"
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Select a Mentor --</option>
                      <option value="mentor1">Mentor 1</option>
                      <option value="mentor2">Mentor 2</option>
                      <option value="mentor3">Mentor 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col mb-2">
                    <label for="doubt" className="text-sm mb-1">
                      Your Doubt
                    </label>
                    <textarea
                      id="doubt"
                      rows="4"
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </form>
              </div>
              </section>

          
          <div className="flex justify-center flex-wrap gap-4">
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" className="card-img-top" alt="..." />

              <h3 className="text-lg text-center font-semibold mb-2">Mentor Name</h3>
              <p className="mb-4">Description of the mentor or their expertise</p>
              <a
                href="https://meet.google.com/fun-xkve-mti"
                className="px-4 py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Schedule a Meeting
              </a>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" className="card-img-top" alt="..." />

              <h3 className="text-lg text-center font-semibold mb-2">Mentor Name</h3>
              <p className="mb-4">Description of the mentor or their expertise</p>
              <a
                href="https://meet.google.com/fun-xkve-mti" 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Schedule a Meeting
              </a>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" className="card-img-top" alt="..." />

              <h3 className="text-lg text-center font-semibold mb-2">Mentor Name</h3>
              <p className="mb-4">Description of the mentor or their expertise</p>
              <a
                href="https://meet.google.com/fun-xkve-mti" 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Schedule a Meeting
              </a>
            </div>
           
           
          </div>
        </div>
    
      <div className="mt-4 z-0">
        <GridLower />
      </div>
      <div className="mt-2">
        <Footer />
      </div>
    </>
  );
};

export default DoubtSupport;