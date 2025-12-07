import React from "react";
import bookingImg from "../assets/bookingIcon.png";
const WorksCards = () => {
  return (
    <div className="w-full">
      <h1 className="text-[#03373D] mb-5 font-bold text-2xl text-center">
        How it Works
      </h1>

      {/* Container */}
      <div className="w-full flex justify-center">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl">
          <div className="bg-white rounded-xl p-5 text-center">
            <img src={bookingImg} alt="" className="mx-auto" />
            <p className="text-[#03373D] font-bold mt-2">Booking Pick & Drop</p>
            <p className="text-[#606060]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center">
            <img src={bookingImg} alt="" className="mx-auto" />
            <p className="text-[#03373D] font-bold mt-2">Cash On Delivery</p>
            <p className="text-[#606060]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center">
            <img src={bookingImg} alt="" className="mx-auto" />
            <p className="text-[#03373D] font-bold mt-2">Delivery Hub</p>
            <p className="text-[#606060]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center">
            <img src={bookingImg} alt="" className="mx-auto" />
            <p className="text-[#03373D] font-bold mt-2">
              Booking SME & Corporate
            </p>
            <p className="text-[#606060]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksCards;
