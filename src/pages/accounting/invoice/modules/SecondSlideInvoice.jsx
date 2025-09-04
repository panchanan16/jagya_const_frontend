import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from 'yup';
import { Download, Plus, Trash2 } from "lucide-react";
import SecondSlideLayout from "@/layout/common/secondSlideLayout";

// Validation Schema
const invoiceValidationSchema = Yup.object().shape({
  invoiceData: Yup.object().shape({
    invoice_no: Yup.string().required('Invoice number is required'),
    invoice_date: Yup.date().required('Invoice date is required'),
    payment_status: Yup.string().required('Payment status is required'),
    client_contact: Yup.string().required('Client contact is required'),
    client_address: Yup.string().required('Client address is required'),
    client_id: Yup.number().required('Client ID is required'),
    amount: Yup.number().min(0, 'Amount must be positive'),
    gst_rate: Yup.number().min(0, 'GST rate must be positive'),
    discount: Yup.number().min(0, 'Discount must be positive'),
    total: Yup.number().min(0, 'Total must be positive')
  }),
  invoice_items: Yup.array().of(
    Yup.object().shape({
      inv_item_name: Yup.string().required('Item name is required'),
      inv_item_quantity: Yup.number().required('Quantity is required').min(1, 'Quantity must be at least 1'),
      inv_item_rate: Yup.number().required('Rate is required').min(0, 'Rate must be positive'),
      inv_item_amount: Yup.number().required('Amount is required').min(0, 'Amount must be positive')
    })
  ).min(1, 'At least one item is required'),
  // Company info for PDF generation
  company: Yup.object().shape({
    name: Yup.string().required('Company name is required'),
    address: Yup.string().required('Company address is required'),
    city: Yup.string().required('Company city is required'),
    email: Yup.string().email('Invalid email').required('Company email is required'),
    phone: Yup.string().required('Company phone is required')
  }),
  client: Yup.object().shape({
    name: Yup.string().required('Client name is required'),
    email: Yup.string().email('Invalid email')
  }),
  notes: Yup.string()
});

// Initial Values matching your required format
const initialValues = {
  invoiceData: {
    invoice_no: "INV-2024-001",
    invoice_date: new Date().toISOString().split("T")[0],
    payment_status: "unpaid",
    amount: "0",
    gst_rate: "18",
    discount: "0",
    total: "0",
    client_contact: "",
    client_address: "",
    client_id: ""
  },
  invoice_items: [
    {
      inv_item_name: "",
      inv_item_quantity: "1",
      inv_item_rate: "0",
      inv_item_amount: "0"
    }
  ],
  // Additional fields for PDF generation and form completeness
  company: {
    name: "Jagya Construction Pvt. Ltd",
    address: "Panjabari, Guwahati",
    city: "Guwahati, Assam 781037",
    email: "info@jagyaconstruction.com",
    phone: "98765543322",
  },
  client: {
    name: "",
    email: "",
  },
  notes: "Thank you for your business!",
  due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]
};

const SecondSlideInvoice = ({ onSubmit, onClose }) => {
  // Calculate item amount when quantity or rate changes
  const calculateItemAmount = (quantity, rate) => {
    const qty = parseFloat(quantity) || 0;
    const rt = parseFloat(rate) || 0;
    return (qty * rt).toString();
  };

  // Calculate totals
  const calculateTotals = (items, gstRate, discount) => {
    const subtotal = items.reduce((sum, item) => {
      return sum + (parseFloat(item.inv_item_amount) || 0);
    }, 0);

    const gst = (subtotal * (parseFloat(gstRate) || 0)) / 100;
    const discountAmount = parseFloat(discount) || 0;
    const total = subtotal + gst - discountAmount;

    return {
      amount: subtotal.toString(),
      total: total.toString()
    };
  };

  // PDF Generation Function
  const generateInvoicePDF = (values) => {
    const subtotal = parseFloat(values.invoiceData.amount);
    const gstAmount = (subtotal * parseFloat(values.invoiceData.gst_rate)) / 100;
    const discount = parseFloat(values.invoiceData.discount);
    const total = parseFloat(values.invoiceData.total);

    const printWindow = window.open("", "_blank");

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Invoice ${values.invoiceData.invoice_no}</title>
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
              <h1>${values.company.name}</h1>
              <p>${values.company.address}</p>
              <p>${values.company.city}</p>
              <p>Email: ${values.company.email}</p>
              <p>Phone: ${values.company.phone}</p>
            </div>
            <div class="invoice-info">
              <h2>INVOICE</h2>
              <p><strong>Invoice #:</strong> ${values.invoiceData.invoice_no}</p>
              <p><strong>Date:</strong> ${new Date(values.invoiceData.invoice_date).toLocaleDateString()}</p>
              <p><strong>Due Date:</strong> ${new Date(values.due_date).toLocaleDateString()}</p>
              <p><strong>Status:</strong> ${values.invoiceData.payment_status.toUpperCase()}</p>
            </div>
          </div>

          <div class="billing-section">
            <div class="bill-to">
              <h3>Bill To:</h3>
              <p><strong>${values.client.name}</strong></p>
              <p>${values.invoiceData.client_address}</p>
              <p>Contact: ${values.invoiceData.client_contact}</p>
              ${values.client.email ? `<p>Email: ${values.client.email}</p>` : ''}
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
              ${values.invoice_items
                .map(
                  (item) => `
                <tr>
                  <td>${item.inv_item_name}</td>
                  <td class="text-right">${item.inv_item_quantity}</td>
                  <td class="text-right">₹${parseFloat(item.inv_item_rate).toFixed(2)}</td>
                  <td class="text-right">₹${parseFloat(item.inv_item_amount).toFixed(2)}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>

          <div class="totals-section">
            <div class="total-row">
              <span>Subtotal:</span>
              <span>₹${subtotal.toFixed(2)}</span>
            </div>
            <div class="total-row">
              <span>GST (${values.invoiceData.gst_rate}%):</span>
              <span>₹${gstAmount.toFixed(2)}</span>
            </div>
            <div class="total-row">
              <span>Discount:</span>
              <span>₹${discount.toFixed(2)}</span>
            </div>
            <div class="total-row final">
              <span>Total:</span>
              <span>₹${total.toFixed(2)}</span>
            </div>
          </div>

          ${
            values.notes
              ? `
            <div class="notes">
              <h4>Notes:</h4>
              <p>${values.notes}</p>
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

    printWindow.onload = () => {
      printWindow.print();
    };
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Calculate final totals before submission
    const totals = calculateTotals(
      values.invoice_items,
      values.invoiceData.gst_rate,
      values.invoiceData.discount
    );

    const finalValues = {
      invoiceData: {
        ...values.invoiceData,
        ...totals
      },
      invoice_items: values.invoice_items
    };

    console.log('Invoice form submitted:', finalValues);

    if (onSubmit) {
      onSubmit(finalValues);
    }

    setSubmitting(false);
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
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
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
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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

        .invoice-items-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .invoice-item-row {
          display: grid;
          grid-template-columns: 3fr 1fr 1fr 1fr 40px;
          gap: 8px;
          align-items: center;
        }

        .invoice-item-amount {
          padding: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          background: #f3f4f6;
          border-radius: 4px;
          text-align: center;
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
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }

        .invoice-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }

        .err {
          color: #dc2626;
          font-size: 12px;
          margin-top: 4px;
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

          .invoice-details-grid {
            grid-template-columns: 1fr;
          }

          .invoice-two-column-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="invoice-container">
        <div className="invoice-header">
          <h1 className="invoice-title">Generate Invoice</h1>
          <p className="invoice-subtitle">Create and generate PDF invoices</p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={invoiceValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, isSubmitting }) => {
            // Auto-calculate totals when values change
            useEffect(() => {
              const totals = calculateTotals(
                values.invoice_items,
                values.invoiceData.gst_rate,
                values.invoiceData.discount
              );
              setFieldValue('invoiceData.amount', totals.amount);
              setFieldValue('invoiceData.total', totals.total);
            }, [values.invoice_items, values.invoiceData.gst_rate, values.invoiceData.discount, setFieldValue]);

            return (
              <Form>
                <div className="invoice-main-grid">
                  {/* Form Section */}
                  <div className="invoice-form-section">
                    {/* Invoice Details */}
                    <div className="invoice-section">
                      <h2 className="invoice-section-title">Invoice Details</h2>
                      <div className="invoice-details-grid">
                        <div className="invoice-form-group">
                          <label className="invoice-label">Invoice Number</label>
                          <Field
                            name="invoiceData.invoice_no"
                            className="invoice-input"
                          />
                          <ErrorMessage name="invoiceData.invoice_no" component="div" className="err" />
                        </div>
                        <div className="invoice-form-group">
                          <label className="invoice-label">Date</label>
                          <Field
                            type="date"
                            name="invoiceData.invoice_date"
                            className="invoice-input"
                          />
                          <ErrorMessage name="invoiceData.invoice_date" component="div" className="err" />
                        </div>
                        <div className="invoice-form-group">
                          <label className="invoice-label">Due Date</label>
                          <Field
                            type="date"
                            name="due_date"
                            className="invoice-input"
                          />
                        </div>
                        <div className="invoice-form-group">
                          <label className="invoice-label">Payment Status</label>
                          <Field as="select" name="invoiceData.payment_status" className="invoice-input">
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                            <option value="partial">Partial</option>
                            <option value="overdue">Overdue</option>
                          </Field>
                          <ErrorMessage name="invoiceData.payment_status" component="div" className="err" />
                        </div>
                        <div className="invoice-form-group">
                          <label className="invoice-label">Client ID</label>
                          <Field
                            type="number"
                            name="invoiceData.client_id"
                            className="invoice-input"
                          />
                          <ErrorMessage name="invoiceData.client_id" component="div" className="err" />
                        </div>
                        <div className="invoice-form-group">
                          <label className="invoice-label">GST Rate (%)</label>
                          <Field
                            type="number"
                            name="invoiceData.gst_rate"
                            className="invoice-input"
                          />
                          <ErrorMessage name="invoiceData.gst_rate" component="div" className="err" />
                        </div>
                      </div>
                    </div>

                    {/* Company Info */}
                    <div className="invoice-section">
                      <h2 className="invoice-section-title">Your Company</h2>
                      <div className="invoice-form-fields">
                        <Field
                          name="company.name"
                          placeholder="Company Name"
                          className="invoice-input"
                        />
                        <ErrorMessage name="company.name" component="div" className="err" />
                        
                        <Field
                          name="company.address"
                          placeholder="Address"
                          className="invoice-input"
                        />
                        <ErrorMessage name="company.address" component="div" className="err" />
                        
                        <Field
                          name="company.city"
                          placeholder="City, State ZIP"
                          className="invoice-input"
                        />
                        <ErrorMessage name="company.city" component="div" className="err" />
                        
                        <div className="invoice-two-column-grid">
                          <div>
                            <Field
                              type="email"
                              name="company.email"
                              placeholder="Email"
                              className="invoice-input"
                            />
                            <ErrorMessage name="company.email" component="div" className="err" />
                          </div>
                          <div>
                            <Field
                              type="tel"
                              name="company.phone"
                              placeholder="Phone"
                              className="invoice-input"
                            />
                            <ErrorMessage name="company.phone" component="div" className="err" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Client Info */}
                    <div className="invoice-section">
                      <h2 className="invoice-section-title">Bill To</h2>
                      <div className="invoice-form-fields">
                        <Field
                          name="client.name"
                          placeholder="Client Name"
                          className="invoice-input"
                        />
                        <ErrorMessage name="client.name" component="div" className="err" />
                        
                        <Field
                          name="invoiceData.client_address"
                          placeholder="Client Address"
                          className="invoice-input"
                        />
                        <ErrorMessage name="invoiceData.client_address" component="div" className="err" />
                        
                        <div className="invoice-two-column-grid">
                          <div>
                            <Field
                              name="invoiceData.client_contact"
                              placeholder="Client Contact"
                              className="invoice-input"
                            />
                            <ErrorMessage name="invoiceData.client_contact" component="div" className="err" />
                          </div>
                          <div>
                            <Field
                              type="email"
                              name="client.email"
                              placeholder="Client Email"
                              className="invoice-input"
                            />
                            <ErrorMessage name="client.email" component="div" className="err" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Items and Preview Section */}
                  <div className="invoice-right-section">
                    {/* Items */}
                    <div className="invoice-section">
                      <div className="invoice-section-header">
                        <h2 className="invoice-section-title">Items</h2>
                      </div>
                      <FieldArray name="invoice_items">
                        {({ push, remove }) => (
                          <>
                            <button
                              type="button"
                              onClick={() => push({
                                inv_item_name: "",
                                inv_item_quantity: "1",
                                inv_item_rate: "0",
                                inv_item_amount: "0"
                              })}
                              className="btn-primary"
                              style={{ marginBottom: "16px" }}
                            >
                              <Plus style={{ width: "16px", height: "16px" }} />
                              Add Item
                            </button>
                            <div className="invoice-items-list">
                              {values.invoice_items.map((item, index) => (
                                <div key={index} className="invoice-item-row">
                                  <div>
                                    <label>Item / Installments</label>
                                    <Field
                                      name={`invoice_items.${index}.inv_item_name`}
                                      placeholder="Description"
                                      className="invoice-input"
                                    />
                                    <ErrorMessage name={`invoice_items.${index}.inv_item_name`} component="div" className="err" />
                                  </div>
                                  
                                  <div>
                                    <label>Quantity</label>
                                    <Field
                                      type="number"
                                      name={`invoice_items.${index}.inv_item_quantity`}
                                      placeholder="Qty"
                                      className="invoice-input"
                                      onChange={(e) => {
                                        const quantity = e.target.value;
                                        setFieldValue(`invoice_items.${index}.inv_item_quantity`, quantity);
                                        const amount = calculateItemAmount(quantity, item.inv_item_rate);
                                        setFieldValue(`invoice_items.${index}.inv_item_amount`, amount);
                                      }}
                                    />
                                    <ErrorMessage name={`invoice_items.${index}.inv_item_quantity`} component="div" className="err" />
                                  </div>
                                  
                                  <div>
                                    <label>Rate</label>
                                    <Field
                                      type="number"
                                      name={`invoice_items.${index}.inv_item_rate`}
                                      placeholder="Rate"
                                      className="invoice-input"
                                      onChange={(e) => {
                                        const rate = e.target.value;
                                        setFieldValue(`invoice_items.${index}.inv_item_rate`, rate);
                                        const amount = calculateItemAmount(item.inv_item_quantity, rate);
                                        setFieldValue(`invoice_items.${index}.inv_item_amount`, amount);
                                      }}
                                    />
                                    <ErrorMessage name={`invoice_items.${index}.inv_item_rate`} component="div" className="err" />
                                  </div>
                                  
                                  <div className="invoice-item-amount">
                                    ₹{parseFloat(item.inv_item_amount || 0).toFixed(2)}
                                  </div>
                                  
                                  {values.invoice_items.length > 1 && (
                                    <button
                                      type="button"
                                      onClick={() => remove(index)}
                                      className="invoice-remove-button"
                                    >
                                      <Trash2 style={{ width: "16px", height: "16px" }} />
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </FieldArray>
                    </div>

                    {/* Discount and Totals */}
                    <div className="invoice-section">
                      <h2 className="invoice-section-title">Pricing</h2>
                      <div className="invoice-form-group" style={{ marginBottom: "16px" }}>
                        <label className="invoice-label">Discount (₹)</label>
                        <Field
                          type="number"
                          name="invoiceData.discount"
                          className="invoice-input"
                        />
                      </div>
                      
                      <div className="invoice-totals-container">
                        <div className="invoice-total-row">
                          <span>Subtotal:</span>
                          <span>₹{parseFloat(values.invoiceData.amount || 0).toFixed(2)}</span>
                        </div>
                        <div className="invoice-total-row">
                          <span>GST ({values.invoiceData.gst_rate}%):</span>
                          <span>₹{((parseFloat(values.invoiceData.amount || 0) * parseFloat(values.invoiceData.gst_rate || 0)) / 100).toFixed(2)}</span>
                        </div>
                        <div className="invoice-total-row">
                          <span>Discount:</span>
                          <span>₹{parseFloat(values.invoiceData.discount || 0).toFixed(2)}</span>
                        </div>
                        <div className="invoice-total-row invoice-final-total">
                          <span>Total:</span>
                          <span>₹{parseFloat(values.invoiceData.total || 0).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="invoice-section">
                      <h2 className="invoice-section-title">Notes</h2>
                      <Field
                        as="textarea"
                        name="notes"
                        placeholder="Additional notes or payment terms..."
                        className="invoice-textarea"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: "flex", gap: "12px" }}>
                      <button
                        type="button"
                        onClick={() => generateInvoicePDF(values)}
                        className="btn-primary"
                        style={{ flex: 1 }}
                      >
                        <Download style={{ width: "16px", height: "16px" }} />
                        Generate PDF
                      </button>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary"
                        style={{ flex: 1 }}
                      >
                        {isSubmitting ? "Saving..." : "Save Invoice"}
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </SecondSlideLayout>
  );
};

export default SecondSlideInvoice;




