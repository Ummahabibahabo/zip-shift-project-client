import React, { useEffect, useState } from "react";
import serviceImg from "../assets/banner/service.png";
const ServiceCard = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
      });
  }, []);
  return (
    <div className="bg-[#03464D]  rounded-xl mt-10">
      <h1 className="text-white text-center font-extrabold text-2xl p-10">
        Our Services
      </h1>
      <p className="text-white text-center max-w-2xl mx-auto text-sm">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
        {card.map((singleCard, index) => (
          <div
            key={index}
            className="bg-white hover:bg-[#CAEB66] text-center rounded-2xl p-10"
          >
            <img className="mx-auto" src={serviceImg} alt="" />
            <h1 className="mt-5 mb-5 text-[#03373D] text-2xl font-bold">
              {singleCard.title}
            </h1>
            <p className="text-[#606060] text-sm mb-5">
              {singleCard.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
