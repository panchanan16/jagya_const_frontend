import usePageRender from "@/hooks/usePageRender";
import useRequest from "@/hooks/useRequest";
import SecondSlideLayout from "@/layout/common/secondSlideLayout";
import TabLayout from "@/layout/tabLayout/TabLayout";
import { Link, useParams } from "react-router-dom";

function SecondSlideVendor() {
  const { id } = useParams();
  const { itemData } = usePageRender(
    "vendor",
    `get_vendor_payment_purchase?vendor_id=${id}`,
    "itemData"
  );

  return (
    <SecondSlideLayout>
      <main>
        <div className="main-btn flex">
          <Link to="/admin/vendors">
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
        </div>

        <hr />

        <TabLayout
          TabList={[
            {
              main: "Payments",
              list: ["No.", "Project", "Amount", "Mode", "Remarks"],
              limit: [
                "pay_id",
                "pay_project_id",
                "pay_amount",
                "pay_mode",
                "pay_note",
              ],
              tabData: itemData.payments,
            },
            {
              main: "Purchases",
              list: [
                "Vendor",
                "Project Name",
                "Item",
                "Qnt",
                "Amount",
                "Date"
              ],
              limit: [
                "vendor_id",
                "mr_project_r_id",
                "mr_item_name",
                "mr_item_quantity",
                "mr_item_amount",
                "mr_item_date",
              ],
              tabData: itemData.purcheses,
            },
          ]}
        />
      </main>
    </SecondSlideLayout>
  );
}

export default SecondSlideVendor;
