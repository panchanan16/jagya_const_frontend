import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import PopupLayout from "@/layout/common/popupLayout";
import React from "react";
import { Link, useParams } from "react-router-dom";

function SecondSlideExpense() {
  const { id } = useParams();
  const { itemData } = usePageRender(
    "expense",
    `get_expense_details/${id}`,
    "itemData"
  );

  return (
    <PopupLayout>
      <div className="inventory-popup">
        <div className="flex align-start j-between">
          <h2>Expense No: {id}</h2>
          <Link to="/expense">
            <button type="button" className="btn-warning close">
              Close
            </button>
          </Link>
        </div>
        <div className="contents grid gap-10">
          <div className="description flex align-center gap-5">
            <h3>Date:</h3>
            <p className="text">12-Nov-2024</p>
          </div>
          <div className="description flex align-center gap-5">
            <h3>Amount :</h3>
            <p className="text">$ 500000</p>
          </div>
        </div>
        {/* <EditReqItemForm closeFormfn={'/'} /> */}
        <div className="inventory-table">
          <h3>Contractor</h3>
          <Table
            Theader={["ProjectID", "Amount", "Note", "Action"]}
            Trow={itemData?.contractor}
            Limit={["pay_amount", "pay_project_id", "pay_note"]}
          />

          <h3>Vendor</h3>
          <Table
            Theader={["ProjectID", "Amount", "Note", "Action"]}
            Trow={itemData?.contractor}
            Limit={["pay_amount", "pay_project_id", "pay_note"]}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default SecondSlideExpense;
