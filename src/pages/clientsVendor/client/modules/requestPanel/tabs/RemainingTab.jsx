import { useEffect, useState } from "react";
import styles from "../MaterialRequestPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { GET_REMAINING_PAYMENTS } from "@/redux/features/clientSlice/slice";
import coreEndpoint from "@/api/coreApi";

function RemainingTab() {
  const [remainingStatuses, setRemainingStatuses] = useState({});
  const [balanceSelectedRows, setBalanceSelectedRows] = useState([]);
  const remainingAllPayments = useSelector((state) => state.client.remainingPayments);
  console.log(remainingAllPayments)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(GET_REMAINING_PAYMENTS({endpoint: coreEndpoint.getAll('material_req', `remaining/readAll/${32}`)}))
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

  const handleBalanceSelectAll = (items) => {
    const allItemIds = items.map((item) => item.id);
    const allSelected = allItemIds.every((id) =>
      balanceSelectedRows.includes(id)
    );

    if (allSelected) {
      setBalanceSelectedRows((prev) =>
        prev.filter((id) => !allItemIds.includes(id))
      );
    } else {
      setBalanceSelectedRows((prev) => [...new Set([...prev, ...allItemIds])]);
    }
  };

  const isBalanceFullySelected = (items) => {
    return items.every((item) => balanceSelectedRows.includes(item.id));
  };

  const handleStatusChange = (remainingId, newStatus) => {
    setRemainingStatuses((prev) => ({
      ...prev,
      [remainingId]: newStatus,
    }));
    console.log(`Status updated for ${remainingId}: ${newStatus}`);
    alert(`Status updated for ${remainingId}: ${newStatus}`);
  };

  const calculateTotals = (items) => {
    return items.reduce(
      (acc, item) => ({
        totalAmount: acc.totalAmount + item.totalAmount,
        paymentMade: acc.paymentMade + item.paymentMade,
        paymentRemaining: acc.paymentRemaining + item.paymentRemaining,
      }),
      { totalAmount: 0, paymentMade: 0, paymentRemaining: 0 }
    );
  };

  const handleBalanceClearSelection = () => {
    setBalanceSelectedRows([]);
  };

  const handleBalanceUpdateStatus = () => {
    console.log("Update status for balance items:", balanceSelectedRows);
    alert(
      `Updating status for ${balanceSelectedRows.length} selected balance items`
    );
  };

  // Balance Amount data - replace with your actual data
  const remainingPayments = [
    {
      id: 1,
      remainingNumber: "Remaining 1",
      items: [
        {
          id: "b1",
          requestNumber: "Request 1",
          name: "Cement",
          totalAmount: 5000,
          paymentMade: 3000,
          paymentRemaining: 2000,
        },
        {
          id: "b2",
          requestNumber: "Request 1",
          name: "Steel Bars",
          totalAmount: 8000,
          paymentMade: 5000,
          paymentRemaining: 3000,
        },
        {
          id: "b3",
          requestNumber: "Request 2",
          name: "Bricks",
          totalAmount: 12000,
          paymentMade: 10000,
          paymentRemaining: 2000,
        },
      ],
      status: "Pending",
    },
    {
      id: 2,
      remainingNumber: "Remaining 2",
      items: [
        {
          id: "b4",
          requestNumber: "Request 2",
          name: "Tiles",
          totalAmount: 15000,
          paymentMade: 12000,
          paymentRemaining: 3000,
        },
        {
          id: "b5",
          requestNumber: "Request 3",
          name: "Wire",
          totalAmount: 2500,
          paymentMade: 1500,
          paymentRemaining: 1000,
        },
      ],
      status: "Pending",
    },
    {
      id: 3,
      remainingNumber: "Remaining 3",
      items: [
        {
          id: "b6",
          requestNumber: "Request 3",
          name: "Pipes",
          totalAmount: 6000,
          paymentMade: 4000,
          paymentRemaining: 2000,
        },
      ],
      status: "Approved",
    },
  ];

  return (
    <div className={styles.materialsTab}>
      {remainingPayments.map((remaining) => {
        const totals = calculateTotals(remaining.items);
        const currentStatus =
          remainingStatuses[remaining.id] || remaining.status;

        return (
          <div key={remaining.id} className={styles.requestSection}>
            <div className={styles.requestHeader}>
              <div className={styles.headerLeft}>
                <h3>{remaining.remainingNumber}</h3>
                <div className={styles.statusUpdateContainer}>
                  <label className={styles.statusLabel}>Status:</label>
                  <select
                    className={styles.statusSelect}
                    value={currentStatus}
                    onChange={(e) =>
                      handleStatusChange(remaining.id, e.target.value)
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
              <button
                className={styles.selectAllBtn}
                onClick={() => handleBalanceSelectAll(remaining.items)}
              >
                {isBalanceFullySelected(remaining.items)
                  ? "Deselect All"
                  : "Select All"}
              </button>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.checkboxColumn}>
                      <input
                        type="checkbox"
                        checked={isBalanceFullySelected(remaining.items)}
                        onChange={() => handleBalanceSelectAll(remaining.items)}
                      />
                    </th>
                    <th>Request Number</th>
                    <th>Item Name</th>
                    <th>Payment Made</th>
                    <th>Payment Remaining</th>
                  </tr>
                </thead>
                <tbody>
                  {remaining.items.map((item) => (
                    <tr
                      key={item.id}
                      className={
                        balanceSelectedRows.includes(item.id)
                          ? styles.selectedRow
                          : ""
                      }
                      onClick={() => handleBalanceRowSelect(item.id)}
                    >
                      <td className={styles.checkboxColumn}>
                        <input
                          type="checkbox"
                          checked={balanceSelectedRows.includes(item.id)}
                          onChange={() => handleBalanceRowSelect(item.id)}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>
                      <td>{item.requestNumber}</td>
                      <td>{item.name}</td>
                      <td>₹ {item.paymentMade.toLocaleString()}</td>
                      <td className={styles.remainingAmount}>
                        ₹ {item.paymentRemaining.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className={styles.totalRow}>
                    <td colSpan="2" className={styles.totalLabel}>
                      Total ({remaining.items.length} item
                      {remaining.items.length > 1 ? "s" : ""})
                    </td>
                    <td className={styles.totalValue}>
                      Total Amount: ₹ {totals.totalAmount.toLocaleString()}
                    </td>
                    <td className={styles.totalValue}>
                      ₹ {totals.paymentMade.toLocaleString()}
                    </td>
                    <td className={styles.totalValue}>
                      ₹ {totals.paymentRemaining.toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            {balanceSelectedRows.length > 0 && (
              <div className={styles.actionBar}>
                <div className={styles.actionBarContent}>
                  <span className={styles.selectedCount}>
                    {balanceSelectedRows.length} item
                    {balanceSelectedRows.length > 1 ? "s" : ""} selected
                  </span>
                  <div className={styles.actionButtons}>
                    <button
                      className={styles.clearBtn}
                      onClick={handleBalanceClearSelection}
                    >
                      Clear Selection
                    </button>
                    <button
                      className={styles.updateBtn}
                      onClick={handleBalanceUpdateStatus}
                    >
                      Update Status
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default RemainingTab;
