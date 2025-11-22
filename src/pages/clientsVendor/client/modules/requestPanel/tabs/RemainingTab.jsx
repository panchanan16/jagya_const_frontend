import { useEffect, useState } from "react";
import styles from "../MaterialRequestPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_REMAINING_PAYMENTS,
  resetRemainingPayments,
} from "@/redux/features/clientSlice/slice";
import coreEndpoint from "@/api/coreApi";

function RemainingTab({ pro_id }) {
  const [remainingStatuses, setRemainingStatuses] = useState({});
  const [balanceSelectedRows, setBalanceSelectedRows] = useState([]);
  const remainingAllPayments = useSelector(
    (state) => state.client.remainingPayments
  );
  const dispatch = useDispatch();

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
    setRemainingStatuses((prev) => ({
      ...prev,
      [remainingId]: newStatus,
    }));
    console.log(`Status updated for ${remainingId}: ${newStatus}`);
    alert(`Status updated for ${remainingId}: ${newStatus}`);
  };

  return (
    <div className={styles.materialsTab}>
      {remainingAllPayments?.map((payment) => {
        const currentStatus =
          remainingStatuses[payment.rm_id] || payment.rm_status;

        return (
          <div key={payment.rm_id} className={styles.requestSection}>
            <div className={styles.requestHeader}>
              <div className={styles.headerLeft}>
                <h3>Remaining {payment.mr_r_id}</h3>
                <div className={styles.statusUpdateContainer}>
                  <label className={styles.statusLabel}>Status:</label>
                  <select
                    className={styles.statusSelect}
                    value={currentStatus}
                    onChange={(e) =>
                      handleStatusChange(payment.rm_id, e.target.value)
                    }
                  >
                    <option value="pending">Pending</option>
                    <option value="partial">Partial</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
              <button className={styles.selectAllBtn}>Delete</button>
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
