// import React from "react";
// import ItemActionBox from "../itemAction/itemActionBox";
// import StatusSpan from "../statusSpan/StatusSpan";
// import TableFooter from "./TableFooter/TableFooter";

// function Table({ Select, Theader, Trow, Tfooter, Limit, Actions, Paginate, totalpage, col = 5 }) {
//   return (
//     <>
//     <div className="data-info">
//       <table>
//         <thead>
//           <tr>
//             {Theader &&
//               Theader.map((item, key) => (
//                 <th key={key} className="">
//                   {item}
//                 </th>
//               ))}
//           </tr>
//         </thead>

//         <tbody>
//           {Trow.length ? (
//             Trow.map((columns, ind) => (
//               <tr key={ind}>
//                 {Select && (
//                   <td>
//                     <input
//                       type="checkbox"
//                       name=""
//                       id=""
//                       className="row-checkbox"
//                     />
//                   </td>
//                 )}
//                 {Object.entries(columns).map(([key, value]) =>
//                   Limit ? (
//                     Limit.map((col) => {
//                       if (col == key || col.key == key) {
//                         return (
//                           <td key={key} className="text">
//                             {typeof col == "object" ? (
//                               <StatusSpan status={value} />
//                             ) : (
//                               value
//                             )}
//                           </td>
//                         );
//                       }
//                     })
//                   ) : (
//                     <td key={key} className="text">
//                       {value}
//                     </td>
//                   )
//                 )}

//                 {Actions && (
//                   <td className="flex">
//                     <ItemActionBox
//                       viewFn={`${Actions?.viewUrl && columns[Actions.viewUrl]}`}
//                       editFn={`create/${
//                         Actions?.editUrl && columns[Actions.editUrl]
//                       }`}
//                       deleteFn={Actions?.deleteUrl && Actions.deleteUrl}
//                     />
//                   </td>
//                 )}
//               </tr>
//             ))
//           ) : (
//             <div className="">
//               <h2>No Data Found</h2>
//             </div>
//           )}
//         </tbody>
//         {Tfooter && (
//           <tfoot>
//             <tr>
//               <th colspan="6">Total</th>
//               <th colspan="2">
//                 &#8377; <span>50,000</span>
//               </th>
//             </tr>
//           </tfoot>
//         )}
//       </table>
//        {Paginate && (
//           <TableFooter TotalPages={totalpage} colspan={col} />
//         )}
//       </div>
//     </>
//   );
// }

// export default Table;

// import React from "react";
// import ItemActionBox from "../itemAction/itemActionBox";
// import StatusSpan from "../statusSpan/StatusSpan";
// import TableFooter from "./TableFooter/TableFooter";
// import styles from "./table.module.css";

// function Table({
//   Select,
//   Theader,
//   Trow,
//   Tfooter,
//   Limit,
//   Actions,
//   Paginate,
//   totalpage,
//   col = 5,
// }) {
//   return (
//     <div className={styles.tableContainer}>
//       <div className={styles.tableWrapper}>
//         <table className={styles.table}>
//           <thead className={styles.thead}>
//             <tr className={styles.headerRow}>
//               {Theader &&
//                 Theader.map((item, key) => (
//                   <th key={key} className={styles.headerCell}>
//                     {item}
//                   </th>
//                 ))}
//             </tr>
//           </thead>

//           <tbody className={styles.tbody}>
//             {Trow.length ? (
//               Trow.map((columns, ind) => (
//                 <tr key={ind} className={styles.tableRow}>
//                   {Object.entries(columns).map(([key, value]) =>
//                     Limit ? (
//                       Limit.map((col, colIndex) => {
//                         if (col == key || col.key == key) {
//                           return (
//                             <td
//                               key={`${key}-${colIndex}`}
//                               className={styles.tableCell}
//                             >
//                               <div className={styles.cellContent}>
//                                 {typeof col == "object" ? (
//                                   <StatusSpan status={value} />
//                                 ) : (
//                                   <span className={styles.cellText}>
//                                     {value}
//                                   </span>
//                                 )}
//                               </div>
//                             </td>
//                           );
//                         }
//                         return null;
//                       })
//                     ) : (
//                       <td key={key} className={styles.tableCell}>
//                         <div className={styles.cellContent}>
//                           <span className={styles.cellText}>{value}</span>
//                         </div>
//                       </td>
//                     )
//                   )}

//                   {Actions && (
//                     <td className={styles.tableCell}>
//                       <div className={styles.actionsWrapper}>
//                         <ItemActionBox
//                           viewFn={`${
//                             Actions?.viewUrl && columns[Actions.viewUrl]
//                           }`}
//                           editFn={`create/${
//                             Actions?.editUrl && columns[Actions.editUrl]
//                           }`}
//                           deleteFn={Actions?.deleteUrl && Actions.deleteUrl}
//                         />
//                       </div>
//                     </td>
//                   )}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={col + (Select ? 1 : 0) + (Actions ? 1 : 0)}
//                   className={styles.noDataCell}
//                 >
//                   <div className={styles.noDataWrapper}>
//                     <div className={styles.noDataContent}>
//                       <div className={styles.noDataIcon}>
//                         <svg
//                           width="48"
//                           height="48"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="1.5"
//                         >
//                           <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                         </svg>
//                       </div>
//                       <h3 className={styles.noDataTitle}>No Data Found</h3>
//                       <p className={styles.noDataDescription}>
//                         There are no records to display at the moment.
//                       </p>
//                     </div>
//                   </div>
//                 </td>
//               </tr>
//             )}
//           </tbody>

//           {Tfooter && (
//             <tfoot className={styles.tfoot}>
//               <tr className={styles.footerRow}>
//                 <th colSpan={col} className={styles.footerCell}>
//                   <span className={styles.footerLabel}>Total</span>
//                 </th>
//                 <th colSpan="2" className={styles.footerCell}>
//                   <span className={styles.footerAmount}>
//                     &#8377; <span className={styles.footerValue}>50,000</span>
//                   </span>
//                 </th>
//               </tr>
//             </tfoot>
//           )}
//         </table>
//       </div>

//       {Paginate && <TableFooter TotalPages={totalpage} colspan={col} />}
//     </div>
//   );
// }

// export default Table;

import React from "react";
import ItemActionBox from "../itemAction/itemActionBox";
import StatusSpan from "../statusSpan/StatusSpan";
import TableFooter from "./TableFooter/TableFooter";
import styles from "./table.module.css";
import { Link } from "react-router-dom";
import TableSearchLoading from "../loader/LoaderTable";

function Table({
  Select,
  Theader,
  Trow,
  Tfooter,
  Limit,
  Actions,
  Paginate,
  totalpage,
  col = 5,
  isLoading,
}) {
  // Function to check if element is a function that returns JSX
  const isRenderFunction = (element) => {
    return typeof element === "function";
  };

  // Function to render cell content based on column configuration
  const renderCellContent = (col, value, rowData) => {
    // If col is a function that returns JSX, call it with row data
    if (isRenderFunction(col)) {
      return col(rowData, value);
    }

    // If col is a React element (JSX), return it directly
    if (React.isValidElement(col)) {
      return col;
    }

    // If col is a string, render simple text
    if (typeof col === "string") {
      return <span className={styles.cellText}>{value}</span>;
    }

    // If col is an object, check the type and render accordingly
    if (typeof col === "object" && col !== null) {
      switch (col.type) {
        case "status":
          return <StatusSpan status={value} />;

        case "amount":
          return (
            <span className={styles.amountCell}>
              <span className={styles.currencySymbol}>
                {col.currency || "₹"}
              </span>
              <span className={styles.amountValue}>
                {typeof value === "number" ? value.toLocaleString() : value}
              </span>
            </span>
          );

        case "link":
          const href = col.href ? rowData[col.href] : value;
          return (
            <Link
              to={href}
              className={styles.linkCell}
              target={col.target || "_self"}
              rel={col.target === "_blank" ? "noopener noreferrer" : undefined}
            >
              {col.linkText || value}
            </Link>
          );

        case "custom":
          // For fully custom rendering
          return col.render ? col.render(value, rowData) : value;

        case "badge":
          return (
            <span
              className={`${styles.badge} ${
                styles[`badge-${col.variant || "default"}`]
              }`}
            >
              {value}
            </span>
          );

        case "date":
          const dateValue = new Date(value);
          const formattedDate = col.format
            ? dateValue.toLocaleDateString(undefined, col.format)
            : dateValue.toLocaleDateString();
          return <span className={styles.dateCell}>{formattedDate}</span>;

        default:
          // Fallback for backward compatibility (existing status logic)
          return <StatusSpan status={value} />;
      }
    }

    // Default fallback
    return <span className={styles.cellText}>{value}</span>;
  };

  const renderTableCell = (col, colIndex, columns) => {
    // If col is a function that returns JSX, call it
    if (isRenderFunction(col)) {
      const result = col(columns);

      // If the function returns a complete TD element, use it directly
      if (React.isValidElement(result) && result.type === "td") {
        return React.cloneElement(result, {
          key: `fn-${colIndex}`,
          className: `${result.props.className || ""} ${
            styles.tableCell
          }`.trim(),
        });
      }

      // Otherwise wrap the result in a TD
      return (
        <td key={`fn-${colIndex}`} className={styles.tableCell}>
          <div className={styles.cellContent}>{result}</div>
        </td>
      );
    }

    // If col is a JSX element, handle it
    if (React.isValidElement(col)) {
      // If it's already a TD element, use it directly
      if (col.type === "td") {
        return React.cloneElement(col, {
          key: `jsx-${colIndex}`,
          className: `${col.props.className || ""} ${styles.tableCell}`.trim(),
        });
      }

      // Otherwise wrap it in a TD
      return (
        <td key={`jsx-${colIndex}`} className={styles.tableCell}>
          <div className={styles.cellContent}>{col}</div>
        </td>
      );
    }

    // Handle object and string configurations
    const columnKey = typeof col === "string" ? col : col?.key;

    // Find matching column value
    const matchingEntry = Object.entries(columns).find(
      ([key]) => key === columnKey
    );

    if (matchingEntry) {
      const [key, value] = matchingEntry;
      return (
        <td
          key={`${key}-${colIndex}`}
          className={`${styles.tableCell} ${
            typeof col === "object" && col?.className ? col.className : ""
          }`}
          style={typeof col === "object" ? col?.style : undefined}
        >
          <div className={styles.cellContent}>
            {renderCellContent(col, value, columns)}
          </div>
        </td>
      );
    }

    return null;
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.headerRow}>
              {Select && (
                <th className={styles.headerCell}>
                  <input
                    type="checkbox"
                    className={styles.selectAllCheckbox}
                    // Add select all functionality here if needed
                  />
                </th>
              )}
              {Theader &&
                Theader.map((item, key) => (
                  <th key={key} className={styles.headerCell}>
                    {item}
                  </th>
                ))}
              {Actions && <th className={styles.headerCell}>Actions</th>}
            </tr>
          </thead>

          <tbody className={styles.tbody}>
            {isLoading ? (
              <tr>
                <td
                  colSpan={
                    (Theader ? Theader.length : col) +
                    (Select ? 1 : 0) +
                    (Actions ? 1 : 0)
                  }
                  style={{
                    padding: "0",
                    textAlign: "center",
                    verticalAlign: "middle",
                    border: "none",
                  }}
                >
                  <TableSearchLoading
                    message="Searching for results..."
                    iconSize={28}
                  />
                </td>
              </tr>
            ) : Trow && Trow.length ? (
              Trow.map((columns, ind) => (
                <tr key={ind} className={styles.tableRow}>
                  {Limit
                    ? Limit.map((col, colIndex) =>
                        renderTableCell(col, colIndex, columns)
                      )
                    : Object.entries(columns).map(([key, value]) => (
                        <td key={key} className={styles.tableCell}>
                          <div className={styles.cellContent}>
                            <span className={styles.cellText}>{value}</span>
                          </div>
                        </td>
                      ))}

                  {Actions && (
                    <td className={styles.tableCell}>
                      <div className={styles.actionsWrapper}>
                        <ItemActionBox
                          viewFn={
                            Actions?.viewUrl && `${columns[Actions.viewUrl]}`
                          }
                          editFn={`create/${
                            Actions?.editUrl && columns[Actions.editUrl]
                          }`}
                          deleteFn={Actions?.deleteUrl && Actions.deleteUrl}
                        />
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={
                    (Theader ? Theader.length : col) +
                    (Select ? 1 : 0) +
                    (Actions ? 1 : 0)
                  }
                  className={styles.noDataCell}
                >
                  <div className={styles.noDataWrapper}>
                    <div className={styles.noDataContent}>
                      <div className={styles.noDataIcon}>
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className={styles.noDataTitle}>No Data Found</h3>
                      <p className={styles.noDataDescription}>
                        There are no records to display at the moment.
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>

          {Tfooter && (
            <tfoot className={styles.tfoot}>
              <tr className={styles.footerRow}>
                <th colSpan={col} className={styles.footerCell}>
                  <span className={styles.footerLabel}>Total</span>
                </th>
                <th colSpan="2" className={styles.footerCell}>
                  <span className={styles.footerAmount}>
                    &#8377; <span className={styles.footerValue}>50,000</span>
                  </span>
                </th>
              </tr>
            </tfoot>
          )}
        </table>
      </div>

      {Paginate && <TableFooter TotalPages={totalpage} colspan={col} />}
    </div>
  );
}

export default Table;
