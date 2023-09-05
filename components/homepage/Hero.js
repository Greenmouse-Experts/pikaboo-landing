import React from "react";
import Image from "next/image";

const HeroPage = () => {
  return (
    <>
      <div className="">
        <div className="box">
          <div className="bg-[#F0F4FF] lg:my-12 mb-12 xl:mb-24 lg:h-[440px] lg:flex items-center gap-x-12 py-6 lg:py-0 rounded-[20px] flex-row-reverse">
            <div className="lg:w-6/12 lg:h-full relative lg:flex ">
              {/* <div className="lg:h-[490px] w-full lg:relative -top-12 ">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687353738/pikaboo/Group_0_ikp3ob.png"
                alt="logo"
                width={900}
                height={800}
                className="w-full mob"
              />
              </div> */}
              <Image
                src={
                  "https://res.cloudinary.com/greenmouse-tech/image/upload/v1693926225/pikaboo/Group_48086_1_cnklnb.png"
                }
                alt="logo"
                width={900}
                height={800}
                className="w-full"
              />
            </div>
            <div className="lg:w-7/12 lg:p-12 mt-6 lg:mt-0 px-3">
              <p className="fw-600 text-primary text-3xl lg:text-4xl text-center lg:text-left">
                Quick and Easy way to{" "}
                <span className="lg:block fw-600 text-3xl lg:text-4xl mt-2">
                  get rid of your garbage
                </span>
              </p>
              <p className="mt-4 lg:mt-7 fw-500 text-center lg:text-left">
                Subscribe to PikaBoo for a seamless and more efficient waste
                removal experience.
              </p>
              <div className="flex justify-center lg:justify-start mt-7 gap-x-8">
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
              <div className="mt-7">
                <Image
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687180749/pikaboo/Group_46783_oozxlt.png"
                  alt="logo"
                  width={200}
                  height={130}
                  className="w-24 lg:w-32 mx-auto lg:m-0"
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
