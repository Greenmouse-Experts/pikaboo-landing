import Image from "next/image";
import React from "react";

const AdvertSection = () => {
  return (
    <>
      <div className="box">
        <div className="section">
          <div className="h-[450px] p-6 lg:pb-0 lg:pt-10 lg:px-10 bg-primary rounded-[20px] w-full flex items-center  overflow-hidden">
            <div className="w-6/12 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687187357/pikaboo/Rectangle_11_1_bgoftv.png"
                alt="video"
                width={400}
                height={600}
                className="w-8/12 mx-auto"
              />
            </div>
            <div className="w-6/12">
              <p className="text-2xl lg:text-5xl fw-600 text-white">Managing your waste with Pikaboo is just a click away</p>
              <p className="text-white mt-3 fw-500">
                Download the Pikaboo app on your phone and get started in
                minutes.{" "}
              </p>
              <div className="flex mt-12 gap-x-8">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687180750/pikaboo/Group_46781_xqkjsd.png"
                  alt="logo"
                  width={200}
                  height={130}
                  className="w-36"
                />
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687180750/pikaboo/Group_46781_xqkjsd.png"
                  alt="logo"
                  width={200}
                  height={130}
                  className="w-36"
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
