// import SecondSlideLayout from "@/layout/common/secondSlideLayout";

// function SecondSlideInvoice() {
//   return (
//     <SecondSlideLayout>
//           <div class="main-btn flex">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               data-name="Layer 1"
//               viewBox="0 0 24 24"
//               id="arrow-left"
//               class="main-svg"
//               onclick="openProjectDetails('first-slide', this)"
//             >
//               <path
//                 fill=""
//                 d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"
//               ></path>
//             </svg>
//           </div>

//           <div class="invoice-section">
//             <div class="invoice-header flex j-between align-center">
//               <div class="company-logo">
//                 <img src="/img/logo.png" alt="logo" loading="lazy" />
//               </div>
//               <div class="invoice-name">
//                 <h1>Invoice</h1>
//               </div>
//             </div>
//             <div class="invoice-title flex align-center j-between">
//               <div class="company-address">
//                 <h3>Jagya Construction</h3>
//                 <h3>Six Mile, Guwahati, Assam</h3>
//                 <h3>PIN-782001</h3>
//               </div>
//               <div class="invoice-details">
//                 <div class="line-1 flex align-center">
//                   <h3>Invoice No.</h3>
//                   <p class="text">
//                     JAG-<span>001</span>
//                   </p>
//                 </div>
//                 <div class="line-1 flex align-center">
//                   <h3>Invoice Date</h3>
//                   <p class="text">19-03-2025</p>
//                 </div>
//               </div>
//             </div>

//             <div class="invoice-address">
//               <h2>Billed to</h2>
//               <p class="text">Panchanan Deka</p>
//               <p class="text">Nagaon, Assam</p>
//               <p class="text">+91 6000192289</p>
//             </div>

//             <div class="invoice-table">
//               <table>
//                 <thead>
//                   <th>Item</th>
//                   <th>Quantity</th>
//                   <th>Rate</th>
//                   <th>GST Rate</th>
//                   <th>Amount</th>
//                   <th>Total</th>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>Bricks</td>
//                     <td>10</td>
//                     <td>1000</td>
//                     <td>18%</td>
//                     <td>180</td>
//                     <td>&#8377; 1180</td>
//                   </tr>
//                   <tr>
//                     <td>Cement</td>
//                     <td>10</td>
//                     <td>1000</td>
//                     <td>18%</td>
//                     <td>180</td>
//                     <td>&#8377; 1180</td>
//                   </tr>
//                   <tr>
//                     <td colspan="4"></td>
//                     <td colspan="2">
//                       <table>
//                         <tbody>
//                           <tr>
//                             <td>Subtotal</td>
//                             <td>&#8377; 2360</td>
//                           </tr>
//                           <tr>
//                             <td>
//                               GST <span>(18%)</span>
//                             </td>
//                             <td>&#8377; 360</td>
//                           </tr>
//                           <tr>
//                             <td>Discount</td>
//                             <td>&#8377; 0</td>
//                           </tr>
//                           <tr>
//                             <td>Total</td>
//                             <td>&#8377; 2360</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             <div class="invoice-terms flex j-between">
//               <div class="terms-text">
//                 <h2>Terms & Conditions</h2>
//                 <div class="terms">
//                   <p class="text">Payment is due within 15 days</p>
//                 </div>
//               </div>
//               <div class="authorized-signature">
//                 <div class="authorized-img">
//                   <img
//                     src="/img/signature.jpg"
//                     alt="signature"
//                     loading="lazy"
//                   />
//                 </div>
//                 <h2>Authorized Signature</h2>
//                 <p class="text">Thank You for doing business with us</p>
//               </div>
//             </div>

//             <div class="invoice-footer flex align-center">
//               <p class="text">Jagya Construction</p>
//               <p>|</p>
//               <p class="text">+91 6000192289</p>
//               <p>|</p>
//               <p class="text">jagyaconstruction@gmail.com</p>
//             </div>
//           </div>
//     </SecondSlideLayout>
//   );
// }

// export default SecondSlideInvoice;

import { useState } from "react";
import { Download, Plus, Trash2 } from "lucide-react";
import SecondSlideLayout from "@/layout/common/secondSlideLayout";

const SecondSlideInvoice = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: "INV-001",
    date: new Date().toISOString().split("T")[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    company: {
      name: "Jagya Contruction Pvt. ltd",
      address: "Panjabari, Guwahati",
      city: "City, State 12345",
      email: "info@jagyacontruction.com",
      phone: "98765543322",
    },
    client: {
      name: "Client Name",
      address: "456 Client Ave",
      city: "City, State 67890",
      email: "client@email.com",
    },
    items: [
      { description: "Service 1", quantity: 1, rate: 100, amount: 100 },
      { description: "Service 2", quantity: 2, rate: 75, amount: 150 },
    ],
    notes: "Thank you for your business!",
  });

  const updateInvoiceData = (field, value) => {
    setInvoiceData((prev) => ({ ...prev, [field]: value }));
  };

  const updateCompany = (field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      company: { ...prev.company, [field]: value },
    }));
  };

  const updateClient = (field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      client: { ...prev.client, [field]: value },
    }));
  };

  const updateItem = (index, field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.map((item, i) => {
        if (i === index) {
          const updatedItem = { ...item, [field]: value };
          if (field === "quantity" || field === "rate") {
            updatedItem.amount = updatedItem.quantity * updatedItem.rate;
          }
          return updatedItem;
        }
        return item;
      }),
    }));
  };

  const addItem = () => {
    setInvoiceData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        { description: "", quantity: 1, rate: 0, amount: 0 },
      ],
    }));
  };

  const removeItem = (index) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const calculateSubtotal = () => {
    return invoiceData.items.reduce((sum, item) => sum + item.amount, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.1; // 10% tax rate
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  // PDF Generation Function
  const generateInvoicePDF = () => {
    const subtotal = calculateSubtotal();
    const tax = calculateTax();
    const total = calculateTotal();

    // Create a new window for the PDF
    const printWindow = window.open("", "_blank");

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Invoice ${invoiceData.invoiceNumber}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: Arial, sans-serif; font-size: 12px; line-height: 1.4; color: #333; }
          .container { max-width: 800px; margin: 0 auto; padding: 20px; }
          .header { display: flex; justify-content: space-between; margin-bottom: 30px; }
          .company-info h1 { font-size: 24px; color: #1b1b1b; margin-bottom: 10px; }
          .invoice-info { text-align: right; }
          .invoice-info h2 { font-size: 20px; color: #374151; margin-bottom: 10px; }
          .billing-section { display: flex; justify-content: space-between; margin-bottom: 30px; }
          .billing-info h3 { font-size: 14px; color: #374151; margin-bottom: 10px; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; }
          .items-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          .items-table th, .items-table td { padding: 10px; text-align: left; border-bottom: 1px solid #e5e7eb; }
          .items-table th { background-color: #f9fafb; font-weight: bold; color: #374151; }
          .items-table .text-right { text-align: right; }
          .totals-section { margin-left: auto; width: 300px; }
          .total-row { display: flex; justify-content: space-between; padding: 5px 0; }
          .total-row.final { font-weight: bold; font-size: 16px; border-top: 2px solid #374151; padding-top: 10px; color: #1b1b1b; }
          .notes { margin-top: 30px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #1b1b1b; }
          .notes h4 { margin-bottom: 10px; color: #374151; }
          @media print {
            body { print-color-adjust: exact; }
            .container { padding: 0; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="company-info">
              <h1>${invoiceData.company.name}</h1>
              <p>${invoiceData.company.address}</p>
              <p>${invoiceData.company.city}</p>
              <p>Email: ${invoiceData.company.email}</p>
              <p>Phone: ${invoiceData.company.phone}</p>
            </div>
            <div class="invoice-info">
              <h2>INVOICE</h2>
              <p><strong>Invoice #:</strong> ${invoiceData.invoiceNumber}</p>
              <p><strong>Date:</strong> ${new Date(
                invoiceData.date
              ).toLocaleDateString()}</p>
              <p><strong>Due Date:</strong> ${new Date(
                invoiceData.dueDate
              ).toLocaleDateString()}</p>
            </div>
          </div>

          <div class="billing-section">
            <div class="bill-to">
              <h3>Bill To:</h3>
              <p><strong>${invoiceData.client.name}</strong></p>
              <p>${invoiceData.client.address}</p>
              <p>${invoiceData.client.city}</p>
              <p>${invoiceData.client.email}</p>
            </div>
          </div>

          <table class="items-table">
            <thead>
              <tr>
                <th>Description</th>
                <th class="text-right">Qty</th>
                <th class="text-right">Rate</th>
                <th class="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              ${invoiceData.items
                .map(
                  (item) => `
                <tr>
                  <td>${item.description}</td>
                  <td class="text-right">${item.quantity}</td>
                  <td class="text-right">$${item.rate.toFixed(2)}</td>
                  <td class="text-right">$${item.amount.toFixed(2)}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>

          <div class="totals-section">
            <div class="total-row">
              <span>Subtotal:</span>
              <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="total-row">
              <span>Tax (10%):</span>
              <span>$${tax.toFixed(2)}</span>
            </div>
            <div class="total-row final">
              <span>Total:</span>
              <span>$${total.toFixed(2)}</span>
            </div>
          </div>

          ${
            invoiceData.notes
              ? `
            <div class="notes">
              <h4>Notes:</h4>
              <p>${invoiceData.notes}</p>
            </div>
          `
              : ""
          }
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();

    // Wait for content to load, then trigger print
    printWindow.onload = () => {
      printWindow.print();
    };
  };

  return (
    <SecondSlideLayout>
      <style jsx>{`
        .invoice-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
          background-color: #ffffff;
        }

        .invoice-header {
          margin-bottom: 32px;
        }

        .invoice-title {
          font-size: 30px;
          font-weight: bold;
          color: #111827;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .invoice-title-icon {
          height: 32px;
          width: 32px;
          color: #1b1b1b;
        }

        .invoice-subtitle {
          color: #6b7280;
        }

        .invoice-main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        @media (max-width: 1024px) {
          .invoice-main-grid {
            grid-template-columns: 1fr;
          }
        }

        .invoice-form-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .invoice-right-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .invoice-section {
          background-color: #f9fafb;
          padding: 16px;
          border-radius: 8px;
        }

        .invoice-section-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 16px;
          color: #374151;
        }

        .invoice-section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .invoice-details-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @media (max-width: 768px) {
          .invoice-details-grid {
            grid-template-columns: 1fr;
          }
        }

        .invoice-form-group {
          display: flex;
          flex-direction: column;
        }

        .invoice-label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 4px;
          color: #374151;
        }

        .invoice-input {
          width: 100%;
          padding: 8px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          font-size: 14px;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }

        .invoice-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }

        .invoice-form-fields {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .invoice-two-column-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .invoice-add-button {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          background-color: #1b1b1b;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.15s ease-in-out;
        }

        .invoice-add-button:hover {
          background-color: #1d4ed8;
        }

        .invoice-button-icon {
          height: 16px;
          width: 16px;
        }

        .invoice-items-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .invoice-item-row {
          display: grid;
          grid-template-columns: 5fr 2fr 2fr 2fr 1fr;
          gap: 8px;
          align-items: center;
        }

        .invoice-item-amount {
          padding: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
        }

        .invoice-remove-button {
          padding: 8px;
          color: #dc2626;
          background: none;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.15s ease-in-out;
        }

        .invoice-remove-button:hover {
          background-color: #fee2e2;
        }

        .invoice-totals-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .invoice-total-row {
          display: flex;
          justify-content: space-between;
          padding: 4px 0;
          color: #374151;
        }

        .invoice-final-total {
          font-size: 18px;
          font-weight: bold;
          border-top: 2px solid #374151;
          padding-top: 8px;
          color: #1b1b1b;
        }

        .invoice-textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          font-size: 14px;
          height: 80px;
          resize: none;
          font-family: inherit;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }

        .invoice-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }

        .invoice-generate-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 24px;
          background-color: #1b1b1b;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.15s ease-in-out;
        }

        .invoice-generate-button:hover {
          background-color: #373737ff;
        }

        @media (max-width: 768px) {
          .invoice-container {
            padding: 16px;
          }

          .invoice-title {
            font-size: 24px;
          }

          .invoice-item-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .invoice-item-amount {
            text-align: right;
            font-weight: bold;
          }

          .invoice-two-column-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="invoice-container">
        <div className="invoice-header">
          <h1 className="invoice-title">          
            Generate Invoice
          </h1>
          <p className="invoice-subtitle">Create and generate PDF invoices</p>
        </div>

        <div className="invoice-main-grid">
          {/* Form Section */}
          <div className="invoice-form-section">
            {/* Invoice Details */}
            <div className="invoice-section">
              <h2 className="invoice-section-title">Invoice Details</h2>
              <div className="invoice-details-grid">
                <div className="invoice-form-group">
                  <label className="invoice-label">Invoice Number</label>
                  <input
                    type="text"
                    value={invoiceData.invoiceNumber}
                    onChange={(e) =>
                      updateInvoiceData("invoiceNumber", e.target.value)
                    }
                    className="invoice-input"
                  />
                </div>
                <div className="invoice-form-group">
                  <label className="invoice-label">Date</label>
                  <input
                    type="date"
                    value={invoiceData.date}
                    onChange={(e) => updateInvoiceData("date", e.target.value)}
                    className="invoice-input"
                  />
                </div>
                <div className="invoice-form-group">
                  <label className="invoice-label">Due Date</label>
                  <input
                    type="date"
                    value={invoiceData.dueDate}
                    onChange={(e) =>
                      updateInvoiceData("dueDate", e.target.value)
                    }
                    className="invoice-input"
                  />
                </div>
                <div className="invoice-form-group">
                  <label className="invoice-label">Invoice status</label>
                  <select className="invoice-input">
                    <option value="Paid">Paid</option>
                    <option value="Paid">Unpaid</option>
                    <option value="Paid">Partial</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="invoice-section">
              <h2 className="invoice-section-title">Your Company</h2>
              <div className="invoice-form-fields">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={invoiceData.company.name}
                  onChange={(e) => updateCompany("name", e.target.value)}
                  className="invoice-input"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={invoiceData.company.address}
                  onChange={(e) => updateCompany("address", e.target.value)}
                  className="invoice-input"
                />
                <input
                  type="text"
                  placeholder="City, State ZIP"
                  value={invoiceData.company.city}
                  onChange={(e) => updateCompany("city", e.target.value)}
                  className="invoice-input"
                />
                <div className="invoice-two-column-grid">
                  <input
                    type="email"
                    placeholder="Email"
                    value={invoiceData.company.email}
                    onChange={(e) => updateCompany("email", e.target.value)}
                    className="invoice-input"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={invoiceData.company.phone}
                    onChange={(e) => updateCompany("phone", e.target.value)}
                    className="invoice-input"
                  />
                </div>
              </div>
            </div>

            {/* Client Info */}
            <div className="invoice-section">
              <h2 className="invoice-section-title">Bill To</h2>
              <div className="invoice-form-fields">
                <input
                  type="text"
                  placeholder="Client Name"
                  value={invoiceData.client.name}
                  onChange={(e) => updateClient("name", e.target.value)}
                  className="invoice-input"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={invoiceData.client.address}
                  onChange={(e) => updateClient("address", e.target.value)}
                  className="invoice-input"
                />
                <input
                  type="text"
                  placeholder="City, State ZIP"
                  value={invoiceData.client.city}
                  onChange={(e) => updateClient("city", e.target.value)}
                  className="invoice-input"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={invoiceData.client.email}
                  onChange={(e) => updateClient("email", e.target.value)}
                  className="invoice-input"
                />
              </div>
            </div>
          </div>

          {/* Items and Preview Section */}
          <div className="invoice-right-section">
            {/* Items */}
            <div className="invoice-section">
              <div className="invoice-section-header">
                <h2 className="invoice-section-title">Items</h2>
                <button onClick={addItem} className="invoice-add-button">
                  <Plus className="invoice-button-icon" />
                  Add Item
                </button>
              </div>
              <div className="invoice-items-list">
                {invoiceData.items.map((item, index) => (
                  <div key={index} className="invoice-item-row">
                    <input
                      type="text"
                      placeholder="Description"
                      value={item.description}
                      onChange={(e) =>
                        updateItem(index, "description", e.target.value)
                      }
                      className="invoice-input"
                    />
                    <input
                      type="number"
                      placeholder="Qty"
                      value={item.quantity}
                      onChange={(e) =>
                        updateItem(
                          index,
                          "quantity",
                          parseFloat(e.target.value) || 0
                        )
                      }
                      className="invoice-input"
                    />
                    <input
                      type="number"
                      placeholder="Rate"
                      value={item.rate}
                      onChange={(e) =>
                        updateItem(
                          index,
                          "rate",
                          parseFloat(e.target.value) || 0
                        )
                      }
                      className="invoice-input"
                    />
                    <div className="invoice-item-amount">
                      ${item.amount.toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeItem(index)}
                      className="invoice-remove-button"
                    >
                      <Trash2 className="invoice-button-icon" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Totals */}
            <div className="invoice-section">
              <h2 className="invoice-section-title">Totals</h2>
              <div className="invoice-totals-container">
                <div className="invoice-total-row">
                  <span>Subtotal:</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="invoice-total-row">
                  <span>Tax (10%):</span>
                  <span>${calculateTax().toFixed(2)}</span>
                </div>
                <div className="invoice-total-row invoice-final-total">
                  <span>Total:</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="invoice-section">
              <h2 className="invoice-section-title">Notes</h2>
              <textarea
                placeholder="Additional notes or payment terms..."
                value={invoiceData.notes}
                onChange={(e) => updateInvoiceData("notes", e.target.value)}
                className="invoice-textarea"
              />
            </div>

            {/* Generate PDF Button */}
            <button
              onClick={generateInvoicePDF}
              className="invoice-generate-button"
            >
              <Download className="invoice-button-icon" />
              Generate Invoice
            </button>
          </div>
        </div>
      </div>
    </SecondSlideLayout>
  );
};

export default SecondSlideInvoice;
