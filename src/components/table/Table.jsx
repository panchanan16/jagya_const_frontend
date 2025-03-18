import React from "react";
import ItemActionBox from "../itemAction/itemActionBox";

function Table({ Theader, Trow, Tfooter, Limit, Actions }) {
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
            Trow.map((columns, ind) => (
              <tr key={ind}>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    id=""          
                    className="row-checkbox"
                  />
                </td>
                {Object.entries(columns).map(([key, value]) =>
                  Limit ? (
                    Limit.map((col) => {
                      if (col == key) {
                        return (
                          <td key={key} className="text">
                            {value}
                          </td>
                        );
                      }
                    })
                  ) : (
                    <td key={key} className="text">
                      {value}
                    </td>
                  )
                )}
                <td className="flex">
                  <ItemActionBox
                    viewFn={`${Actions?.viewUrl && columns[Actions.viewUrl]}`}
                    editFn={`add-clients/${Actions?.editUrl && columns[Actions.editUrl]}`}
                    deleteFn={Actions?.deleteUrl && Actions.deleteUrl}
                  />
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
