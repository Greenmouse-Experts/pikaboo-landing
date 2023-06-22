import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { BiMinus, BiPlus } from "react-icons/bi";

const FaqSection = ({ header, more }) => {
  const data = [
    {
      title: "Can I use PikaBoo App from anywhere?",
      content:
        "Your local Waste Management Authority has to be subscribed to the use of the App service before you can get signed on.",
    },
    {
      title: "Where is the Head Office located?",
      content:
        "OPIC Plaza, 26, Mobolaji Bank-Anthony Way, Ikeja, Lagos, Nigeria",
    },
    {
      title: "Is the company a registered entity?",
      content:
        "PikaBoo is a registered Software trademark of Highgate Global Resources Limited, a company registered under the Corporate Affairs Commission of Nigeria.",
    },
    {
      title: "Can I earn on the PikaBoo App?",
      content:
        "Yes, you can. You can earn as one of the active service providers in the system either as a Waste Manager or a Driver or Serviceman.",
    },
    {
      title: "What is the eligible age for subscription to the PikaBoo App?",
      content:
        "Users must have attained the age of 18 to be eligible for subscription.",
    },
    {
      title: "How do I get waste pick-up service?",
      content:
        "Waste pick-up services are rendered in two ways: regular scheduled pick-ups to which every paying subscriber is entitled; and special pick-up calls which are available to every subscribed user for a premium above the monthly waste pick-up levy. Special calls are only available to residents who are not indebted to the system as at time of call.",
    },
    {
      title: "How do I fund my Wallet?",
      content:
        "Your wallet can be funded by standard electronic Funds Transfer from any of your existing accounts and your wallet update real-time. ",
    },
    {
      title: "Is there a refund if I lay a complaint?",
      content:
        "PikaBoo does not make decisions on refunds as such decisions are subject to recommendation by law of your local Waste Management Authority.",
    },
    {
      title: "How long before I get my clean-up done in special request call?",
      content:
        "Response to special calls is an uninterrupted process driven by the availability of service personnel within the area of call provided calls are within service hours.",
    },
    {
      title: "What are the Service Hours?",
      content:
        "PikaBoo Service Hours are generally as stipulated by the local Waste Management Authority but usually daylight hours between 0700 and 1700Hours.",
    },
  ];
  return (
    <>
      <div className="section">
        <div className="box">
          <div className="">
            {header && (
              <div>
                <p className="text-center text-2xl lg:text-4xl fw-600">FAQs</p>
                <p className="mt-4 fw-500 text-center">
                  Frequently Asked Questions
                </p>
              </div>
            )}
            <div className="mt-12 w-11/12 lg:w-9/12 border-b mx-auto">
              <Accordion>
                {data.slice(0, more).map((item, index) => (
                  <AccordionItem key={index}>
                    {({ open }) => (
                      <>
                        <AccordionHeader className="w-full border-t py-4 lg:p-4">
                          <div className="w-full flex  justify-between items-center">
                            <p className="fw-500 text-left">{item.title}</p>
                            {open ? <BiMinus /> : <BiPlus />}
                          </div>
                        </AccordionHeader>
                        <AccordionBody>
                          <div className="accordion-body lg:px-3 pb-6 mt-2 text-black">
                            {item.content}
                          </div>
                        </AccordionBody>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          {header && (
            <div className="lg:mt-24 mt-12 text-center">
              <Link href="/faqs" className="btn-primary px-6 py-2 fw-500 text-lg">
                See More FAQs
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FaqSection;
