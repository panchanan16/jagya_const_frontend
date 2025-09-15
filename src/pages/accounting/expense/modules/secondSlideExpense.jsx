import usePageRender from "@/hooks/usePageRender";
import PopupLayout from "@/layout/common/popupLayout";
import TabLayout from "@/layout/tabLayout/TabLayout";
import React from "react";
import { Link, useParams } from "react-router-dom";

function SecondSlideExpense() {
  const { id } = useParams();
  const { itemData, viewedItem } = usePageRender({
    entity: "expense",
    tail: `get_expense_details/${id}`,
    key: "itemData",
    itemId: "exp_id",
  });

  console.log(itemData);

  return (
    <PopupLayout>
      <div className="inventory-popup bluff">
        <div className="flex align-start j-between">
          <h2>Expense No: {id}</h2>
          <div className="popup-btns flex">
            <Link to={`/admin/expense/create/${id}`}>
              <button type="button" className="btn-secondary">
                Edit
              </button>
            </Link>
            <Link to="/admin/expense">
              <button type="button" className="btn-warning close">
                Close
              </button>
            </Link>
          </div>
        </div>
        <div className="contents grid gap-10">
          <div className="description flex align-center gap-5">
            <h3>Date:</h3>
            <p className="text">
              {new Date(viewedItem?.exp_date).toDateString()}
            </p>
          </div>
          <div className="description flex align-center gap-5">
            <h3>Amount :</h3>
            <p className="text">₹ {viewedItem?.exp_amount}</p>
          </div>
        </div>
        {/* <EditReqItemForm closeFormfn={'/'} /> */}
       
        <TabLayout
          TabList={[
            {
              main: "Contractors",
              list: [
                "Amount",
                // "ProjectID",
                "Project Name",
                "Remarks",
                "Project Ref",
                "Contractor",
              ],
              limit: [
                {
                  key: "pay_amount",
                  type: "amount",
                },
                // "pay_project_id",
                "pro_name",
                "pay_note",
                (rowData) => (
                  <td className="linkCell">
                    <Link
                      to={`/admin/projects/${rowData.pay_project_id}`}
                      className="linkCell"
                    >
                      {rowData.pro_ref_no}
                    </Link>
                  </td>
                ),
                "con_name",
              ],
              tabData: itemData?.contractor,
            },
            {
              main: "Vendors",
              list: [   
              "Amount",
              "Note",
              "Peoject Name",
              "Project Ref",
              "Vendor",
            ],
              limit: [    
              {
                key: "pay_amount",
                type: "amount",
              },
              "pay_note",
              "pro_name",
              "pro_ref_no",
              "vendor_name",
            ],
              tabData: itemData?.vendor,
            },
          ]}
        />
      </div>
    </PopupLayout>
  );
}

export default SecondSlideExpense;
