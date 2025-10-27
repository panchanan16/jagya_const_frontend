import { useState } from "react";
import Tab from "@/components/Tab/Tab";

function TabLayout({ TabList }) {
  const [isTabActive, setTabActive] = useState(TabList[0]?.main);

  return (
    <div className="tabs">
      <div className="tabs-heading flex align-end j-between">
        <div className="tabs-list flex align-center">
          {TabList.length &&
            TabList.map((item) => (
              <p
                className={isTabActive == item.main ? "active" : ""}
                onClick={() => setTabActive(item.main)}
              >
                {item.main}
              </p>
            ))}
        </div>
      </div>
      <div className="tabs-content">
        {/* Top Section components */}        
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
              isAction={tabDetails.isAction}
              TopSection={tabDetails.Topsection && tabDetails.Topsection}
            />
          ))}
      </div>
    </div>
  );
}

export default TabLayout;
