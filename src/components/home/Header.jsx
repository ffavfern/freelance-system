import React from "react";
import profile from "../../assets/img/profile.png";

function Header() {
  return (
    <>
      <section
        id="header"
        className="flex flex-col justify-center text-center items-center lg:flex-row xl:flex-row xs:pt-40 xl:pt-10 "
      >
        <div className="w-full lg:w-1/2 xl:w-1/2">
          <h1 className="uppercase text-xl mb-2 font-bold	">web developer</h1>
          <h3 className="text-lg mb-10">"ความพอใจของคุณ คือเป้าหมายของเรา"</h3>
          <a href="#showcase" className="btn btn-outline">
            ดูผลงาน
          </a>
        </div>
        <div className="w-full profile xs:pt-10 lg:w-1/2 xl:w-1/2">
          <img src={profile} alt="profile" className="img-fluid " />
        </div>
      </section>
    </>
  );
}

export default Header;
