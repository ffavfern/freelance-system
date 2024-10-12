import React from "react";
import CardService from "../CardService";
import LandingPage from "../../assets/img/Landing page.png"
import Wordpress from "../../assets/img/wordpress.png"
import eCommerce from "../../assets/img/e-commerce.png"
import CustomWeb from "../../assets/img/custom web.png"

function Service() {
  const cardsData = [
    {
      icon: LandingPage,
      title: "Landing Page",
      price: "5,000",
    },
    {
      icon: Wordpress,
      title: "Wordpress",
      price: "3,500",
    },
    {
      icon: eCommerce,
      title: "e-commerce",
      price: "15,000",
    },
    {
      icon: CustomWeb,
      title: "custom website",
      price: "10,000",
    }
  ];

  return (
    <>
      <section
        id="service"
        className="flex flex-col justify-center text-center items-center py-5 my-5 w-full"
      >
        {/*header*/}
        <div className="grid grid-cols-3 items-center w-full ">
          <div className="w-full line-header" />
          <div className="text-center ">
            <h2 className="uppercase text-xl ">service</h2>
          </div>
          <div className="w-full line-header" />
        </div>
        {/*card service*/}
        <div className="grid  grid-cols-1 gap-4 pt-5 	w-full xl:grid-cols-4 ">
        {cardsData.map((card, index) => (
        <CardService
          key={index}
          icon={card.icon}
          title={card.title}
          price={card.price}
          
        />
      ))}
          
        </div>
        <h3 className="mt-5 pt-32 mb-10 text-xl">
          บริการปรึกษาฟรี ไม่มีค่าใช้จ่าย
        </h3>
        <a href="#contact">
          <button
            type="button"
            data-aos="fade-down"
            className="btn btn-outline text-lg"
          >
            ปรึกษาเลย!
          </button>
        </a>
      </section>
    </>
  );
}

export default Service;
