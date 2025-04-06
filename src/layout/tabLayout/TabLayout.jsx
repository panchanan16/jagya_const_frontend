import { useState } from "react";
import Tab from "@/components/Tab/Tab";

function TabLayout({ TabList }) {
  const [isTabActive, setTabActive] = useState(TabList[0]?.main);

  console.log(TabList[0].tabData)

  return (
    <div className="tabs">
      <div className="tabs-list flex align-center gap-10">
        {TabList.length &&
          TabList.map((item) => (
            <h3
              className={isTabActive == item.main ? "active" : ""}
              onClick={() => setTabActive(item.main)}
            >
              {item.main}
            </h3>
          ))}
      </div>
      <div className="tabs-content">
        {/* <!-- TAB RENDERING --> */}
        {TabList.length &&
          TabList.map((tabDetails) => (
            <Tab
              Heading={tabDetails.main}
              isTabActive={isTabActive}
              TabName={tabDetails.main}
              TableHeading={tabDetails.list}
              TableRows={tabDetails.tabData}
              limit={tabDetails.limit}
            />
          ))}
      </div>
    </div>
  );
}

export default TabLayout;
