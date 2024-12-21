import user1 from "../assets/user-1.jpg"
import user2 from "../assets/image1.png"
import user3 from "../assets/image2.png"
import user4 from "../assets/image3.png"
import user5 from "../assets/user-5.jpg"

import { useState } from "react";

const feedbacks = [
  {
    id: 1,
    name: "John Doe",
    feedback: "This platform revolutionized our workflow. It's fast, intuitive, and reliable.",
    image: `${user1}`,
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "The support team is outstanding. They helped us set everything up in no time!",
    image: `${user2}`,
  },
  {
    id: 3,
    name: "Michael Brown",
    feedback: "I love how seamless and scalable the platform is. Highly recommended!",
    image: `${user3}`,
  },
  {
    id: 4,
    name: "Sarah Johnson",
    feedback: "Their tools boosted our team's productivity. We can't imagine working without them.",
    image: `${user4}`,
  },
  {
    id: 5,
    name: "Chris Lee",
    feedback: "Superb UI and great functionality. It’s a must-have for any growing business.",
    image: `${user5}`,
  },
];

function Feedbacks() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gray-800 text-white md:items-center py-16 px-6 lg:grid lg:grid-cols-2">
      <div className=" md:mx-10">
        <h2 className="text-3xl font-bold mb-8 ">What Our Users Say</h2>
        <p className="my-5 tracking-wide">Our users&apos; feedback is a testament to our <br />commitment to quality and user satisfaction.<br /> Read what they have to say about their journey with us.</p>
      </div>

      <div className="relative max-w-4xl mx-auto lg:mx-20 lg:py-10 border py-5 px-3 rounded-lg border-gray-600">
        <div className="flex items-center gap-10 justify-between">
          <button
            onClick={handlePrev}
            className="border border-gray-400 hover:border-primary p-2 px-3 rounded-full hover:bg-primary duration-300"
          >
            <i className="fas fa-less-than"></i>
          </button>

          <div className="text-center space-y-4">
            <img
              src={feedbacks[currentIndex].image}
              alt={feedbacks[currentIndex].name}
              className="w-12 h-12 rounded-full mx-auto"
            />
            <p className="italic text-gray-300">
              &quot;{feedbacks[currentIndex].feedback}&quot;
            </p>
            <h3 className="text-lg font-semibold">
              - {feedbacks[currentIndex].name}
            </h3>
          </div>

          <button
            onClick={handleNext}
            className="border border-gray-400 p-2 px-3 rounded-full hover:bg-primary hover:border-primary duration-300"
          >
            <i className="fas fa-greater-than"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Feedbacks;
