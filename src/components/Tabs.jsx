import { useState } from "react";
import Accordion from "./Accordion";

import accordion2 from "../assets/accordian2.jpg";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const tabs = [
    {
      id: "tab1",
      title: "Team Scheduling",
      content: [
        {
          title: "Factor in outside colleagues",
          content:
            "Factor in availability for required attendees, and skip checking for conflicts for optional attendees.",
        },
        {
          title: "Combine teammate schedules",
          content:
            "Factor in availability for required attendees, and skip checking for conflicts for optional attendees.",
        },
        {
          title: "Round robin pooling",
          content:
            "Factor in availability for required attendees, and skip checking for conflicts for optional attendees.",
        },
      ],
    },
    {
      id: "tab2",
      title: "Embedding",
      content: [
        {
          title: "Combine teammate schedules",
          content:
            "Factor in availability for required attendees, and skip checking for conflicts for optional attendees.",
        },
        {
          title: "Round robin pooling",
          content:
            "Factor in availability for required attendees, and skip checking for conflicts for optional attendees.",
        },
        {
          title: "Factor in outside colleagues",
          content:
            "Factor in availability for required attendees, and skip checking for conflicts for optional attendees.",
        },
      ],
    },
    {
      id: "tab3",
      title: "Workflows",
      content: [
        {
          title: "Round robin pooling",
          content:
            "Factor in availability for required attendees, and skip checking for conflicts for optional attendees.",
        },
        {
          title: "Factor in outside colleagues",
          content:
            "Factor in availability for required attendees, and skip checking for conflicts for optional attendees.",
        },
        {
          title: "Combine teammate schedules",
          content:
            "Factor in availability for required attendees, and skip checking for conflicts for optional attendees.",
        },
      ],
    },
  ];
  return (
    <>
      <div>
        <div>
          <div className="tabs-container p-5">
            {/**Tab Headers */}
            <div className="tabs flex justify-center pb-2 ">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? "text-primary border-gray-500 border-t-2 md:text-xl border-t-primary text-lg"
                      : "text-gray-500"
                  } py-2 font-semibold focus:outline-none md:my-16 my-5 md:px-20 border border-b-0 border-gray-600 px-5 md:text-xl`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className="lg:grid lg:grid-cols-2 lg:justify-between lg:items-start">
              {/**the accordion image */}
              <div className="w-full lg:px-10">
                <img src={accordion2} className="border my-10 w-full mx-auto" />
              </div>

              {/**Tab Content with Accordions */}
              <div className="tab-content mt-4 space-y-6 lg:pl-10 lg:mt-20">
                <side className="text-4xl font-semibold">
                  Defend your focus
                </side>
                {tabs.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <div key={tab.id} className="content space-y-2">
                        {tab.content.map((accordion, index) => (
                          <Accordion
                            key={index}
                            title={accordion.title}
                            content={accordion.content}
                          />
                        ))}
                      </div>
                    )
                )}
                <button className="p-3 rounded-lg bg-secondary duration-200 hover:bg-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
