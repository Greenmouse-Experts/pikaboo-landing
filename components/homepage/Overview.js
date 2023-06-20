import Image from "next/image";
import React from "react";

const OverviewSection = () => {
  return (
    <>
      <div className="section bg-[#EEEDEA]">
        <div className="box">
          <div className="lg:flex gap-x-16 items-center">
            <div className="lg:w-6/12 h-[400px] relative">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687264888/pikaboo/Group_48027_bfk7sw.gif"
                alt="logo"
                width={200}
                height={100}
                className="absolute w-24 lg:w-24 shadoo rounded-[25px] top-[15%] left-[0%x]"
              />
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687264888/pikaboo/Group_48024_2_rujfa9.gif"
                alt="logo"
                width={200}
                height={100}
                className="absolute w-24 lg:w-28 shadoo rounded-[25px] bottom-[15%] right-[5%] lg:right-[10%]"
              />
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687264925/pikaboo/Group_48028_1_np68oj.gif"
                alt="logo"
                width={200}
                height={100}
                className="absolute w-28 lg:w-28 shadoo rounded-[25px] bottom-[15%] "
              />
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687264890/pikaboo/Group_48025_egotml.gif"
                alt="logo"
                width={200}
                height={100}
                className="absolute w-28 lg:w-28 shadoo rounded-[25px] top-[12%] right-[8%]"
              />
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687270333/pikaboo/Group_48026_1_br2jl5.gif"
                alt="logo"
                width={200}
                height={100}
                className="absolute w-24 lg:w-28 shadoo rounded-[25px] top-[160px] left-[35%]"
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
