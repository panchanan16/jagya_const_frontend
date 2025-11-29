import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import PopupLayout from "@/layout/common/popupLayout";
import { Link, useParams } from "react-router-dom";
import styles from "@/styles/common.module.css";
import useRequest from "@/hooks/useRequest";

function SecondSlideInchargeReq() {
  const { id } = useParams();
  const { itemData } = usePageRender({
    entity: "material_req",
    tail: `realAll_by_materialId/${id}`,
    key: "itemData",
  });

  const { updateRequest } = useRequest("material_req", null, null, null, false);

  return (
    <PopupLayout>
      <div class="inventory-popup">
        <div class="flex align-start j-between">
          <h2>Request No: {id}</h2>
          <Link to="/admin/incharge">
            <button
              type="button"
              class="btn-warning close"
              onclick="closemainPopup(this)"
            >
              Close
            </button>
          </Link>
        </div>
        <div class="contents grid gtc-2 gap-10">
          <div class="description flex align-center gap-5">
            <h3>Client Name:</h3>
            <p class="text">{itemData?.client_name}</p>
          </div>
          <div class="description flex align-center gap-5">
            <h3>Project Name:</h3>
            <p class="text">{itemData?.pro_name}</p>
          </div>
          <div class="description flex align-center gap-5">
            <h3>Project Ref :</h3>
            <p class="text">{itemData?.pro_ref_no}</p>
          </div>
        </div>

        <div class="addItem-popup hide">
          <div class="form">
            <div class="grid gap-10 inventoryGrid">
              <div class="field">
                <p class="title">Item</p>
                <input type="text" name="" id="" />
              </div>
              <div class="field">
                <p class="title">Quantity</p>
                <input type="text" name="" id="" />
              </div>
              <div class="field">
                <p class="opacity-0">p</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="trash-alt"
                >
                  <path
                    fill=""
                    d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="action-btn flex gap-10">
              <button type="button" class="btn-success flex-1">
                Add
              </button>
              <button
                type="button"
                class="btn-warning flex-1"
                onclick="closeItemPopup()"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div class="editItem-popup hide">
          <div class="form">
            <div class="grid gtc-2 gap-10">
              <div class="field">
                <p class="title">Item</p>
                <input type="text" name="" id="" />
              </div>
              <div class="field">
                <p class="title">Quantity</p>
                <input type="text" name="" id="" />
              </div>
            </div>
            <div class="action-btn flex gap-10">
              <button type="button" class="btn-success flex-1">
                Update
              </button>
              <button
                type="button"
                class="btn-warning flex-1"
                onclick="closeEditItem()"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div class="inventory-table">
          <Table
            Theader={[
              "ProjectID",
              "Item",
              "Quantity",
              "Amount",
              "Finance Approval",
              "Arrival Status",
            ]}
            Limit={[
              "mr_project_r_id",
              "mr_item_name",
              "mr_item_quantity",
              { key: "mr_item_amount", type: "amount" },
              (rowData) => (
                <td>
                  <span
                    className={`${styles.select} ${
                      rowData.fd_approval == 1
                        ? styles.arrived
                        : styles.notArrived
                    }`}
                  >
                    {rowData.fd_approval == 1 ? "Approved" : "Not yet"}
                  </span>
                </td>
              ),
              (rowData) => (
                <td>
                  <select
                    onChange={(event)=> {
                      updateRequest({}, null, `status/material_delivery/${rowData.mr_item_id}`
                      ).then((item)=> {
                        event.target.value = item.updatedStatus;
                      })}                      
                    }
                    value={rowData.mr_delivery_status}
                    className={`${styles.select} ${
                      rowData.mr_delivery_status == 1
                        ? styles.arrived
                        : styles.notArrived
                    }`}
                  >
                    <option value="1">Arrived</option>
                    <option value="0">Not Arrived</option>
                  </select>
                </td>
              ),
            ]}
            Trow={itemData?.materialItemsData ? itemData.materialItemsData : []}
          />
        </div>
      </div>
    </PopupLayout>
  );
}

export default SecondSlideInchargeReq;
