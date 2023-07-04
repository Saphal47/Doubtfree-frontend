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
      {/* <section className="mt-2"> 
        <div className="z-0"><Grid/></div>
        
        <section className="mt-12">
          
            <h2 className="text-4xl font-bold mb-4 text-center mt-4">Connect with Our Mentors</h2>


            <div className="flex justify-center gap-10">

              <div className="card w-72">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title font-semibold">Mentor 1</h5>
                  <p className="card-text">
                    Machine Learning
                  </p>
                  <a href="https://meet.google.com/fun-xkve-mti" className="btn btn-primary">
                    Join
                  </a>
                </div>
              </div>

              <div className="card w-72">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title font-semibold">Mentor 2</h5>
                  <p className="card-text">
                  Web Development
                  </p>
                  <a href="https://meet.google.com/fun-xkve-mti" className="btn btn-primary">
                    Join
                  </a> 
                </div>
              </div>

              <div className="card w-72">
                  <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title font-semibold ">Mentor 3</h5>
                    <p className="card-text">
                      App Development
                    </p>
                    <a href="https://meet.google.com/fun-xkve-mti" className="btn btn-primary">
                      Join
                    </a>
                  </div>
              </div>

            </div>
        </section> */}

        <div className="mt-0 z-0"><GridLower/></div>
      {/* </section> */}

    
      

      


        <div>
          <h1 class="text-3xl mt-4 font-semibold text-center m mb-2">Mentors</h1>
          <div class="flex justify-center flex-wrap gap-4">
            <div class="bg-white shadow-md rounded-lg p-4">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" className="card-img-top" alt="..." />

              <h3 class="text-lg font-semibold mb-2">Mentor Name</h3>
              <p class="mb-4">Description of the mentor or their expertise</p>
              <a
                href="https://meet.google.com/fun-xkve-mti"
                className="px-4 py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Schedule a Meeting
              </a>
            </div>
            <div class="bg-white shadow-md rounded-lg p-4">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" className="card-img-top" alt="..." />

              <h3 class="text-lg font-semibold mb-2">Mentor Name</h3>
              <p class="mb-4">Description of the mentor or their expertise</p>
              <a
                href="https://meet.google.com/fun-xkve-mti" 
                class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Schedule a Meeting
              </a>
            </div>
            <div class="bg-white shadow-md rounded-lg p-4">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" className="card-img-top" alt="..." />

              <h3 class="text-lg font-semibold mb-2">Mentor Name</h3>
              <p class="mb-4">Description of the mentor or their expertise</p>
              <a
                href="https://meet.google.com/fun-xkve-mti" 
                class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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