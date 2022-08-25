import React from "react";
import { Link } from "react-router-dom";
const CustomerServicesSidebar = () => {
  return (
    <div className="border border-neutral rounded-md shadow-sm">
      <h1 className="border-b text-center border-neutral py-2 text-xl flex justify-left pl-4 items-center space-x-3 text-accent cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-primary"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        All Help Topic
      </h1>
      <ul className="p-4 ">
        <h1 className="text-2xl font-medium my-3">Legal Policies</h1>
        <li className="text-sm hover:text-primary transition duration-200 ease-linear cursor-pointer hover:underline mb-2">
          3rd Party Licensing Notice
        </li>
        <Link to="/customer/services">
        
        <li className="text-sm hover:text-primary transition duration-200 ease-linear cursor-pointer hover:underline mb-2">
          Condition of Use
        </li>
        </Link>
       <Link to="/customer/privacy">
       <li className="text-sm hover:text-primary transition duration-200 ease-linear cursor-pointer hover:underline mb-2">
        Amazon.com Privacy Notice
        </li>
        </Link>
        <li className="text-sm hover:text-primary transition duration-200 ease-linear cursor-pointer hover:underline mb-2">
          Amazon Group Companies
        </li>
      </ul>
    </div>
  );
};

export default CustomerServicesSidebar;
