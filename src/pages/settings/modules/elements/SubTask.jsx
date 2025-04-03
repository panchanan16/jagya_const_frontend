import React from "react";

function SubTask() {
  return (
    <div class="set-details">
      <div class="payment-type flex align-center j-between">
        <h1>Sub Tasks</h1>
        <div class="action-btn flex">
          <div class="field">
            <input type="text" name="" id="" placeholder="Type sub task here" />
          </div>
          <button class="btn-primary" type="button" onclick="subTask(this)">
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
            <span class="text">Add</span>
          </button>
        </div>
      </div>

      <div class="edit-details flex align-center f-wrap">
        <div class="set-title flex align-center j-between">
          <h2>Plumbing</h2>
          <div class="flex">
            <span
              class="flex align-center j-center"
              onclick="subTaskEdit(this)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="pen"
              >
                <path d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z"></path>
              </svg>
            </span>
            <span class="flex align-center j-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="trash-alt"
              >
                <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubTask;
