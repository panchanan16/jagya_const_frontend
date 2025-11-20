import React, { useEffect, useState } from "react";
import styles from "./MaterialRequestPanel.module.css";
import AddBalanceForm from "@/forms/addBalance/AddBalanceForm";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_MATERIAL_REQUESTs } from "@/redux/features/clientSlice/slice";
import coreEndpoint from "@/api/coreApi";
import RemainingTab from "./tabs/RemainingTab";
import { getStatusClass } from "@/utils/others/getStatusClass";

const MaterialRequestPanel = ({ projectID }) => {
  const [activeTab, setActiveTab] = useState("materials");
  const [selectedRows, setSelectedRows] = useState([]);
  const [materialStatuses, setMaterialStatuses] = useState({});
  const [showRemainingPopup, setShowRemainingPopup] = useState(false);
  const materialRequests = useSelector(
    (state) => state.client.materialRequests
  );
  const dispatch = useDispatch();

  useEffect(() => {
    projectID &&
      dispatch(
        GET_ALL_MATERIAL_REQUESTs({
          endpoint: coreEndpoint.getAll(
            "material_req",
            `realAll_by_ProId/${projectID}`
          ),
          entity: "materialRequests",
        })
      );
  }, [projectID]);

  // Transform actualdata into requests array format for compatibility
  const requests = Object.keys(materialRequests).map((key) => {
    const request = materialRequests[key];
    return {
      id: request.mr_r_id,
      requestNumber: request.material_ref_no,
      items: request.items.map((item) => ({
        id: item.mr_item_id,
        name: item.mr_item_name,
        amount: item.mr_item_amount || 0,
        quantity: item.mr_item_quantity,
        vendor: item.vendor_name ? item.vendor_name : "N/A",
        fstatus: item.fd_approval === 1 ? "Approved" : "Pending",
        mstatus: item.md_approval === 1 ? "Approved" : "Pending",
        arrival_status: item.mr_delivery_status === 1 ? "Arrived" : "Not yet",
        status: item.payment_status == null ? "Pending" : item.payment_status,
      })),
    };
  });

  const userType = "admin";

  // Material Requests handlers
  const handleRowSelect = (itemId) => {
    setSelectedRows((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  const handleSelectAll = (items) => {
    const allItemIds = items.map((item) => item.id);
    const allSelected = allItemIds.every((id) => selectedRows.includes(id));

    if (allSelected) {
      setSelectedRows((prev) => prev.filter((id) => !allItemIds.includes(id)));
    } else {
      setSelectedRows((prev) => [...new Set([...prev, ...allItemIds])]);
    }
  };

  const isRequestFullySelected = (items) => {
    return items.every((item) => selectedRows.includes(item.id));
  };

  const handleUpdateStatus = () => {
    console.log("Update status for items:", selectedRows);
    alert(`Updating status for ${selectedRows.length} selected items`);
  };

  const handleClearSelection = () => {
    setSelectedRows([]);
  };

  // Separate handler for material tab status updates
  const handleMaterialStatusChange = (itemId, newStatus, event) => {
    event.stopPropagation();
    setMaterialStatuses((prev) => ({
      ...prev,
      [itemId]: newStatus,
    }));
    console.log(`Material status updated for item ${itemId}: ${newStatus}`);
    alert(`Status updated for item ${itemId}: ${newStatus}`);
  };

  // Calculate total amount for selected items in material requests
  const calculateSelectedItemsTotal = () => {
    let total = 0;
    requests.forEach((request) => {
      request.items.forEach((item) => {
        if (selectedRows.includes(item.id)) {
          total += item.amount;
        }
      });
    });
    return total;
  };

  // Get current status for an item
  const getCurrentItemStatus = (itemId, defaultStatus) => {
    return materialStatuses[itemId] || defaultStatus;
  };

  const handleCreateRemaining = () => {
    setShowRemainingPopup(true);
  };

  const handleClosePopup = () => {
    setShowRemainingPopup(false);
  };

  const handleRemainingFormSubmit = (values) => {
    const formData = {
      ...values,
      items: selectedRows,
    };
    console.log("Remaining form submitted:", formData);
    alert(`Remaining payment created:\n${JSON.stringify(formData, null, 2)}`);
    setShowRemainingPopup(false);
    setSelectedRows([]);
  };

  const initialTotalAmount = calculateSelectedItemsTotal();

  return (
    <div className={styles.panelContainer}>
      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "materials" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("materials")}
        >
          Material Requests
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "balance" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("balance")}
        >
          Balance Amount
        </button>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {activeTab === "materials" ? (
          <div className={styles.materialsTab}>
            {requests.map((request) => (
              <div key={request.id} className={styles.requestSection}>
                <div className={styles.requestHeader}>
                  <h3>{request.requestNumber}</h3>
                  <button
                    className={styles.selectAllBtn}
                    onClick={() => handleSelectAll(request.items)}
                  >
                    {isRequestFullySelected(request.items)
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
                            checked={isRequestFullySelected(request.items)}
                            onChange={() => handleSelectAll(request.items)}
                          />
                        </th>
                        <th>Item Name</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Vendor</th>
                        <th>Finance Status</th>
                        <th>Payment Status</th>
                        <th>Arrival Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {request.items.map((item) => {
                        const isSelected = selectedRows.includes(item.id);
                        const currentStatus = getCurrentItemStatus(
                          item.id,
                          item.status
                        );

                        return (
                          <tr
                            key={item.id}
                            className={isSelected ? styles.selectedRow : ""}
                            onClick={() => handleRowSelect(item.id)}
                          >
                            <td className={styles.checkboxColumn}>
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => handleRowSelect(item.id)}
                                onClick={(e) => e.stopPropagation()}
                              />
                            </td>
                            <td>{item.name}</td>
                            <td>₹ {item.amount.toLocaleString()}</td>
                            <td>{item.quantity}</td>
                            <td>{item.vendor}</td>
                            <td>
                              <span
                                className={`${
                                  styles.statusBadge
                                } ${getStatusClass(item.fstatus)}`}
                              >
                                {item.fstatus}
                              </span>
                            </td>
                            <td>
                              {userType === "admin" ? (
                                isSelected ? (
                                  <div>
                                    <span
                                      className={`${
                                        styles.statusBadge
                                      } ${getStatusClass(currentStatus)}`}
                                    >
                                      {item.status}
                                    </span>
                                    <span style={{fontSize: 10, marginLeft: 5}}>10/09/2012</span>
                                  </div>
                                ) : (
                                  <div>
                                    <select
                                      className={`${
                                        styles.statusBadge
                                      } ${getStatusClass(currentStatus)}`}
                                      value={currentStatus}
                                      onChange={(e) =>
                                        handleMaterialStatusChange(
                                          item.id,
                                          e.target.value,
                                          e
                                        )
                                      }
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <option value="pending">Pending</option>
                                      <option value="partial">Partial</option>
                                      <option value="completed">
                                        Completed
                                      </option>
                                    </select>
                                    <span style={{fontSize: 10, marginLeft: 5}}>10/09/2012</span>
                                  </div>
                                )
                              ) : (
                                <span
                                  className={`${
                                    styles.statusBadge
                                  } ${getStatusClass(currentStatus)}`}
                                >
                                  {currentStatus}
                                </span>
                              )}
                            </td>
                            <td>
                              <span
                                className={`${
                                  styles.statusBadge
                                } ${getStatusClass(item.arrival_status)}`}
                              >
                                {item.arrival_status}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        ) : (          
          <RemainingTab />
        )}
      </div>

      {/* Bottom Action Bar for Material Requests */}
      {activeTab === "materials" && selectedRows.length > 0 && (
        <div className={styles.actionBar}>
          <div className={styles.actionBarContent}>
            <span className={styles.selectedCount}>
              {selectedRows.length} item{selectedRows.length > 1 ? "s" : ""}{" "}
              selected
            </span>
            <div className={styles.actionButtons}>
              <button
                className={styles.clearBtn}
                onClick={handleClearSelection}
              >
                Clear Selection
              </button>
              <button className={styles.updateBtn} onClick={handleUpdateStatus}>
                Update Status
              </button>
              <button
                className={styles.createRemainingBtn}
                onClick={handleCreateRemaining}
              >
                Create Remaining
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Remaining Popup Form */}
      {showRemainingPopup && (
        <AddBalanceForm
          initialTotalAmount={initialTotalAmount}
          selectedRows={selectedRows}
          onClose={handleClosePopup}
          onSubmit={handleRemainingFormSubmit}
        />
      )}
    </div>
  );
};

export default MaterialRequestPanel;
