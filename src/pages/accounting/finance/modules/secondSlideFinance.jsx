import Tab from "@/components/Tab/Tab";
import SecondSlideLayout from "@/layout/common/secondSlideLayout";
import { Link } from "react-router-dom";

function SecondSlideFinance() {
  return (
    <SecondSlideLayout>
      <main>
        <Link to="/finance">
          <div className="main-btn flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              id="arrow-left"
              className="main-svg"
              onclick="openProjectDetails('first-slide', this)"
            >
              <path
                fill=""
                d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"
              ></path>
            </svg>
          </div>
        </Link>

        <div className="header-text">
          <h2>Mintu Sharma</h2>
        </div>

        {/* <!-- DETAILS  --> */}
        <div className="contents grid gtc-2 gap-10">
          <div className="description flex align-center gap-5">
            <h3>Client Name:</h3>
            <p className="text">Kankan Jyoti Nath</p>
          </div>
          <div className="description flex align-center gap-5">
            <h3>Phone / Alternate Number:</h3>
            <p className="text">6002649802 | 7636896075</p>
          </div>
          <div className="description flex align-center gap-5">
            <h3>Email ID:</h3>
            <p className="text">jyotikankan222@gmail.com</p>
          </div>
          <div className="description flex align-center gap-5">
            <h3>Address:</h3>
            <p className="text">
              House No. 60, Ashram Road, Lachitnagar, Guwahati, Assam
            </p>
          </div>
          <div className="description flex align-center gap-5">
            <h3>House type:</h3>
            <p className="text">Assam Type</p>
          </div>
          <div className="description flex align-center gap-5">
            <h3>Site Description:</h3>
            <p className="text">Assam Type of ghor juntu assamese hoi</p>
          </div>
          <div className="description flex align-center gap-5">
            <h3>Project Initiated:</h3>
            <p className="text">12-June-2024</p>
          </div>
          <div className="description flex align-center gap-5">
            <h3>Project Duration:</h3>
            <p className="text">1.5 years</p>
          </div>
        </div>

        <hr />
        <div className="tabs">
          <div className="tabs-content">
            {/* <!-- COLLECTIONS LIST --> */}
            <Tab
              isTabActive={`Installments`}
              TabName={`Installments`}
              TableHeading={["Sl no.", "Amount", "Mode of Pay", "Date"]}
            />
          </div>
        </div>
      </main>
    </SecondSlideLayout>
  );
}

export default SecondSlideFinance;
