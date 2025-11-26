import usePageRender from "@/hooks/usePageRender";
import useSecondSlideData from "@/hooks/useSecondSlideData";
import SecondSlideLayout from "@/layout/common/secondSlideLayout";
import TabLayout from "@/layout/tabLayout/TabLayout";
import { Link, useParams } from "react-router-dom";

function SecondSlideVendor() {
  const { id } = useParams();
  const { itemData } = usePageRender({
    entity: "vendor",
    tail: `get_vendor_payment_purchase?vendor_id=${id}`,
    key: "itemData",
  });
  console.log(itemData);

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

           <div className="flex" style={{ gap: 10 }}>
            <Link to={`/admin/expense/add-expense`} className="btn-primary flex">
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
              <span>Add Payments</span>
            </Link>

            <Link to={`/admin/vendors/create/${id}`} className="btn-primary flex">
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
              <span>Edit Vendor</span>
            </Link>
          </div>
        </div>

        <div className="header-text">
          <h2>Vendor Details</h2>
        </div>
        {/* <!-- DETAILS  --> */}
        <div className="contents grid gtc-2 gap-10">
          <div className="description flex">
            <h3>Vendor Reff No. : </h3>
            <p className="text">{itemData && itemData.vendor?.vendor_ref_no}</p>
          </div>
          <div className="description flex">
            <h3>Vendor Name : </h3>
            <p className="text">{itemData && itemData.vendor?.vendor_name}</p>
          </div>
          <div className="description flex">
            <h3>Phone Number : </h3>
            <p className="text">
              {itemData && itemData.vendor?.vendor_contact}
            </p>
          </div>
          <div className="description flex">
            <h3>Email ID:</h3>
            <p className="text">
              {itemData && itemData.vendor?.vendor_email
                ? itemData.vendor?.vendor_email
                : "N/A"}
            </p>
          </div>
          <div className="description flex">
            <h3>Address:</h3>
            <p className="text">
              {itemData && itemData.vendor?.vendor_address}
            </p>
          </div>
          <div className="description flex">
            <h3>Amount Paid:</h3>
            <p className="text">
              ₹ {itemData && itemData.total_amount?.total_payments}
            </p>
          </div>
          <div className="description flex">
            <h3>Amount Purchases:</h3>
            <p className="text">
              ₹ {itemData && itemData.total_amount.total_materials}
            </p>
          </div>
        </div>

        <hr />

        <TabLayout
          TabList={[
            {
              main: "Payments",
              list: ["Project Name", "Amount", "Client Name", "Mode", "Remarks"],
              limit: [
                (rowData) => (
                  <td className="linkCell">
                    <Link
                      to={`/admin/projects/${rowData.pay_project_id}`}
                      className="linkCell"
                    >
                    {rowData.pro_name}
                    </Link>
                  </td>
                ),
                {
                  key: "pay_amount",
                  type: "amount"
                },
                "client_name",
                "pay_mode",
                "pay_note",
              ],
              tabData: itemData.payments,
            },
            {
              main: "Purchases",
              list: ["Project Name", "Client Name", "Item", "Qnt", "Amount", "Date"],
              limit: [
                (rowData) => (
                  <td className="linkCell">
                    <Link
                      to={`/admin/projects/${rowData.mr_project_r_id}`}
                      className="linkCell"
                    >
                   {rowData.pro_name}
                    </Link>
                  </td>
                ),
                "client_name",
                "mr_item_name",
                "mr_item_quantity",
                {
                  key: "mr_item_amount",
                  type: "amount"
                },
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
