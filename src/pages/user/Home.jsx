import React from "react";
import Header from "../../components/home/Header";
import Service from "../../components/home/Service";
import Showcase from "../../components/home/Showcase";
import Testimonials from "../../components/home/Testimonials";
import About from "../../components/home/About";
import Tools from "../../components/home/Tools";
import Contact from "../../components/home/Contact";
import Navbar from "../../components/Navbar";
import "swiper/css";
import "swiper/css/pagination";

function Home() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-20">
        <Header />

        <Service />
        <Showcase />
        <Testimonials />
        <About />
        <Tools />

        

        

        <Contact />
      </div>
    </>
  );
}

export default Home;
