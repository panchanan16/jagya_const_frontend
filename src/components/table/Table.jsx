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


import React from "react";
import ItemActionBox from "../itemAction/itemActionBox";
import StatusSpan from "../statusSpan/StatusSpan";
import TableFooter from "./TableFooter/TableFooter";
import styles from './table.module.css';

function Table({ Select, Theader, Trow, Tfooter, Limit, Actions, Paginate, totalpage, col = 5 }) {  
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.headerRow}>
              {Theader &&
                Theader.map((item, key) => (
                  <th key={key} className={styles.headerCell}>
                    {item}
                  </th>
                ))}
            </tr>
          </thead>

          <tbody className={styles.tbody}>
            {Trow.length ? (
              Trow.map((columns, ind) => (
                <tr key={ind} className={styles.tableRow}>
                  {Select && (
                    <td className={styles.tableCell}>
                      <div className={styles.checkboxWrapper}>
                        <input
                          type="checkbox"
                          name=""
                          id={`row-checkbox-${ind}`}
                          className={styles.rowCheckbox}
                        />
                        <label htmlFor={`row-checkbox-${ind}`} className={styles.checkboxLabel}></label>
                      </div>
                    </td>
                  )}
                  {Object.entries(columns).map(([key, value]) =>
                    Limit ? (
                      Limit.map((col, colIndex) => {
                        if (col == key || col.key == key) {
                          return (
                            <td key={`${key}-${colIndex}`} className={styles.tableCell}>
                              <div className={styles.cellContent}>
                                {typeof col == "object" ? (
                                  <StatusSpan status={value} />
                                ) : (
                                  <span className={styles.cellText}>{value}</span>
                                )}
                              </div>
                            </td>
                          );
                        }
                        return null;
                      })
                    ) : (
                      <td key={key} className={styles.tableCell}>
                        <div className={styles.cellContent}>
                          <span className={styles.cellText}>{value}</span>
                        </div>
                      </td>
                    )
                  )}

                  {Actions && (
                    <td className={styles.tableCell}>
                      <div className={styles.actionsWrapper}>
                        <ItemActionBox
                          viewFn={`${Actions?.viewUrl && columns[Actions.viewUrl]}`}
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
                <td colSpan={col + (Select ? 1 : 0) + (Actions ? 1 : 0)} className={styles.noDataCell}>
                  <div className={styles.noDataWrapper}>
                    <div className={styles.noDataContent}>
                      <div className={styles.noDataIcon}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                      </div>
                      <h3 className={styles.noDataTitle}>No Data Found</h3>
                      <p className={styles.noDataDescription}>There are no records to display at the moment.</p>
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

      {Paginate && (
        <TableFooter TotalPages={totalpage} colspan={col} />
      )}
    </div>
  );
}

export default Table;