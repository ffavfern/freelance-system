import React from "react";
import Card from "../CardTestimonials";
import Customer1 from "../../assets/img/k.aom.jpg";
import Customer2 from "../../assets/img/adirek.png";

function Testimonials() {
  const commentsData = [
    {
      name: "คุณออม",
      message: "บริการดี ทำงานเร็ว คุยง่าย",
      rating: 4,
      image: <Customer1 />,
    },
    {
      name: "คุณน็อต",
      message: "บริการดี ทำงานเร็ว คุยง่าย",
      rating: 5,
      image: <Customer2 />,
    },
  ];

  return (
    <>
      <section
        id="testimonials"
        className="flex flex-row justify-center items-center py-5 my-5 pt-40 w-full "
      >
        <h2 className="mb-5 border-l-4 text-xl border-accent-content ps-5 font-bold mb-20 w-1/2	">
          ประสบการ์จากหลายคน
        </h2>
        <div className="carousel carousel-vertical rounded-box h-96 w-1/2 p-10">
          {commentsData.map((comment, index) => (
            <Card
              key={index}
              name={comment.name}
              message={comment.message}
              image={comment.image}
              rating={comment.rating}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Testimonials;
