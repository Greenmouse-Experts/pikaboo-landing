import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { BiMinus, BiPlus } from "react-icons/bi";

const FaqSection = () => {
  const data = [
    {
      title: "Where is the head office located",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla minus assumenda maiores natus? Deleniti odit, iure ipsa, repudiandae temporibus enim impedit labore quis esse vitae, nam beatae iusto voluptatum necessitatibus!",
    },
    {
      title: "Is the company a registered entity?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla minus assumenda maiores natus? Deleniti odit, iure ipsa, repudiandae temporibus enim impedit labore quis esse vitae, nam beatae iusto voluptatum necessitatibus!",
    },
    {
      title: "What is the Eligible Age?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla minus assumenda maiores natus? Deleniti odit, iure ipsa, repudiandae temporibus enim impedit labore quis esse vitae, nam beatae iusto voluptatum necessitatibus!",
    },
    {
      title: "Can I order outside edo state?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla minus assumenda maiores natus? Deleniti odit, iure ipsa, repudiandae temporibus enim impedit labore quis esse vitae, nam beatae iusto voluptatum necessitatibus!",
    },
    {
      title: "How do I ask for waste pickup?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla minus assumenda maiores natus? Deleniti odit, iure ipsa, repudiandae temporibus enim impedit labore quis esse vitae, nam beatae iusto voluptatum necessitatibus!",
    },
  ];
  return (
    <>
      <div className="section">
        <div className="box">
          <div className="">
            <p className="text-center text-2xl lg:text-4xl fw-600">FAQs</p>
            <p className="mt-4 fw-500 text-center">
              Frequently Asked Questions
            </p>
            <div className="mt-12 w-11/12 lg:w-9/12 border-b mx-auto">
              <Accordion>
                {data.map((item, index) => (
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
          <div className="lg:mt-24 mt-12 text-center">
            <Link href='/' className='btn-primary px-6 py-2 fw-500 text-lg'>See More FAQs</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
