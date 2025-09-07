// import React from "react";

// function PaymentType() {
//   return (
//     <div class="set-details">
//       <div class="payment-type flex align-center j-between">
//         <h1>Payment Type</h1>
//         <div class="action-btn flex">
//           <div class="field">
//             <input
//               type="text"
//               name=""
//               id=""
//               placeholder="Type payment-type here"
//             />
//           </div>
//           <button
//             class="btn-primary"
//             type="button"
//             onclick="addPaymentType(this)"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               id="plus-circle"
//               class=""
//             >
//               <path
//                 fill=""
//                 d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
//               ></path>
//             </svg>
//             <span class="text">Add</span>
//           </button>
//         </div>
//       </div>

//       <div class="edit-details flex align-center f-wrap">
//         <div class="set-title flex align-center j-between">
//           <h2>UPI</h2>
//           <div class="flex">
//             <span
//               class="flex align-center j-center"
//               onclick="editPaymentType(this)"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 id="pen"
//               >
//                 <path d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z"></path>
//               </svg>
//             </span>
//             <span class="flex align-center j-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 id="trash-alt"
//               >
//                 <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path>
//               </svg>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PaymentType;

import { useState } from "react";
import styles from "./WorkType.module.css";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";

function PaymentType() {
  // Sample payment types - replace with your actual state management
  const [paymentTypes, setPaymentTypes] = useState([
    { id: 1, name: "UPI" },
    { id: 2, name: "Credit Card" },
    { id: 3, name: "Debit Card" },
    { id: 4, name: "Net Banking" },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  // Add payment type function
  const addPaymentType = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setLoading(true);

    // Your existing addPaymentType logic here
    // For demo purposes, just adding to local state
    const newPaymentType = {
      id: Date.now(),
      name: inputValue.trim(),
    };

    setPaymentTypes((prev) => [...prev, newPaymentType]);
    setInputValue("");
    setLoading(false);
  };

  // Edit payment type function
  const editPaymentType = (paymentType) => {
    // Your existing editPaymentType logic here
    console.log("Edit payment type:", paymentType);
  };

  // Delete payment type function
  const deletePaymentType = (id) => {
    // Your existing delete logic here
    setPaymentTypes((prev) => prev.filter((type) => type.id !== id));
  };

  return (
    <FirstSlideLayout Heading={"Settings / Payment Type"}>
      <div
        className={`${styles.workTypeContainer} ${
          loading ? styles.loading : ""
        }`}
      >
        {/* Header Section */}
        <div className={styles.settingsHeader}>
          <div className={styles.titleWrapper}>
            <span className={styles.statusIndicator}></span>
            <span className={styles.titleText}>
              Payment Type
              {loading && (
                <span className={styles.loadingIndicator}>Loading...</span>
              )}
            </span>
          </div>
        </div>

        {/* Input Section */}
        <div className={styles.inputSection}>
          <form className={styles.inputForm} onSubmit={addPaymentType}>
            <div className={styles.inputField}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type payment-type here"
                className={styles.textInput}
              />
            </div>
            <button className={styles.addButton} type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={styles.addIcon}
              >
                <path
                  fill="currentColor"
                  d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
                />
              </svg>
              <span className="text">Add</span>
            </button>
          </form>
        </div>

        {/* List Section */}
        <div className={styles.listSection}>
          <div className={styles.workTypeList}>
            {paymentTypes.length > 0 ? (
              paymentTypes.map((paymentType) => (
                <div className={styles.workTypeItem} key={paymentType.id}>
                  <span className={styles.itemIndicator}></span>
                  <span className={styles.itemText}>{paymentType.name}</span>
                  <div className={styles.itemActions}>
                    <button
                      className={styles.editButton}
                      onClick={() => editPaymentType(paymentType)}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.deleteButton}
                      onClick={() => deletePaymentType(paymentType.id)}
                      title="Delete payment type"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={styles.deleteIcon}
                      >
                        <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.emptyState}>
                <svg
                  className={styles.emptyStateIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20,8H4V6C4,4.89 4.89,4 6,4H18A2,2 0 0,1 20,6V8M4,10H20V18A2,2 0 0,1 18,20H6C4.89,20 4,19.1 4,18V10M12,17A3,3 0 0,1 9,14A3,3 0 0,1 12,11A3,3 0 0,1 15,14A3,3 0 0,1 12,17M12,15A1,1 0 0,0 13,14A1,1 0 0,0 12,13A1,1 0 0,0 11,14A1,1 0 0,0 12,15Z" />
                </svg>
                <p>
                  No payment types added yet. Create your first payment type
                  above.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </FirstSlideLayout>
  );
}

export default PaymentType;
