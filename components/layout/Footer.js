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
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686648026/pikaboo/Group_26_2_cq9sv4.png"
                alt="logo"
                width={200}
                height={100}
                className="w-24 lg:w-36"
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
                    <Link href="/">About Us</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="/">Contact Us</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="/">FAQs</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="fs-700 fw-600 mb-6">Accounts</p>
                <ul className="text-gray-500 fs-500">
                  <li>
                    <Link href="/">Household Owners</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="/">Service Operators</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="/">Fleet Manager</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="/">Field Operators</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="/">Waste Managers</Link>
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
                    <Link href="/">Privacy Policy</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="/">Terms & Conditions</Link>
                  </li>
                  <li className="mt-3">
                    <Link href="/">Cookies</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="fs-700 fw-600 mb-6">Contact</p>
                <ul className="text-gray-500 ">
                  <li>+234900000000</li>
                  <li className="mt-3">+234900000000</li>
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
