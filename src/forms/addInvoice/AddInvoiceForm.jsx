// import PopupLayout from "@/layout/common/popupLayout";
// import { Form } from "formik";
// import { Link } from "react-router-dom";

// function InvoiceFormWithField(params) {
//   return (
//     <div class="add-expense blur">
//       <div class="form">
//         <h2>Add Invoice</h2>
//         <Link to="/admin/invoices">
//           <button
//             type="button"
//             class="btn-warning close"
//             onclick="closemainPopup()"
//           >
//             Close
//           </button>
//         </Link>
//         <hr />
//         <div class="grid gtc-2 gap-10">
//           <div class="field">
//             <p class="title">
//               Invoice No. <span>(*required)</span>
//             </p>
//             <div class="flex align-center">
//               <input type="text" name="" id="" value="JAG-" disabled />
//               <input type="text" name="" id="" required class="flex-1" />
//             </div>
//           </div>
//           <div class="field">
//             <p class="title">
//               Invoice Date <span>(*required)</span>
//             </p>
//             <input type="date" name="" id="" required />
//           </div>
//           <div class="field selectBox">
//             <p class="title client-selector">Select a Client</p>
//             <input type="text" placeholder="Search here...." />
//             <ul class="list-options hide">
//               <li data-value="Manash Kakoti">Manash Kakoti</li>
//               <li data-value="Kankan Jyoti Nath">Kankan Jyoti Nath</li>
//               <li data-value="Panchanan Deka">Panchanan Deka</li>
//               <li data-value="Mintu Sharma">Mintu Sharma</li>
//               <li data-value="Dipankor Doley">Dipankor Doley</li>
//             </ul>
//           </div>
//           <div class="field">
//             <p class="title">Contact Number</p>
//             <input type="number" name="" id="" required />
//           </div>
//           <div class="field">
//             <p class="title">
//               Address<span>(*optional)</span>
//             </p>
//             <input type="text" name="" id="" />
//           </div>
//           <div class="field">
//             <p class="title">Payment Status</p>
//             <select name="cname" id="" class="">
//               <option value="">Paid</option>
//               <option value="">Unpaid</option>
//               <option value="">Cheque</option>
//               <option value="">Credit</option>
//             </select>
//           </div>
//         </div>
//         <div class="field">
//           <p class="title opacity-0">hu</p>
//           <button
//             class="btn-dashed flex align-items j-center"
//             type="button"
//             onclick="addOneItem(this)"
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
//             <span class="text">Add Item</span>
//           </button>
//         </div>
//         <div class="newItem">
//           <div class="itemGrid">
//             <div class="field">
//               <p class="title">Item</p>
//               <input type="text" name="" id="" />
//             </div>
//             <div class="field">
//               <p class="title">Quantity</p>
//               <input type="text" name="" id="" />
//             </div>
//             <div class="field">
//               <p class="title">
//                 Rate<span>(*optional)</span>
//               </p>
//               <input type="number" name="" id="" />
//             </div>
//             <div class="field">
//               <p class="title">
//                 Amount<span>(*optional)</span>
//               </p>
//               <input type="number" name="" id="" />
//             </div>
//             <div class="field">
//               <p class="opacity-0">p</p>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 id="trash-alt"
//               >
//                 <path
//                   fill=""
//                   d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
//                 ></path>
//               </svg>
//             </div>
//           </div>
//         </div>
//         <div class="grid gtc-2 gap-10">
//           <div class="field selectBox">
//             <p class="title client-selector">
//               GST Rate <span>(in %)</span>
//             </p>
//             <input type="text" placeholder="Search here...." />
//             <ul class="list-options hide">
//               <li data-value="18%">18%</li>
//               <li data-value="20%">20%</li>
//             </ul>
//           </div>
//           <div class="field">
//             <p class="title">
//               Amount<span>(in &#8377;)</span>
//             </p>
//             <input type="text" name="" id="" />
//           </div>
//           <div class="field">
//             <p class="title">
//               Discount<span>(in &#8377;)</span>
//             </p>
//             <input type="text" name="" id="" />
//           </div>
//           <div class="field">
//             <p class="title">
//               Total<span>(in &#8377;)</span>
//             </p>
//             <input type="text" name="" id="" value="" disabled />
//           </div>
//         </div>
//         <div class="action-btn flex gap-10">
//           <button type="button" class="btn-success flex-1">
//             Add
//           </button>
//           <button type="button" class="btn-warning flex-1">
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function AddInvoiceForm() {
//   return (
//     <PopupLayout>
//       <InvoiceFormWithField />
//     </PopupLayout>
//   );
// }

// export default AddInvoiceForm;


import React, { useState, useEffect } from 'react';
import PopupLayout from "@/layout/common/popupLayout";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';

// Validation Schema
const invoiceValidationSchema = Yup.object().shape({
  invoiceData: Yup.object().shape({
    invoice_no: Yup.string().required('Invoice number is required'),
    invoice_date: Yup.date().required('Invoice date is required'),
    payment_status: Yup.string().required('Payment status is required'),
    client_contact: Yup.string().required('Client contact is required'),
    client_address: Yup.string(),
    client_id: Yup.number().required('Client selection is required'),
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
  ).min(1, 'At least one item is required')
});

// Initial Values
const initialValues = {
  invoiceData: {
    invoice_no: "",
    invoice_date: "",
    payment_status: "",
    amount: "",
    gst_rate: "",
    discount: "0",
    total: "",
    client_contact: "",
    client_address: "",
    client_id: ""
  },
  invoice_items: [
    {
      inv_item_name: "",
      inv_item_quantity: "",
      inv_item_rate: "",
      inv_item_amount: ""
    }
  ]
};

// Sample clients data - replace with your actual data source
const sampleClients = [
  { id: 1, name: "Manash Kakoti", contact: "9876543210" },
  { id: 2, name: "Kankan Jyoti Nath", contact: "9876543211" },
  { id: 3, name: "Panchanan Deka", contact: "9876543212" },
  { id: 4, name: "Mintu Sharma", contact: "9876543213" },
  { id: 5, name: "Dipankor Doley", contact: "9876543214" }
];

function InvoiceFormWithField({ onSubmit, onClose }) {
  const [clientSearch, setClientSearch] = useState("");
  const [showClientList, setShowClientList] = useState(false);
  const [gstSearch, setGstSearch] = useState("");
  const [showGstList, setShowGstList] = useState(false);

  const gstRates = ["0", "5", "12", "18", "28"];

  // Calculate item amount when quantity or rate changes
  const calculateItemAmount = (quantity, rate) => {
    const qty = parseFloat(quantity) || 0;
    const rt = parseFloat(rate) || 0;
    return (qty * rt).toString();
  };

  // Calculate total amounts
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

  const handleSubmit = (values, { setSubmitting }) => {
    // Calculate final totals before submission
    const totals = calculateTotals(
      values.invoice_items, 
      values.invoiceData.gst_rate, 
      values.invoiceData.discount
    );

    const finalValues = {
      ...values,
      invoiceData: {
        ...values.invoiceData,
        ...totals
      }
    };

    console.log('Form submitted with values:', finalValues);
    
    // Call parent component's submit handler
    if (onSubmit) {
      onSubmit(finalValues);
    }
    
    setSubmitting(false);
  };

  return (
    <div className="add-expense blur">
      <div className="form">
        <h2>Add Invoice</h2>
        <Link to="/admin/invoices">
          <button
            type="button"
            className="btn-warning close"
            onClick={onClose}
          >
            Close
          </button>
        </Link>
        <hr />

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
                <div className="grid gtc-2 gap-10">
                  {/* Invoice Number */}
                  <div className="field">
                    <p className="title">
                      Invoice No. <span>(*required)</span>
                    </p>
                    <div className="flex align-center">
                      <input type="text" value="JAG-" disabled />
                      <Field
                        type="text"
                        name="invoiceData.invoice_no"
                        required
                        className="flex-1"
                      />
                    </div>
                    <ErrorMessage name="invoiceData.invoice_no" component="span" className="err" />
                  </div>

                  {/* Invoice Date */}
                  <div className="field">
                    <p className="title">
                      Invoice Date <span>(*required)</span>
                    </p>
                    <Field
                      type="date"
                      name="invoiceData.invoice_date"
                      required
                    />
                    <ErrorMessage name="invoiceData.invoice_date" component="span" className="err" />
                  </div>

                  {/* Client Selection */}
                  <div className="field selectBox">
                    <p className="title client-selector">Select a Client</p>
                    <input
                      type="text"
                      placeholder="Search here...."
                      value={clientSearch}
                      onChange={(e) => {
                        setClientSearch(e.target.value);
                        setShowClientList(true);
                      }}
                      onFocus={() => setShowClientList(true)}
                    />
                    <ul className={`list-options ${showClientList ? '' : 'hide'}`}>
                      {sampleClients
                        .filter(client => 
                          client.name.toLowerCase().includes(clientSearch.toLowerCase())
                        )
                        .map(client => (
                          <li
                            key={client.id}
                            onClick={() => {
                              setFieldValue('invoiceData.client_id', client.id);
                              setFieldValue('invoiceData.client_contact', client.contact);
                              setClientSearch(client.name);
                              setShowClientList(false);
                            }}
                          >
                            {client.name}
                          </li>
                        ))}
                    </ul>
                    <ErrorMessage name="invoiceData.client_id" component="span" className="err" />
                  </div>

                  {/* Contact Number */}
                  <div className="field">
                    <p className="title">Contact Number</p>
                    <Field
                      type="text"
                      name="invoiceData.client_contact"
                      required
                    />
                    <ErrorMessage name="invoiceData.client_contact" component="span" className="err" />
                  </div>

                  {/* Address */}
                  <div className="field">
                    <p className="title">
                      Address<span>(*optional)</span>
                    </p>
                    <Field
                      type="text"
                      name="invoiceData.client_address"
                    />
                  </div>

                  {/* Payment Status */}
                  <div className="field">
                    <p className="title">Payment Status</p>
                    <Field as="select" name="invoiceData.payment_status" required>
                      <option value="">Select Status</option>
                      <option value="paid">Paid</option>
                      <option value="unpaid">Unpaid</option>
                      <option value="cheque">Cheque</option>
                      <option value="credit">Credit</option>
                    </Field>
                    <ErrorMessage name="invoiceData.payment_status" component="span" className="err" />
                  </div>
                </div>

                {/* Invoice Items */}
                <FieldArray name="invoice_items">
                  {({ push, remove }) => (
                    <>
                      <div className="field">
                        <p className="title opacity-0">hu</p>
                        <button
                          className="btn-dashed flex align-center j-center"
                          type="button"
                          onClick={() => push({
                            inv_item_name: "",
                            inv_item_quantity: "",
                            inv_item_rate: "",
                            inv_item_amount: ""
                          })}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
                            />
                          </svg>
                          <span className="text">Add Item</span>
                        </button>
                      </div>

                      <div className="newItem">
                        {values.invoice_items.map((item, index) => (
                          <div key={index} className="itemGrid">
                            <div className="field">
                              <p className="title">Item</p>
                              <Field
                                type="text"
                                name={`invoice_items.${index}.inv_item_name`}
                              />
                              <ErrorMessage name={`invoice_items.${index}.inv_item_name`} component="span" className="err" />
                            </div>

                            <div className="field">
                              <p className="title">Quantity</p>
                              <Field
                                type="number"
                                name={`invoice_items.${index}.inv_item_quantity`}
                                onChange={(e) => {
                                  const quantity = e.target.value;
                                  setFieldValue(`invoice_items.${index}.inv_item_quantity`, quantity);
                                  const amount = calculateItemAmount(quantity, item.inv_item_rate);
                                  setFieldValue(`invoice_items.${index}.inv_item_amount`, amount);
                                }}
                              />
                              <ErrorMessage name={`invoice_items.${index}.inv_item_quantity`} component="span" className="err" />
                            </div>

                            <div className="field">
                              <p className="title">
                                Rate<span>(*optional)</span>
                              </p>
                              <Field
                                type="number"
                                name={`invoice_items.${index}.inv_item_rate`}
                                onChange={(e) => {
                                  const rate = e.target.value;
                                  setFieldValue(`invoice_items.${index}.inv_item_rate`, rate);
                                  const amount = calculateItemAmount(item.inv_item_quantity, rate);
                                  setFieldValue(`invoice_items.${index}.inv_item_amount`, amount);
                                }}
                              />
                              <ErrorMessage name={`invoice_items.${index}.inv_item_rate`} component="span" className="err" />
                            </div>

                            <div className="field">
                              <p className="title">
                                Amount<span>(*auto-calculated)</span>
                              </p>
                              <Field
                                type="number"
                                name={`invoice_items.${index}.inv_item_amount`}
                                readOnly
                              />
                            </div>

                            <div className="field">
                              <p className="opacity-0">p</p>
                              {values.invoice_items.length > 1 && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  onClick={() => remove(index)}
                                  style={{ cursor: 'pointer', fill: '#e74c3c' }}
                                >
                                  <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
                                </svg>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </FieldArray>

                {/* Totals Section */}
                <div className="grid gtc-2 gap-10">
                  {/* GST Rate */}
                  <div className="field selectBox">
                    <p className="title client-selector">
                      GST Rate <span>(in %)</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Search here...."
                      value={gstSearch}
                      onChange={(e) => {
                        setGstSearch(e.target.value);
                        setShowGstList(true);
                      }}
                      onFocus={() => setShowGstList(true)}
                    />
                    <ul className={`list-options ${showGstList ? '' : 'hide'}`}>
                      {gstRates
                        .filter(rate => rate.includes(gstSearch))
                        .map(rate => (
                          <li
                            key={rate}
                            onClick={() => {
                              setFieldValue('invoiceData.gst_rate', rate);
                              setGstSearch(`${rate}%`);
                              setShowGstList(false);
                            }}
                          >
                            {rate}%
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Amount (Auto-calculated) */}
                  <div className="field">
                    <p className="title">
                      Amount<span>(in &#8377;)</span>
                    </p>
                    <Field
                      type="text"
                      name="invoiceData.amount"
                      readOnly
                    />
                  </div>

                  {/* Discount */}
                  <div className="field">
                    <p className="title">
                      Discount<span>(in &#8377;)</span>
                    </p>
                    <Field
                      type="number"
                      name="invoiceData.discount"
                    />
                  </div>

                  {/* Total (Auto-calculated) */}
                  <div className="field">
                    <p className="title">
                      Total<span>(in &#8377;)</span>
                    </p>
                    <Field
                      type="text"
                      name="invoiceData.total"
                      readOnly
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="action-btn flex gap-10">
                  <button 
                    type="submit" 
                    className="btn-success flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Adding...' : 'Add'}
                  </button>
                  <button 
                    type="button" 
                    className="btn-warning flex-1"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

function AddInvoiceForm({ onSubmit, onClose }) {
  return (
    <PopupLayout>
      <InvoiceFormWithField onSubmit={onSubmit} onClose={onClose} />
    </PopupLayout>
  );
}

export default AddInvoiceForm;
