import {
  Accordion,
  AccordionBody,
  AccordionHeader
} from "@material-tailwind/react";
import { useState } from "react";

const AccordionDiv = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <div className="font-bold underline text-2xl w-11/12 mx-auto mt-10">
        <h1>Frequently Asked Questions About Daraz Affiliate Program</h1>
      </div>
      <div className="w-10/12 mx-auto mt-5">
        <Accordion open={open === 1} onClick={() => handleOpen(1)} className="">
          <AccordionHeader className="text-2xl text-accent border-b-0 ">
            What is Daraz affiliate program?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            Daraz affiliate program is a splendid chance for everyone to earn
            money online by promoting and selling products that already in Daraz
            online shop.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} onClick={() => handleOpen(2)}>
          <AccordionHeader className="text-2xl text-accent border-b-0 ">
            What is the Daraz affiliate commission rate?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            Daraz affiliate commission rate is up to 12% that can help you earn
            money online easily.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} onClick={() => handleOpen(3)}>
          <AccordionHeader className="text-2xl text-accent border-b-0 ">
            Why Daraz affiliate marketing is the best in Bangladesh?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            As Daraz is the biggest online shop in Bangladesh, they have the
            largest assortment, reliable service and warranty that makes Daraz
            affiliate marketing is the best in the country.
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
};
export default AccordionDiv;
