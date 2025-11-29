import { useEffect, useState } from "react";
import styles from "../MaterialRequestPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_BALANCE_AMOUNT,
  GET_REMAINING_PAYMENTS,
  resetRemainingPayments,
  UPDATE_REMAINING_STATUS,
} from "@/redux/features/clientSlice/slice";
import coreEndpoint from "@/api/coreApi";

function RemainingTab({ pro_id }) {
  const [remainingStatuses, setRemainingStatuses] = useState({});
  const [balanceSelectedRows, setBalanceSelectedRows] = useState([]);
  const remainingAllPayments = useSelector(
    (state) => state.client.remainingPayments
  );

  const dispatch = useDispatch();

  async function deleteRemaining(remainId) {
    if (confirm("Are you sure to delete the balance??")) {
      dispatch(
        DELETE_BALANCE_AMOUNT({
          endpoint: coreEndpoint.deleteItem(
            "material_req",
            `remaining/remove/${remainId}`
          ),
        })
      );
    }
  }

  useEffect(() => {
    dispatch(resetRemainingPayments());
    dispatch(
      GET_REMAINING_PAYMENTS({
        endpoint: coreEndpoint.getAll(
          "material_req",
          `remaining/readAll/${pro_id}`
        ),
      })
    );
  }, []);

  // Balance Amount handlers
  const handleBalanceRowSelect = (itemId) => {
    setBalanceSelectedRows((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  const handleStatusChange = (remainingId, newStatus) => {
    dispatch(
      UPDATE_REMAINING_STATUS({
        endpoint: coreEndpoint.updateItemWithEndpoint(
          "material_req",
          `remaining/update_status/${remainingId}`
        ),
        body: {
          rm_status: newStatus,
          rm_date: new Date().toISOString().split("T")[0],
        },
      })
    );
    setRemainingStatuses((prev) => ({
      ...prev,
      [remainingId]: newStatus,
    }));
  };

  return (
    <div className={styles.materialsTab}>
      {remainingAllPayments?.map((payment) => {
        const currentStatus =
          remainingStatuses[payment.rm_id] || payment.rm_status;
          console.log("Re rendering ")

        return (
          <div key={payment.rm_id} className={styles.requestSection}>
            <div className={styles.requestHeader}>
              <div className={styles.headerLeft}>
                <h3>Remaining {payment.mr_r_id}</h3>
                <div className={styles.statusUpdateContainer}>
                  <label className={styles.statusLabel}>Status:</label>
                  {payment.rm_status === "completed" ? (
                    <span className={styles.statusSelect}>Completed</span>
                  ) : (
                    <select
                      className={styles.statusSelect}
                      value={currentStatus}
                      onChange={(e) =>
                        handleStatusChange(payment.rm_id, e.target.value)
                      }
                    >
                      <option value="partial">Partial</option>
                      <option value="completed">Completed</option>
                    </select>
                  )}
                </div>
              </div>
              <button
                onClick={() => deleteRemaining(payment.rm_id)}
                className={styles.selectAllBtn}
              >
                Delete
              </button>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Request Ref</th>
                    <th>Item Name</th>
                    <th>Vendor Name</th>
                    <th>Payment Remaining</th>
                  </tr>
                </thead>
                <tbody>
                  {payment.items.map((item) => (
                    <tr
                      key={item.mr_pri_id}
                      className={
                        balanceSelectedRows.includes(item.mr_pri_id)
                          ? styles.selectedRow
                          : ""
                      }
                      onClick={() => handleBalanceRowSelect(item.mr_pri_id)}
                    >
                      <td>{item.material_ref_no}</td>
                      <td>{item.item_name}</td>
                      <td>{item.vendor_name || "N/A"}</td>
                      <td className={styles.remainingAmount}>
                        ₹ {parseFloat(payment.remaining).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className={styles.totalRow}>
                    <td colSpan="1" className={styles.totalLabel}>
                      Total ({payment.items.length} item
                      {payment.items.length > 1 ? "s" : ""})
                    </td>
                    <td className={styles.totalValue}>
                      Total Amount: ₹{" "}
                      {parseFloat(payment.total_amount).toLocaleString()}
                    </td>
                    <td className={styles.totalValue}>
                      Paid: ₹{" "}
                      {(
                        parseFloat(payment.total_amount) -
                        parseFloat(payment.remaining)
                      ).toLocaleString()}
                    </td>
                    <td className={styles.totalValue}>
                      Remaining: ₹{" "}
                      {parseFloat(payment.remaining).toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RemainingTab;
