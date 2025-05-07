import React from "react";
import ItemActionBox from "../itemAction/itemActionBox";
import StatusSpan from "../statusSpan/StatusSpan";
import { useLocation, useNavigate } from "react-router-dom";

function Table({ Select, Theader, Trow, Tfooter, Limit, Actions, Paginate }) {
  const navigate = useNavigate();
  const location = useLocation();

  const updateFilters = (category) => {
    const searchParams = new URLSearchParams(location.search);

    // Update parameters
    searchParams.set("category", category);
    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {/* <th>
              <input type="checkbox" name="checkbox" className="select-all" />
            </th> */}
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
          <tfoot>
            <tr>
              <td colspan="2">Page 1 of 1</td>
              <td colspan="5"></td>
              <td colspan="2">
                <div class="flex align-center pagination">
                  <span class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="left-arrow-to-left"
                    >
                      <path
                        fill=""
                        d="M21,11H9.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H21a1,1,0,0,0,0-2ZM3,3A1,1,0,0,0,2,4V20a1,1,0,0,0,2,0V4A1,1,0,0,0,3,3Z"
                      ></path>
                    </svg>
                  </span>
                  <span class="icon" onClick={() => updateFilters('345')}>
                    1
                  </span>
                  <span class="icon">2</span>
                  <span class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="arrow-to-right"
                    >
                      <path
                        fill=""
                        d="M17.71,11.29l-4-4a1,1,0,1,0-1.42,1.42L14.59,11H3a1,1,0,0,0,0,2H14.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76A1,1,0,0,0,17.71,11.29ZM21,4a1,1,0,0,0-1,1V19a1,1,0,0,0,2,0V5A1,1,0,0,0,21,4Z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </>
  );
}

export default Table;
