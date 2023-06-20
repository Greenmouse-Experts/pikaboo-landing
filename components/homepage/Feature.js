import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureSection = () => {
  return (
    <>
      <div className="section bg-[#D8EFEF]">
        <div className="box">
          <div className="lg:flex items-center gap-x-6">
            <div className="lg:w-7/12">
              <p className="text-primary text-xl lg:text-4xl fw-600">
                Features of the App
              </p>
              <p className="mt-6 fs-500 fw-500 lg:fs-700">
                Enabling a more efficient management of evacuation resources for
                maximum impact on the field.
              </p>
              <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-12">
                <div className="">
                  <div className="bg-[#F0F4FF] circle w-16 h-16 grid place-content-center">
                    <Image
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687186420/pikaboo/Rectangle_19494_tofwxz.png"
                      alt="logo"
                      width={80}
                      height={80}
                      className="w-8"
                    />
                  </div>
                  <p className="fw-600 mt-6">Home Resident</p>
                  <p className="mt-4">
                    Get your resident database subscribed by a field operator
                    and order for waste pickup in the comfort of your home.
                  </p>
                </div>
                <div className="">
                  <div className="bg-[#F0F4FF] circle w-16 h-16 grid place-content-center">
                    <Image
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687186421/pikaboo/Rectangle_19495_wevl2a.png"
                      alt="logo"
                      width={80}
                      height={80}
                      className="w-8"
                    />
                  </div>
                  <p className="fw-600 mt-6">Servicemen</p>
                  <p className="mt-4">
                    Enroll yourself as a seviceman by a waste manager and earn
                    while you render waste pickup services.
                  </p>
                </div>
                <div className="">
                  <div className="bg-[#F0F4FF] circle w-16 h-16 grid place-content-center">
                    <Image
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687186424/pikaboo/Rectangle_19496_tlahwq.png"
                      alt="logo"
                      width={80}
                      height={80}
                      className="w-8"
                    />
                  </div>
                  <p className="fw-600 mt-6">Requests and Pick-up</p>
                  <p className="mt-4">
                    Pika Boo mobile application is open to only just Home
                    resident and Servicemen, to place requests and render pickup
                    service respectifully.
                  </p>
                </div>
                <div className="">
                  <div className="bg-[#F0F4FF] circle w-16 h-16 grid place-content-center">
                    <Image
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687186420/pikaboo/Rectangle_19494_tofwxz.png"
                      alt="logo"
                      width={80}
                      height={80}
                      className="w-8"
                    />
                  </div>
                  <p className="fw-600 mt-6">In-app Sales</p>
                  <p className="mt-4">
                    Ability to purchase and pay for waste bins and containers is
                    made available in-app.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-5/12 mt-12 lg:mt-0">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687187357/pikaboo/Group_46789_ltvmoq.png"
                alt="video"
                width={400}
                height={400}
                className="w-full lg:mt-24"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pattern h-[250px]">
        <div className="box h-full">
            <div className="h-full lg:flex items-center justify-between">
                <p className="text-white pt-8 lg:pt-0  lg:w-8/12">This Application is available to Waste Management jurisdictions for a small fee for deployment in local areas to facilitate clean up purposed.</p>
                <p className="w-48 mt-6 lg:mt-0 lg:w-auto text-center px-8 rounded-[30px] lg:px-12 lg:py-4 py-3 border text-white"><Link href='/'>Contact Us</Link></p>
            </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
