import Image from "next/image";
import Link from "next/link";
import React from "react";

const AdvertSection = () => {
  return (
    <>
      <div className="box">
        <div className="section">
          <div className="lg:h-[450px] p-6 lg:pb-0 lg:pt-10 lg:px-10 bg-primary rounded-[20px] w-full lg:flex items-center  overflow-hidden">
            <div className="lg:w-6/12 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1694079610/pikaboo/playstore_et3yga.png"
                alt="video"
                width={400}
                height={600}
                className="lg:w-8/12 mx-auto"
              />
            </div>
            <div className="lg:w-6/12 mt-3 lg:mt-0">
              <p className="text-2xl lg:text-5xl fw-600 text-white">Managing your waste with Pikaboo is just a click away</p>
              <p className="text-white mt-3 fw-500">
                Download the Pikaboo app on your phone and get started in
                minutes.{" "}
              </p>
              <div className="flex mt-12 gap-x-8">
                <a href={'https://play.google.com/store/apps/details?id=com.pikaboo.app'} target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687180750/pikaboo/Group_46781_xqkjsd.png"
                  alt="logo"
                  width={200}
                  height={130}
                  className="w-28 h-10 lg:h-auto lg:w-36"
                />
                </a>
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687180749/pikaboo/Group_46782_wufnu9.png"
                  alt="logo"
                  width={200}
                  height={130}
                  className="w-28 h-10 lg:h-auto lg:w-36"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvertSection;
