import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
    const path = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
    <div className={path === "/"? "" : "bg-[#F0F4FF]"}>
    <div className="lg:py-8 py-4 box flex justify-between">
      <div className="">
        <Image
          src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686648026/pikaboo/Group_26_2_cq9sv4.png"
          alt="logo"
          width={200}
          height={100}
          className="w-24 lg:w-36"
        />
      </div>
      <div className="hidden lg:flex fw-600 gap-x-8 items-center">
        <div>
          <ul className="flex gap-x-5 fw-600">
            <li>
              <Link href='/' className={`${path === "/" ? "text-primary" : ""} fw-600 px-5 pb-1`}>Home</Link>
            </li>
            <li>
              <Link href='/about' className={`${path === "/about" ? "text-primary" : ""} fw-600 px-5 pb-1 `}>About Us</Link>
            </li>
            <li>
              <Link href='/contact' className={`${path === "/contact" ? "text-primary" : ""} fw-600 px-5 pb-1`}>Contact Us</Link>
            </li>
            <li>
              <Link href='/faqs' className={`${path === "/faqs" ? "text-primary" : ""} fw-600 px-5 pb-1 `}>FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="pl-5">
          <Link href='https://pikaboo-admin.vercel.app/' className="btn-primary py-2 px-6">Sign in</Link>
        </div>
      </div>
      <div className="lg:hidden">
          <HiMenuAlt3 className='text-2xl' onClick={() => setMobileMenu(!mobileMenu)}/>
      </div>
    </div>
    </div>
    {mobileMenu && (
      <div
        className="fixed top-0 h-screen z-[1000] bg-modal w-full "
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <div className="bg-white relative menu-pop h-full text-black pl-5 pt-8 w-[75%]">
          <div className="mb-16">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1686648026/pikaboo/Group_26_2_cq9sv4.png"
              alt="logo"
              width={100}
              height={80}
              className="w-36 lg:w-44"
            />
          </div>
          <div>
            <ul className="text-xl">
            <li className="">
                <Link href="/" className="flex items-center gap-x-2">
                  Home
                </Link>
              </li>
              <li className="mt-8">
                <Link href="/about" className="flex items-center gap-x-2">
                  About
                </Link>
              </li>
              <li className=" mt-8">
                <Link href="/faqs" className="flex items-center gap-x-2">
                  FAQs
                </Link>
              </li>
              <li className=" mt-8">
                <Link href="/contact" className="flex items-center gap-x-2">
                  Contact Us
                </Link>
              </li>
              <li className=" mt-8">
                <Link href="/" className="flex items-center gap-x-2">
                 Privacy & Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default Header