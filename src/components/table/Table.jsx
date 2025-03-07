import React from "react";

function Table({ Theader, Trow, Tfooter }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="checkbox" className="select-all" />
            </th>
            {Theader &&
              Theader.map((item, key) => (
                <th key={key} className="">
                  {item}
                </th>
              ))}
          </tr>
        </thead>

        <tbody>
          {Trow &&
            Trow.map((columns) => (
              <tr>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    onchange="toggleHighlight(this)"
                    className="row-checkbox"
                  />
                </td>
                {columns &&
                  columns.map((item) => <td className="text">{item}</td>)}
                <td className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    onclick="editVendorPurchase()"
                  >
                    <path
                      fill=""
                      d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"
                    ></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fill=""
                      d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                    ></path>
                  </svg>
                </td>
              </tr>
            ))}
        </tbody>
        {Tfooter && (
          <tfoot>
            <tr>
              <th colspan="6">Total</th>
              <th colspan="2">
                &#8377; <span>50,000</span>
              </th>
            </tr>
          </tfoot>
        )}
      </table>
    </>
  );
}

export default Table;
