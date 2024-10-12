import React from "react";
import profile2 from "../../assets/img/profile 2.jpg";
import Tools from"./Tools";

function About() {
  return (
    <>
      <section
        id="about"
        className="flex flex-row  gap-10 justify-center text-center items-center py-5 my-5"
      >
        <div className="w-1/2 flex flex-row justify-center">
          <img
            className="size-1/2  shadow-xl"
            src={profile2}
            alt="profile2"
          />
        </div>
        <div className="w-1/2">
          <h5 className="text-lg italic">
            <span className="italic">"</span> <br />
            สวัสดีค่ะ เฟินเป็น Web Developer มีประสบการณ์มากกว่า 3 ปี <br />
            เชี่ยวชาญทั้งส่วนของ Front-end และ Back-end สำหรับการพัฒนาเว็บไซต์
            ทั้งแบบ Static และ Dynamic โดยเฉพาะ Personal, Portfolio, <br />
            E-commerce, WordPress, React เน้นการทำงานของเว็บไซต์ให้มีประสิทธิภาพ
            ดีไซน์สวยงาม ใช้งานง่าย และตรงตามความต้องการของลูกค้า
            พร้อมให้บริการอย่างมืออาชีพ และรับผิดชอบต่อผลงานทุกชิ้น <br />
            <span>"</span>
          </h5>
        </div>
      </section>
    </>
  );
}

export default About;
