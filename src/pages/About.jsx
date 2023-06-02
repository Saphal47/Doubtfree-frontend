import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-cream">
      <header className="bg-blue-600 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl font-poppins">About Us</h1>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col mb-4">
              <div>
                  <h2 className="text-4xl font-bold mb-4 ">Our Mission</h2>
                  <p className="text-gray-800 font-poppins ">
                    DoubtFree is committed to providing high-quality education and empowering students to achieve their
                    goals. We strive to create an inclusive and supportive learning environment where students can gain
                    confidence and excel in their academic journey.
                  </p>
                </div>
                <div>
                  <h2 className="text-4xl font-bold mt-6 mb-4 ">Our Vision</h2>
                  <p className="text-gray-800 font-poppins">
                    Our vision is to revolutionize education by leveraging technology and innovative teaching methods. We
                    aim to reach students worldwide and make quality education accessible to all, irrespective of their
                    geographic location or socio-economic background.
                  </p>
                </div>
                </div>

                <div className="mb-4">
                  {/* Add your image/gif component here */}
                  <img className="w-[90%] h-auto ml-20 align-baseline"src="https://doubtfree.in/wp-content/uploads/2023/04/112042-target-commercial.gif" alt="About Us" />
                </div>
          </section>

          <section className="mt-15">
            <h2 className="text-4xl font-bold mb-4 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:ml-56  md:grid-cols-2 gap-0 ">
              
              <div className="bg-gray-100   p-4 md:w-3/5">
                <img
                  src="https://doubtfree.in/wp-content/uploads/2022/06/214222957_7058740594196891_2148591290675333303_n.jpg"
                  alt="Team Member"
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-bold">Mayank Kumar</h3>
                <p className="text-gray-800">Founder and CEO</p>
              </div>
              <div className="bg-gray-100  p-4 md:w-3/5">
                <img
                  src="https://doubtfree.in/wp-content/uploads/2023/03/sejal-dp-291x300.jpeg"
                  alt="Team Member"
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-bold">Sejal Srivastava</h3>
                <p className="text-gray-800">Chief Operating Officer</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      

      <div>
        <Footer/>
      </div>

    </div>
  );
};

export default About;





          

    
    