import Image from "next/image";
import React from "react";

const OverviewSection = () => {
  return (
    <>
      <div className="section">
        <div className="box">
          <div className="flex items-center">
            <div className="lg:w-6/12">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687180761/pikaboo/Group_46820_yrf09f.png"
                alt="logo"
                width={800}
                height={800}
                className="w-10/12 lg:w-9/12 mx-auto"
              />
            </div>
            <div className="lg:w-6/12">
              <p className="fw-500 text-primary">Overview</p>
              <p className="text-xl lg:text-4xl fw-600">
                About <span className="text-primary text-xl lg:text-4xl">Pikaboo</span>
              </p>
              <p className="mt-6 lg:mt-12 fs-500">
                Pika Boo App brings you in total control of your waste
                management experience from registering for waste pick up
                services to applying and purchasing a waste bin to receiving
                scheduled pick-ups and making personalized pick-up request from
                anywhere in the world from where you might be.
              </p>
              <div className="grid grid-cols-2 gap-y-8 mt-12">
                <div className="flex items-center gap-x-4">
                <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687180748/pikaboo/Rectangle_19486_q89iwf.png"
                alt="logo"
                width={80}
                height={80}
                className="w-6"
              />
              <p className="fs-500 fw-500">Secured services</p>
                </div>
                <div className="flex items-center gap-x-4">
                <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687180750/pikaboo/Rectangle_19487_uhgo2g.png"
                alt="logo"
                width={80}
                height={80}
                className="w-6"
              />
              <p className="fs-500 fw-500">In-app Sales</p>
                </div>
                <div className="flex items-center gap-x-4">
                <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687180751/pikaboo/Rectangle_19488_ytxkp5.png"
                alt="logo"
                width={80}
                height={80}
                className="w-6"
              />
              <p className="fs-500 fw-500">In-app Voice Call</p>
                </div>
                <div className="flex items-center gap-x-4">
                <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687180751/pikaboo/Rectangle_19489_eeuzgi.png"
                alt="logo"
                width={80}
                height={80}
                className="w-6"
              />
              <p className="fs-500 fw-500">Government Approved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewSection;
