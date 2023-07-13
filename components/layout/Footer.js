import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#FBFAF9]">
        <div className="box">
          <div className="pt-12 pb-6">
            <div>
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687429795/pikaboo/Group_48061_m4vob9.png"
                alt="logo"
                width={200}
                height={100}
                className="w-28 lg:w-44"
              />
              <p className="text-primary fw-500 mt-4">Visit Help Center</p>
            </div>
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-5 gap-12">
              <div>
                <p className="fs-700 fw-600 mb-6">Company</p>
                <ul className="text-gray-500 fs-500 ">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="/faqs">FAQs</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="fs-700 fw-600 mb-6">Accounts</p>
                <ul className="text-gray-500 fs-500">
                  <li className="mt-3">
                    <Link href="https://pikaboo.netlify.app/">Fleet Manager</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="https://pikaboo.netlify.app/">Field Operators</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="https://pikaboo.netlify.app/">Waste Managers</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="fs-700 fw-600 mb-6">Socials</p>
                <ul className="text-gray-500 fs-500">
                  <li>
                    <Link href="/">Facebook</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="/">Linkdln</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="/">Instagram</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="/">Twitter</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="fs-700 fw-600 mb-6">Legal</p>
                <ul className="text-gray-500 fs-500">
                  <li>
                    <Link href="/privacy">Privacy Policy</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="/terms">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="fs-700 fw-600 mb-6">Contact</p>
                <ul className="text-gray-500 ">
                  <li>+234901000000</li>
                  <li className="mt-3">+234902000000</li>
                  <li className="mt-3">email@pikaboo.com</li>
                  <li className="mt-3">help@pikaboo.com</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 border-t">
                <p className="text-center pt-8 text-gray-500">Copyright © 2023 PIKABOO. All Rights Reserved</p>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
