import PopupLayout from "@/layout/common/popupLayout";
import { Form } from "formik";
import { Link } from "react-router-dom";

function InvoiceFormWithField(params) {
  return (
    <div class="add-expense blur">
      <div class="form">
        <h2>Add Invoice</h2>
        <Link to="/invoices">
          <button
            type="button"
            class="btn-warning close"
            onclick="closemainPopup()"
          >
            Close
          </button>
        </Link>
        <hr />
        <div class="grid gtc-2 gap-10">
          <div class="field">
            <p class="title">
              Invoice No. <span>(*required)</span>
            </p>
            <div class="flex align-center">
              <input type="text" name="" id="" value="JAG-" disabled />
              <input type="text" name="" id="" required class="flex-1" />
            </div>
          </div>
          <div class="field">
            <p class="title">
              Invoice Date <span>(*required)</span>
            </p>
            <input type="date" name="" id="" required />
          </div>
          <div class="field selectBox">
            <p class="title client-selector">Select a Client</p>
            <input type="text" placeholder="Search here...." />
            <ul class="list-options hide">
              <li data-value="Manash Kakoti">Manash Kakoti</li>
              <li data-value="Kankan Jyoti Nath">Kankan Jyoti Nath</li>
              <li data-value="Panchanan Deka">Panchanan Deka</li>
              <li data-value="Mintu Sharma">Mintu Sharma</li>
              <li data-value="Dipankor Doley">Dipankor Doley</li>
            </ul>
          </div>
          <div class="field">
            <p class="title">Contact Number</p>
            <input type="number" name="" id="" required />
          </div>
          <div class="field">
            <p class="title">
              Address<span>(*optional)</span>
            </p>
            <input type="text" name="" id="" />
          </div>
          <div class="field">
            <p class="title">Payment Status</p>
            <select name="cname" id="" class="">
              <option value="">Paid</option>
              <option value="">Unpaid</option>
              <option value="">Cheque</option>
              <option value="">Credit</option>
            </select>
          </div>
        </div>
        <div class="field">
          <p class="title opacity-0">hu</p>
          <button
            class="btn-dashed flex align-items j-center"
            type="button"
            onclick="addOneItem(this)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="plus-circle"
              class=""
            >
              <path
                fill=""
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
              ></path>
            </svg>
            <span class="text">Add Item</span>
          </button>
        </div>
        <div class="newItem">
          <div class="itemGrid">
            <div class="field">
              <p class="title">Item</p>
              <input type="text" name="" id="" />
            </div>
            <div class="field">
              <p class="title">Quantity</p>
              <input type="text" name="" id="" />
            </div>
            <div class="field">
              <p class="title">
                Rate<span>(*optional)</span>
              </p>
              <input type="number" name="" id="" />
            </div>
            <div class="field">
              <p class="title">
                Amount<span>(*optional)</span>
              </p>
              <input type="number" name="" id="" />
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
        </div>
        <div class="grid gtc-2 gap-10">
          <div class="field selectBox">
            <p class="title client-selector">
              GST Rate <span>(in %)</span>
            </p>
            <input type="text" placeholder="Search here...." />
            <ul class="list-options hide">
              <li data-value="18%">18%</li>
              <li data-value="20%">20%</li>
            </ul>
          </div>
          <div class="field">
            <p class="title">
              Amount<span>(in &#8377;)</span>
            </p>
            <input type="text" name="" id="" />
          </div>
          <div class="field">
            <p class="title">
              Discount<span>(in &#8377;)</span>
            </p>
            <input type="text" name="" id="" />
          </div>
          <div class="field">
            <p class="title">
              Total<span>(in &#8377;)</span>
            </p>
            <input type="text" name="" id="" value="" disabled />
          </div>
        </div>
        <div class="action-btn flex gap-10">
          <button type="button" class="btn-success flex-1">
            Add
          </button>
          <button type="button" class="btn-warning flex-1">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function AddInvoiceForm() {
  return (
    <PopupLayout>
      <InvoiceFormWithField />
    </PopupLayout>
  );
}

export default AddInvoiceForm;
