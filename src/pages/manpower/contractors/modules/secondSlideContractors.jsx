import useRequest from "@/hooks/useRequest";
import SecondSlideLayout from "@/layout/common/secondSlideLayout";
import TabLayout from "@/layout/tabLayout/TabLayout";
import { Link, useParams } from "react-router-dom";

function SecondSlideContractor() {
  const { id } = useParams();
  const { requestData } = useRequest(
    "contractorPayment",
    null,
    `readAll?pay_con_id=${id}`
  );

  return (
    <SecondSlideLayout>
      <main>
        <div className="main-btn flex">
          <Link to="/admin/contractor">
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
          </Link>
          <button className="btn-primary flex">
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
            <span>Edit Contractor</span>
          </button>
        </div>

        <div className="header-text">
          <h2>Mintu Sharma</h2>
        </div>
        {/* <!-- DETAILS  --> */}
        <div className="contents grid gtc-2 gap-10">
          <div className="description flex">
            <h3>Phone Number : </h3>
            <p className="text"> 6000192289 | 6000192289</p>
          </div>
          <div className="description flex">
            <h3>Email ID:</h3>
            <p className="text">sharmaMintu@gmail.com</p>
          </div>
          <div className="description flex">
            <h3>Address:</h3>
            <p className="text">
              House No. 60, Ashram Road, Lachitnagar, Guwahati, Assam
            </p>
          </div>
          <div className="description flex">
            <h3>No. of Projects:</h3>
            <p className="text">20</p>
          </div>
          <div className="description flex">
            <h3>Total Payments:</h3>
            <p className="text">₹ 200000</p>
          </div>
          
        </div>
        <hr />

        <TabLayout
          TabList={[
            {
              main: "Payments",
              list: [
                "No.",
                "Amount",
                "Mode",
                "Remarks",
                "Peoject Name",
                "ProjectRef",
              ],
              limit: [
                "pay_id",
                "pay_amount",
                "pay_mode",
                "pay_note",
                "pro_name",
                "pro_ref_no",
              ],
              tabData: requestData ? requestData : [],
            },
          ]}
        />
      </main>
    </SecondSlideLayout>
  );
}

export default SecondSlideContractor;
