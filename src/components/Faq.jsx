/* eslint-disable react/prop-types */
import { useState } from "react";
const Faq = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <div className="text-gray-200">
          <div className="border border-gray-500 w-11/12 max-w-3xl mx-auto my-5 rounded-lg">
            <button
              onClick={() => setIsOpen((prevState) => !prevState)}
              className="w-full text-left px-4 py-4 font-semibold text-lg flex justify-between"
            >
              <span>{title}</span>
              <span className="text-xl">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && (
              <div className="content px-4 py-4 text-gray-300">{content}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
