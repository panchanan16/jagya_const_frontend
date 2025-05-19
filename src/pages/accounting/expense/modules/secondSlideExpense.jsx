import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import PopupLayout from "@/layout/common/popupLayout";
import React from "react";
import { Link, useParams } from "react-router-dom";

function SecondSlideExpense() {
  const { id } = useParams();
  const { itemData, viewedItem } = usePageRender(
    "expense",
    `get_expense_details/${id}`,
    "itemData",
    "exp_id"
  );

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
        <div className="expense-table">
          <h3>Contractor</h3>
          <Table
            Theader={["ProjectID", "Amount", "Note"]}
            Trow={itemData?.contractor}
            Limit={["pay_amount", "pay_project_id", "pay_note"]}
          />
          <hr />
          <h3>Vendor</h3>
          <Table
            Theader={["ProjectID", "Amount", "Note"]}
            Trow={itemData?.vendor}
            Limit={["pay_project_id", "pay_amount", "pay_note"]}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default SecondSlideExpense;
