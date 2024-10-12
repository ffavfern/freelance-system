import React from "react";


export default function CardService({ icon, title, price }) {
  return (
    <>
      <a href className="card-service">
        <div className="card card-compact bg-base-100 w-full shadow-xl">
          <figure><img src={icon} alt={title} /></figure>
          <div className="card-body">
            <h2 className="card-title ">{title}</h2>
            <p>เริ่มต้น{price}.-</p>
          </div>
        </div>
      </a>
    </>
  );
}
