import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import PopupLayout from "@/layout/common/popupLayout";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

function SecondSlideFinanceReq() {
  const { id } = useParams();
  const location = useLocation();
  const { itemData } = usePageRender(
    "material_req",
    `realAll_by_materialId/${id}`,
    "itemData",
    location
  );


  return (
    <PopupLayout>
      <div class="inventory-popup">
        <div class="flex align-start j-between">
          <h2>Request No: {id}</h2>
          <Link to="/finance-request">
            <button type="button" class="btn-warning close">
              Close
            </button>
          </Link>
        </div>
        <div class="contents grid gap-10">
          <div class="description flex align-center gap-5">
            <h3>Date:</h3>
            <p class="text">{itemData?.pro_name}</p>
          </div>
          <div class="description flex align-center gap-5">
            <h3>Client Name:</h3>
            <p class="text">{itemData?.client_name}</p>
          </div>
          <div class="description flex align-center gap-5">
            <h3>Phone Number:</h3>
            <p class="text">{itemData?.pro_ref_no}</p>
          </div>
        </div>
        <div class="approveAll-btn flex align-center gap-10">
          <button class="btn-primary" type="button" onclick="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="file-check-alt"
            >
              <path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"></path>
            </svg>
            <span class="text">Approve</span>
          </button>
          <button class="btn-primary" type="button" onclick="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              id="receipt"
            >
              <path
                fill=""
                d="M9,12H7a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2ZM8,10h4a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Zm1,6H7a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm12-4H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-6.44-2.83a.76.76,0,0,0-.18-.09.6.6,0,0,0-.19-.06,1,1,0,0,0-.9.27A1.05,1.05,0,0,0,12,17a1,1,0,0,0,.07.38,1.19,1.19,0,0,0,.22.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,14,17a1.05,1.05,0,0,0-.29-.71A1.58,1.58,0,0,0,13.56,16.17Zm.14-3.88a1,1,0,0,0-1.62.33A1,1,0,0,0,13,14a1,1,0,0,0,1-1,1,1,0,0,0-.08-.38A.91.91,0,0,0,13.7,12.29Z"
              ></path>
            </svg>
            <span class="text">Generate Invoice</span>
          </button>
          <button class="btn-primary" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="file-check-alt"
            >
              <path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"></path>
            </svg>

            <Link to={`/finance-request/create/${id}`}>
              <span class="text">Edit</span>
            </Link>
          </button>
        </div>

        <div class="inventory-table">
          <Table
            Theader={["ProjectID", "Item", "Quantity", "Amount", "Status"]}
            Limit={[
              "mr_project_r_id",
              "mr_item_name",
              "mr_item_quantity",
              "mr_item_amount",
              {key: "fd_approval"}
            ]}
            Trow={itemData?.materialItemsData ? itemData.materialItemsData : []}            
          />
        </div>
      </div>
      <Outlet />
    </PopupLayout>
  );
}

export default SecondSlideFinanceReq;
