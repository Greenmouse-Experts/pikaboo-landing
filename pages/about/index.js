import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Layout>
        <div>
          <div className="bg-[#F0F4FF]">
            <div className="box">
              <div className="lg:py-4 py-10">
                <div className="lg:flex items-center flex-row-reverse">
                  <div className="lg:w-6/12">
                    <Image
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1694079839/pikaboo/about_1_rr8dy8.png"
                      alt="about"
                      width={800}
                      height={500}
                      className="w-full  mx-auto"
                    />
                  </div>
                  <div className="lg:w-6/12 pt-6 lg:pt-0">
                    <p className="text-2xl lg:text-4xl fw-600">
                      <span className="lg:block text-2xl lg:text-4xl">
                        Simplifying waste
                      </span>{" "}
                      management and evacuation.
                    </p>
                    <p className="fw-500 mt-6">
                      Speeding up the evacuation process for waste management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="box">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="text-center">
                  <p className="text-2xl lg:text-4xl fw-600">100k+</p>
                  <p className="mt-5 fw-500 lg:fs-700">Home Residents</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl lg:text-4xl fw-600">1500km+</p>
                  <p className="mt-5 fw-500 lg:fs-700">Areas Covered</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl lg:text-4xl fw-600">200+</p>
                  <p className="mt-5 fw-500 lg:fs-700">Waste Trucks</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl lg:text-4xl fw-600">70+</p>
                  <p className="mt-5 fw-500 lg:fs-700">Service Personnel</p>
                </div>
              </div>
            </div>
          </div>
          <div className="section lg:py-6">
            <div className="box">
              <div className="lg:flex items-center flex-row-reverse ">
                <div className="lg:w-5/12 flex justify-end">
                  <Image
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687264057/pikaboo/Group_48022_3_2_1_rsswbo.png"
                    alt="about"
                    width={700}
                    height={700}
                    className="lg:w-full"
                  />
                </div>
                <div className="lg:w-7/12 lg:pr-5 mt-8 lg:mt-0">
                  <p className="fw-600 text-2xl">About this App</p>
                  <p className="mt-6">
                  Pika Boo App brings you in total control of your waste management experience from registering for waste pick up services to applying and purchasing a waste bin to receiving scheduled pick-ups and making personalized pick-up request from anywhere in the world from where you might be.
                  </p>
                  <p className="mt-5">It enables a more efficient management of evacuation resources for maximum impact on the field. It provides a measure of transparency for both residents and service men (or women) who are signed on as customers within the ecosystem. On the one hand it is easy for residents to assess their Waste Manager’s response rate and on the other hand, residents can easily be assessed in terms of their payment obligation to the system.</p>
                  <p className="mt-5 mb-10 ">It speeds up the evacuation process for Waste Managers as it entails the organization of a squad of servicemen to support the clean up process when the full capabilities of the App are unleashed in support of allocated zones. </p>
                  <Link
                    href="/"
                    className="bg-black text-white px-5 py-2 lg:py-3 rounded-lg"
                  >
                    Get the App
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="box">
              <div className="lg:flex items-center">
                <div className="lg:w-6/12">
                  <Image
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687264290/pikaboo/Group_48020_1_1_atwrg1.png"
                    alt="about"
                    width={700}
                    height={700}
                    className="lg:w-8/12"
                  />
                </div>
                <div className="lg:w-6/12 lg:text-end mt-10 lg:mt-0">
                  <p className="fw-600 text-2xl">Use of the App </p>
                  <p className="mt-6 ">
                  The use of the App Pika Boo requires the mandatory generation of a residents’ database to build subscriber lists in organized service blocks by authorized Field Operators.  In terms of household waste evacuation, the entire universe of residents is coordinated centrally with the participation of the Fleet Manager, Field Operators, Waste Managers and servicemen who are all compensated from revenues made from subscriber fees.
                  </p>
                  <p className="mt-5 mb-10">This Application is available to Waste Management jurisdictions for a small fee for deployment in local areas to facilitate clean up purposed.</p>
                  <Link
                    href="/"
                    className="bg-black text-white px-5 py-2 lg:py-3 rounded-lg"
                  >
                    Get the App
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="box">
              <div>
                <p className="text-center lg:w-4/12 mx-auto text-2xl lg:text-4xl fw-600">
                  Get the App for free and Start Now
                </p>
                <p className="lg:w-7/12 mx-auto fw-500 mt-4 text-center">
                  This Application is available to Waste Management
                  jurisdictions for a small fee for deployment in local areas to
                  facilitate clean up purposes.
                </p>
                <div className="flex mt-12 gap-x-8 justify-center">
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
      </Layout>
    </>
  );
};

export default AboutPage;
