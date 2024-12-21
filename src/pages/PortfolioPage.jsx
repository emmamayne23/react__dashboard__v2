import { useState } from "react";

import TopCard from "../components/TopCard";
import Card from "../components/Card";

import s1 from "../assets/images/s1.jpg";
import s2 from "../assets/images/s2.jpg";
import s3 from "../assets/images/s3.jpg";
import s4 from "../assets/images/s4.jpg";
import s5 from "../assets/images/s5.jpg";
import s6 from "../assets/images/s6.jpg";
import s7 from "../assets/images/s7.jpg";
import s8 from "../assets/images/s8.jpg";
import s9 from "../assets/images/s9.jpg";
import s10 from "../assets/images/s10.jpg";
import s11 from "../assets/images/s11.jpg";
import s12 from "../assets/images/s12.jpg";

const PortfolioPage = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Co wugi.jpg",
      image: `${s1}`,
      date: "Thu, Dec",
    },
    {
      id: 2,
      title: "Rup fetezgu abapo.jpg",
      image: `${s2}`,
      date: "Thu, Dec",
    },
    {
      id: 3,
      title: "Fakerok batoko lu.jpg",
      image: `${s3}`,
      date: "Thu, Dec",
    },
    {
      id: 4,
      title: "Hugfarrit rehafo iperipmev.jpg",
      image: `${s4}`,
      date: "Thu, Dec",
    },
    {
      id: 5,
      title: "Ulkov huahuozi pepvorar.jpg",
      image: `${s5}`,
      date: "Thu, Dec",
    },
    {
      id: 6,
      title: "Osawof kuazmaj sa.jpg",
      image: `${s6}`,
      date: "Thu, Dec",
    },
    {
      id: 7,
      title: "Jahzaido tid emiujete.jpg",
      image: `${s7}`,
      date: "Thu, Dec",
    },
    {
      id: 8,
      title: "Jo ziomimu pejlidil.jpg",
      image: `${s8}`,
      date: "Thu, Dec",
    },
    {
      id: 9,
      title: "Inehuwan hesla leopeso.jpg",
      image: `${s9}`,
      date: "Thu, Dec",
    },
    {
      id: 10,
      title: "Sis nuepi ikusim.jpg",
      image: `${s10}`,
      date: "Thu, Dec",
    },
    {
      id: 11,
      title: "Naanra cegliot lizu.jpg",
      image: `${s11}`,
      date: "Thu, Dec",
    },
    {
      id: 12,
      title: "Bo lirupvuh ako.jpg",
      image: `${s12}`,
      date: "Thu, Dec",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredImage = galleryImages.filter((galleryImage) =>
    galleryImage.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="mt-16">
        <div>
          <TopCard />
        </div>
        <div>
          <div className="flex justify-between items-center gap-3 p-10">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-xl">Gallery</p>
              <span className="rounded-full py-1 px-2 text-sm font-semibold bg-primary">
                {galleryImages.length}
              </span>
            </div>
            <div className="border rounded-lg py-1 flex items-center">
              <i className="fa-solid fa-magnifying-glass mx-3"></i>
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent focus:outline-none w-32"
                placeholder="Search Gallery"
              />
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3">
            {filteredImage.map((galleryImage) => (
              <div
                key={galleryImage.id}
                className="border border-gray-600 w-11/12 mx-auto rounded-lg my-4 hover:scale-105 duration-300"
              >
                <img
                  src={galleryImage.image}
                  className="rounded-t-lg h-60 w-full object-cover "
                />
                <div className="px-7 py-3 text-sm">
                  <div>{galleryImage.title}</div>
                  <div>{new Date().toDateString()}</div>
                  {new Date().toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-10">
          <Card />
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
