import React, { useState } from "react";
import { CircleHelp, Table } from "lucide-react";

const Description = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["About Me", "Experiences", "Recommended"];
  const tabContent = [
    <>
      <p className="jakarta text-gray-200">
        Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
      </p>
      <p className="mt-3 jakarta text-gray-300">
        I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters — Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM.
      </p>
    </>,
    <p className="jakarta text-gray-300">
      I've worked with multiple enterprise clients, helping them improve sales pipelines by implementing custom Salesforce CRM solutions.
    </p>,
    <p className="jakarta text-gray-300">
      “Dave has been an incredible partner to work with — he's knowledgeable, responsive, and a great communicator.”
    </p>,
  ];

  return (
    <div className="w-full max-w-[720px] bg-[#363C43] rounded-[18px] flex p-4 md:p-[17px] gap-4 min-h-[260px] md:h-[316px]">
      {/* Sidebar */}
      <aside className="flex flex-col items-center gap-4">
        <CircleHelp className="w-[24px] h-[24px] text-gray-400" />
        <Table className="mt-[105px] text-gray-400" />
      </aside>

      {/* Main Section */}
      <div className="flex flex-col w-full gap-4">
        {/* Tabs */}
        <nav className="relative flex bg-[#171717] rounded-[23px] p-[6px] text-[16px] md:text-[18px] font-medium">
          <div
            className="absolute top-[6px] left-[6px] w-40 md:w-50 h-[49px] bg-[#28292F] rounded-[16px] transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${activeTab * 107}%)` }}
          />
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-1/3 h-[49px] z-10 relative rounded-[23px] transition ${
                activeTab === index
                  ? "text-white"
                  : "text-gray-400 hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Content */}
        <main className="p-2 overflow-y-auto text-[14px] md:text-[15px] leading-relaxed scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          {tabContent[activeTab]}
        </main>
      </div>
    </div>
  );
};

export default Description;
