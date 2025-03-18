import { useState } from "react";
import Table from "@/components/table/Table";

function Tab({Heading, isTabActive, TableHeading, TableRows, limit}) {
  return (
    <div className={`${isTabActive ? "" : "hide"}`}>
      <div className="flex align-start j-between">
        <h2>{Heading}</h2>
        <div className="action-btn flex">
          {/* <button
            className="btn-primary"
            type="button"
            onclick="addVendorPurchase()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="plus-circle"
              className=""
            >
              <path
                fill=""
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
              ></path>
            </svg>
            <span className="text">Add a Purchase</span>
          </button> */}
        </div>
      </div>
      <div>
        <Table
          Theader={TableHeading}
          Trow={TableRows}
          Limit={limit}
          Actions={{editUrl: '/client'}}
        />
      </div>
    </div>
  );
}


function TabLayout({ tabHeading, tabHeadingII, tabDataOne, tabDataTwo, limit }) {
  const [isTabActive, setTabActive] = useState(true);

  return (
    <div className="tabs">
      <div className="tabs-list flex align-center gap-10">
        <h3
          className={isTabActive ? "active" : ""}
          onClick={() => setTabActive(true)}
        >
          {tabHeading.main}
        </h3>
        <h3
          className={!isTabActive ? "active" : ""}
          onClick={() => setTabActive(false)}
        >
           {tabHeadingII.main}
        </h3>
      </div>
      <div className="tabs-content">
        {/* <!-- 1st TAB --> */}
        <Tab
          Heading={tabHeading.main}
          isTabActive={isTabActive}
          TableHeading={tabHeading.list}
          TableRows={tabDataOne}
          limit={tabHeading.limit}
        />

        {/* <!-- 2nd TAB --> */}
        <Tab
          Heading={tabHeadingII.main}
          isTabActive={!isTabActive}
          TableHeading={tabHeadingII.list}
          TableRows={tabDataTwo}
          limit={limit}
        />
      </div>
    </div>
  );
}

export default TabLayout;
