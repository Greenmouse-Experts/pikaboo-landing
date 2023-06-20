import React from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import MapComponent from "@/components/contact/Map";

const ContactPage = () => {
  return (
    <>
      <Layout>
        <div>
          <div className="bg-[#F0F4FF]">
            <div className="box">
              <div className="py-6 lg:py-0">
                <div className="flex items-center flex-row-reverse">
                  <div className="w-6/12">
                    <Image
                      src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687266125/pikaboo/Group_48030_2_xef5th.png"
                      alt="about"
                      width={800}
                      height={500}
                      className="w-11/12  mx-auto"
                    />
                  </div>
                  <div className="w-6/12">
                    <p className="text-2xl lg:text-4xl fw-600">
                      Reach out to PikaBoo
                    </p>
                    <p className="fw-500 mt-6">
                      Got a problem? Contact us via the mediums provide below
                      and we will get back to you with solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="section">
              <div className="grid md:grid-cols-3 gap-10">
                <div className="bg-[#9AD3CC] relative p-4 lg:p-8">
                  <div className="pt-10">
                    <p className="fw-500 mb-3">Contact Us</p>
                    <p className="fs-500">
                      No 14 Pikaboo address, Edo state. Nigeria
                    </p>
                  </div>
                  <Image
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687266896/pikaboo/Group_46845_a26vjt.png"
                    alt="contact"
                    width={150}
                    height={150}
                    className="absolute top-3 right-0 w-16 lg:w-24"
                  />
                </div>
                <div className="bg-[#EEEDEA] relative p-4 lg:p-8">
                  <div className="pt-10">
                    <p className="fw-500 mb-3">Call Us</p>
                    <p className="fs-500">07012345678</p>
                    <p className="fs-500">08012345678</p>
                  </div>
                  <Image
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687267267/pikaboo/Group_46846_obiocf.png"
                    alt="call"
                    width={150}
                    height={150}
                    className="absolute top-3 right-0 w-16 lg:w-24"
                  />
                </div>
                <div className="bg-[#E8CAA2] relative p-4 lg:p-8">
                  <div className="pt-10">
                    <p className="fw-500 mb-3">Mail Us</p>
                    <p className="fs-500">help@pikaboo.com</p>
                    <p className="fs-500">info@pikaboo.com</p>
                  </div>
                  <Image
                    src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687267268/pikaboo/Group_46847_arbqx4.png"
                    alt="call"
                    width={150}
                    height={150}
                    className="absolute top-3 right-0 w-16 lg:w-24"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="box py-12">
            <div>
                <p className="text-xl lg:text-3xl text-center fw-600">Send Us a message</p>
                <p className="lg:w-6/12 mx-auto fs-500 fw-500 text-center mt-4">To learn more about Pikaboo and for further assistance, please fill in the form below.</p>
                <div className="mt-6 lg:mt-12">
                    <form>
                        <div className="grid lg:grid-cols-2 lg:gap-x-12 gap-6">
                            <div>
                                <label>First Name</label>
                                <input type="text" placeholder="Enter first name" className="p-2 border mt-2 border-gray-600 rounded w-full"/>
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input type="text" placeholder="Enter last name" className="p-2 border mt-2 border-gray-600 rounded w-full"/>
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input type="tel" placeholder="Enter mobile number" className="p-2 border mt-2 border-gray-600 rounded w-full"/>
                            </div>
                            <div>
                                <label>Your Email</label>
                                <input type="email" placeholder="Enter email address" className="p-2 border mt-2 border-gray-600 rounded w-full"/>
                            </div>
                        </div>
                        <div className="mt-6">
                            <label>Your Message</label>
                            <textarea className="p-2 border mt-2 border-gray-600 rounded w-full h-24"/>
                        </div>
                        <div className="mt-8">
                            <button className="btn-primary px-6 py-2">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
          </div>
          <div className="mb-24">
          <div className="box h-[400px] rounded-lg overflow-hidden">
            <MapComponent/>
          </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ContactPage;
