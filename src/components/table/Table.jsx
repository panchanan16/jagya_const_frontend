import React from "react";
import ItemActionBox from "../itemAction/itemActionBox";
import StatusSpan from "../statusSpan/StatusSpan";
import TableFooter from "./TableFooter/TableFooter";

function Table({ Select, Theader, Trow, Tfooter, Limit, Actions, Paginate, totalpage }) {  
  return (
    <>
    <div className="data-info">
      <table>
        <thead>
          <tr>
            {Theader &&
              Theader.map((item, key) => (
                <th key={key} className="">
                  {item}
                </th>
              ))}
          </tr>
        </thead>

        <tbody>
          {Trow.length ? (
            Trow.map((columns, ind) => (
              <tr key={ind}>
                {Select && (
                  <td>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="row-checkbox"
                    />
                  </td>
                )}
                {Object.entries(columns).map(([key, value]) =>
                  Limit ? (
                    Limit.map((col) => {
                      if (col == key || col.key == key) {
                        return (
                          <td key={key} className="text">
                            {typeof col == "object" ? (
                              <StatusSpan status={value} />
                            ) : (
                              value
                            )}
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

                {Actions && (
                  <td className="flex">
                    <ItemActionBox
                      viewFn={`${Actions?.viewUrl && columns[Actions.viewUrl]}`}
                      editFn={`create/${
                        Actions?.editUrl && columns[Actions.editUrl]
                      }`}
                      deleteFn={Actions?.deleteUrl && Actions.deleteUrl}
                    />
                  </td>
                )}
              </tr>
            ))
          ) : (
            <div className="">
              <h2>No Data Found</h2>
            </div>
          )}
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

        {Paginate && (
          <TableFooter TotalPages={totalpage} />
        )}
      </table>
      </div>
    </>
  );
}

export default Table;
