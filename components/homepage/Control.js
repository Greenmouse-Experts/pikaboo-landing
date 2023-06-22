import Image from "next/image";
import React from "react";

const ControlSection = () => {
  return (
    <>
      <div className="section bg-white">
        <div className="box">
          <p className="text-2xl lg:text-4xl fw-600">
            <span className="text-2xl lg:text-4xl fw-600 text-primary">
              Take Control
            </span>{" "}
            of your environment
          </p>
          <p className="mt-6 fs-500 fw-500 w-8/12">
          	PikaBoo brings speed and efficiency to the evacuation process of Waste Management Authorities as municipalities and cities struggle to handle the rising rate of waste generation.
          </p>
          <div className="mt-7 lg:mt-16 grid lg:grid-cols-3 gap-12">
            <div className="relative flex h-[200px] lg:h-[280px] rounded-lg bg-[#9AD3CC] flex items-end p-4 lg:p-12">
              <p className="fw-500">
                Get signed in to preferred user type on the app.
              </p>
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687180765/pikaboo/Group_46777_wsmy6a.png"
                alt="logo"
                width={400}
                height={400}
                className="absolute w-24 lg:w-44 top-0 right-0"
              />
            </div>
            <div className="relative flex h-[200px] lg:h-[280px] rounded-lg bg-[#EEEDEA] flex items-end p-4 lg:p-12">
              <p className="fw-500">
              Request for waste pickup in any location.
              </p>
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687180753/pikaboo/Group_46778_tvh2bn.png"
                alt="logo"
                width={400}
                height={400}
                className="absolute w-24 lg:w-44 top-0 right-0"
              />
            </div>
            <div className="relative flex h-[200px] lg:h-[280px] rounded-lg bg-[#E8CAA2] flex items-end p-4 lg:p-12">
              <p className="fw-500">
              Get paid to pickup waste in your preferred area.
              </p>
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687180764/pikaboo/Group_46779_vkzceb.png"
                alt="logo"
                width={400}
                height={400}
                className="absolute w-24 lg:w-44 top-0 right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlSection;
