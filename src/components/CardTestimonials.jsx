import React from "react";

export default function CardTestimonials({ image, name, message, rating }) {
  return (
    <>
      <div className="carousel-item h-full">
        <div className="card card-side bg-base-100 shadow-xl mb-10">
          <figure>
            <img
              src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-1/451436790_8054387451344582_2637880672212444516_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=aasF-Iqqj80Q7kNvgEmyKJk&_nc_ht=scontent.fbkk5-4.fna&_nc_gid=ARAn1lQBP0ofbVMeDXS8oQu&oh=00_AYCxw_OmCionQudYgQty_PwpOqfWd9WnKCPGqWM7fGgXpA&oe=670FE347"
              alt="profile customer 1"
              className=" w-full h-full"
            />
          </figure>
          <div className="card-body">
            <div className="flex">
              
              {[...Array(rating)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-6 h-6 ${
                    index < rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.25l2.574 6.751 7.239.584-5.476 4.87 1.673 6.545-5.01-3.472-5.01 3.472 1.673-6.545-5.476-4.87 7.239-.584L12 2.25z" />
                </svg>
              ))}
            </div>
            <h2 className="card-title">{message}</h2>
            <p>@{name}</p>
          </div>
        </div>
      </div>
    </>
  );
}
