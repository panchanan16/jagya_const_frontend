import React, { useEffect, useState } from "react";
import styles from "./MaterialRequestPanel.module.css";
import AddBalanceForm from "@/forms/addBalance/AddBalanceForm";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_ALL_MATERIAL_REQUESTs,
  resetMaterialRequests,
} from "@/redux/features/clientSlice/slice";
import coreEndpoint from "@/api/coreApi";
import RemainingTab from "./tabs/RemainingTab";
import { getStatusClass } from "@/utils/others/getStatusClass";
import useRequest from "@/hooks/useRequest";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const MaterialRequestPanel = ({ projectID }) => {
  const [activeTab, setActiveTab] = useState("materials");
  const [selectedRows, setSelectedRows] = useState([]);
  const [materialStatuses, setMaterialStatuses] = useState({});
  const [showRemainingPopup, setShowRemainingPopup] = useState(false);
  const [showStatusPopup, setShowStatusPopup] = useState(false);
  const [selectedItemForStatus, setSelectedItemForStatus] = useState(null);
  const materialRequests = useSelector(
    (state) => state.client.materialRequests
  );
  const dispatch = useDispatch();
  const { updateRequest } = useRequest("material_req", null, null, null, false);

  useEffect(() => {
    dispatch(resetMaterialRequests());
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

  // Calculate total amount for selected items in material requests
  const calculateSelectedItemsTotal = () => {
    let total = 0;
    requests.forEach((request) => {
      request.items.forEach((item) => {
        if (selectedRows.includes(item.id)) {
          total += parseFloat(item.amount);
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

  // Handle status click to open popup
  const handleStatusClick = (item, event) => {
    event.stopPropagation();
    const currentStatus = getCurrentItemStatus(item.id, item.status);

    // Only allow changing status if not already completed
    if (
      currentStatus.toLowerCase() !== "completed" &&
      currentStatus.toLowerCase() !== "remaining"
    ) {
      setSelectedItemForStatus(item);
      setShowStatusPopup(true);
    } else {
      alert("Status is already completed or partial and cannot be changed.");
    }
  };

  // Handle status form submission
  const handleStatusFormSubmit = async (values) => {
    const itemId = selectedItemForStatus.id;
    try {
      const res = await updateRequest(
        values,
        null,
        `status/material_payment/${itemId}`
      );
      if (res) {
        // Update the material status
        setMaterialStatuses((prev) => ({
          ...prev,
          [itemId]: "completed",
        }));
      }

      // alert(`Status updated successfully!\n${JSON.stringify(values, null, 2)}`);

      setShowStatusPopup(false);
      setSelectedItemForStatus(null);
      setShowStatusPopup(false);
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status. Please try again.");
    }
  };

  // Validation schema for status form
  const statusValidationSchema = Yup.object({
    payment_status: Yup.string().required("Payment status is required"),
    payment_date: Yup.string().required("Payment date is required"),
    payment_mode: Yup.string().required("Payment mode is required"),
    remark: Yup.string(),
  });

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
                  {/* <button
                    className={styles.selectAllBtn}
                    onClick={() => handleSelectAll(request.items)}
                  >
                    {isRequestFullySelected(request.items)
                      ? "Deselect All"
                      : "Select All"}
                  </button> */}
                </div>

                <div className={styles.tableContainer}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th className={styles.checkboxColumn}>
                          {/* <input
                            type="checkbox"
                            checked={isRequestFullySelected(request.items)}
                            onChange={() => handleSelectAll(request.items)}
                          /> */}
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
                            // onClick={() => handleRowSelect(item.id)}
                          >
                            <td className={styles.checkboxColumn}>
                              {item.status.toLowerCase() !== "completed" && item.status.toLowerCase() !== "remaining" && (
                                <input
                                  type="checkbox"
                                  checked={isSelected}
                                  onChange={() => handleRowSelect(item.id)}
                                  onClick={(e) => e.stopPropagation()}
                                />
                              )}
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
                                <div>
                                  <span
                                    className={`${
                                      styles.statusBadge
                                    } ${getStatusClass(currentStatus)} ${
                                      currentStatus.toLowerCase() !==
                                      "completed"
                                        ? styles.clickableStatus
                                        : ""
                                    }`}
                                    onClick={(e) => handleStatusClick(item, e)}
                                    style={{
                                      cursor:
                                        currentStatus.toLowerCase() !==
                                        "completed"
                                          ? "pointer"
                                          : "default",
                                    }}
                                  >
                                    {currentStatus}
                                  </span>
                                  <span style={{ fontSize: 10, marginLeft: 5 }}>
                                    10/09/2012
                                  </span>
                                </div>
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
          <RemainingTab pro_id={projectID} />
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
          pro_id={projectID}
        />
      )}

      {/* Status Update Popup Form */}
      {showStatusPopup && selectedItemForStatus && (
        <div className={styles.statusPopupOverlay}>
          <div className={styles.statusPopupContent}>
            <div className={styles.statusPopupHeader}>
              <h2>Update Payment Status</h2>
              <button
                className={styles.closeBtn}
                onClick={() => {
                  setShowStatusPopup(false);
                  setSelectedItemForStatus(null);
                }}
              >
                ×
              </button>
            </div>
            <Formik
              initialValues={{
                payment_status: "completed",
                payment_date: new Date().toISOString().split("T")[0],
                payment_mode: "upi",
                remark: "",
              }}
              validationSchema={statusValidationSchema}
              onSubmit={handleStatusFormSubmit}
            >
              {({ isSubmitting, values }) => (
                <Form className={styles.statusPopupForm}>
                  <div className={styles.statusFormGroup}>
                    <label htmlFor="payment_status">Payment Status</label>
                    <Field
                      type="text"
                      id="payment_status"
                      name="payment_status"
                      className={styles.statusFormInput}
                      readOnly
                    />
                    <ErrorMessage
                      name="payment_status"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>

                  <div className={styles.statusFormGroup}>
                    <label htmlFor="payment_date">Payment Date</label>
                    <Field
                      type="date"
                      id="payment_date"
                      name="payment_date"
                      className={styles.statusFormInput}
                    />
                    <ErrorMessage
                      name="payment_date"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>

                  <div className={styles.statusFormGroup}>
                    <label htmlFor="payment_mode">Payment Mode</label>
                    <Field
                      as="select"
                      id="payment_mode"
                      name="payment_mode"
                      className={styles.statusFormInput}
                    >
                      <option value="cheque">Cheque</option>
                      <option value="cash">Cash</option>
                      <option value="online">Online</option>
                      <option value="bank_transfer">Bank Transfer</option>
                      <option value="upi">UPI</option>
                    </Field>
                    <ErrorMessage
                      name="payment_mode"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>

                  <div className={styles.statusFormGroup}>
                    <label htmlFor="remark">Remark (Optional)</label>
                    <Field
                      as="textarea"
                      id="remark"
                      name="remark"
                      className={styles.statusFormTextarea}
                      rows="3"
                      placeholder="Add any additional notes..."
                    />
                    <ErrorMessage
                      name="remark"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>

                  <div className={styles.statusItemInfo}>
                    <strong>Item:</strong> {selectedItemForStatus.name}
                  </div>

                  <div className={styles.statusFormActions}>
                    <button
                      type="button"
                      className={styles.cancelBtn}
                      onClick={() => {
                        setShowStatusPopup(false);
                        setSelectedItemForStatus(null);
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={styles.submitBtn}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Updating..." : "Update Status"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default MaterialRequestPanel;
