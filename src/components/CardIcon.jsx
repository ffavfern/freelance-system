import React from "react";

export default function CardIcon({ icon, title }) {
  return (
    <>
      <div className="  icon-tools flex flex-col items-center	">
        <div className="icon text-5xl">{icon}</div>
        <h6 className="text-lg uppercase">{title}</h6>
      </div>

     
    </>
  );
}
