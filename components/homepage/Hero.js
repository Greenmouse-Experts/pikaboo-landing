import Image from "next/image";
import React from "react";

const HeroPage = () => {
  return (
    <>
      <div className="bg-[#F0F4FF]">
        <div className="box">
          <div className="lg:flex items-center gap-x-12 gap-y-6 py-6 lg:pb-12 flex-row-reverse">
            <div className="lg:w-6/12 lg:flex justify-end">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687181087/pikaboo/Group_46819_1_1_cjc1dl.png"
                alt="logo"
                width={900}
                height={900}
                className="w-full lg:w-10/12"
              />
            </div>
            <div className="lg:w-6/12">
              <p className="fw-600 text-3xl lg:text-[40px] text-center lg:text-left">
                Easy way to <span className="lg:block fw-600 text-3xl lg:text-[40px] mt-4">get rid of your garbage</span>
              </p>
              <p className="mt-6 lg:mt-12 fw-500 text-center lg:text-left">
                Download the Pika Boo app today and experience seeamless and
                stress free solution to all your garbage problems.
              </p>
              <div className="flex justify-center lg:justify-start mt-12 gap-x-8">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687180750/pikaboo/Group_46781_xqkjsd.png"
                  alt="logo"
                  width={200}
                  height={130}
                  className="w-28 h-10 lg:h-auto lg:w-36"
                />
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687180749/pikaboo/Group_46782_wufnu9.png"
                  alt="logo"
                  width={200}
                  height={130}
                  className="w-28 h-10 lg:h-auto lg:w-36"
                />
              </div>
              <div className="mt-10">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687180749/pikaboo/Group_46783_oozxlt.png"
                  alt="logo"
                  width={200}
                  height={130}
                  className="w-16 lg:w-32 mx-auto lg:m-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
