import SecondSlideLayout from "@/layout/common/secondSlideLayout";
import TabLayout from "@/layout/common/TabLayout";
import { useState } from "react";
import { Link } from "react-router-dom";

function SecondSlide() {
  const [isTabActive, setTabActive] = useState(true);
  const tableDataOne = [
    [1, "10/02/2001", "3000", "Cash", "Bought for false ceiling", "1001"],
    [2, "10/02/2001", "3000", "Cash", "Bought for false ceiling", "1003"],
  ];

  const tableDataTwo = [
    [1, "10/02/2001", "3000", "Cash", "Bought for false ceiling"],
    [2, "10/02/2001", "3000", "Cash", "Bought for false ceiling"],
  ];

  return (
    <SecondSlideLayout>
      <main>
        <div className="main-btn flex">
          <Link to={`/clients`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              id="arrow-left"
              className="main-svg"
            >
              <path
                fill=""
                d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"
              ></path>
            </svg>
          </Link>
          <button
            className="btn-primary flex"
            type="button"
            onclick="editClientsProspects()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className=""
            >
              <path
                fill=""
                d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"
              ></path>
            </svg>
            <span>Edit Client</span>
          </button>
        </div>

        <div className="header-text">
          <h2>Panchanan Deka</h2>
        </div>
        {/* <!-- DETAILS  --> */}
        <div className="contents grid gtc-2 gap-10">
          <div className="description flex">
            <h3>Phone Number:</h3>
            <p className="text">6000192289 | 6000192289</p>
          </div>
          <div className="description flex">
            <h3>Email ID:</h3>
            <p className="text">dekapanchanan16534@gmail.com</p>
          </div>
          <div className="description flex">
            <h3>Address:</h3>
            <p className="text">
              House No. 60, Ashram Road, Lachitnagar, Guwahati, Assam
            </p>
          </div>
          <div className="description flex">
            <h3>On Going Project:</h3>
            <p className="text">Residential G+2 Building</p>
          </div>
          <div className="description flex">
            <h3>Total Collection:</h3>
            <p className="text">
              &#8377; <span>50,000</span>
            </p>
          </div>
          <div className="description flex">
            <h3>Total Expenses:</h3>
            <p className="text">
              &#8377; <span>1,00,000</span>
            </p>
          </div>
        </div>

        <hr />
        <div className="tabs">
          <div className="tabs-list flex align-center gap-10">
            <h3
              className={isTabActive ? "active" : ""}
              onClick={() => setTabActive(true)}
            >
              Collections
            </h3>
            <h3
              className={!isTabActive ? "active" : ""}
              onClick={() => setTabActive(false)}
            >
              Expenses
            </h3>
          </div>
          <div className="tabs-content">
            
            {/* <!-- COLLECTIONS LIST --> */}
            <TabLayout
              Heading="Installments"
              isTabActive={isTabActive}
              TableHeading={[
                "No.",
                "Date",
                "Amount",
                "Mode",
                "Remarks",
                "Project",
                "Action",
              ]}
              TableRows={tableDataOne}
            />

            {/* <!-- cLIENT EXPENSES  --> */}
            <TabLayout
              Heading="Expenses"
              isTabActive={!isTabActive}
              TableHeading={[
                "No.",
                "Date",
                "Amount",
                "Mode",
                "Remarks",
                "Action",
              ]}
              TableRows={tableDataTwo}
            />
          </div>
        </div>
      </main>
    </SecondSlideLayout>
  );
}

export default SecondSlide;
