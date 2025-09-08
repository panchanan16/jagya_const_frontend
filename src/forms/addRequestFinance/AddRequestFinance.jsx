// import SearchInput from "@/components/searchInput/searchInput";
// import PopupLayout from "@/layout/common/popupLayout";
// import FormLayout from "@/layout/formLayout/formLayout";
// import { ErrorMessage, Field, FieldArray, Form } from "formik";
// import { Link, useParams } from "react-router-dom";
// import { initialValues, validate } from "./fields";
// import useFormSubmit from "@/hooks/useFormSubmit";
// import SelectOption from "@/components/SelectOption/SelectOption";
// import { addPhase } from "@/redux/features/settingsSlice/slice";
// import usePageRender from "@/hooks/usePageRender";

// function RequestFinanceFormWithField({ values, resetFn }) {
//   console.log(values);
//   return (
//     <Form>
//       <div class="grid gtc-3 gap-10">
//         <SearchInput
//           Name={"mr_project_ref"}
//           Label={"Project"}
//           Entity="project"
//           SetFKey={{ mr_project_id: "pro_id" }} // setting client ref key in the form which is not displayed
//           SetDisplayKey={{ id: "pro_ref_no", name: "pro_name" }}
//           editDisplayInput={values.mr_phase}
//           errorKey={"mr_project_id"}
//         />
//         <SelectOption Name={"mr_phase"} Label={"Phase"} action={addPhase} />
//         <div class="field">
//           <p class="title v-selector">Select Date</p>
//           <Field type="date" name="mr_date" id="" />
//           <ErrorMessage name="mr_date" className="err" component="span" />
//         </div>
//       </div>

//       <FieldArray name="materialItemsData">
//         {({ remove, push }) => (
//           <div>
//             <button
//               class="btn-dashed flex align-items j-center"
//               type="button"
//               onClick={() =>
//                 push({
//                   mr_item_name: "",
//                   mr_item_quantity: "",
//                   mr_item_amount: "",
//                   fd_approval: 0,
//                   vendor_id: null,
//                 })
//               }
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 id="plus-circle"
//                 class=""
//               >
//                 <path
//                   fill=""
//                   d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
//                 ></path>
//               </svg>
//               <span class="text">Add Item</span>
//             </button>
//             <div class="newItem">
//               {values.materialItemsData.map((friend, index) => (
//                 <div class="grid gap-10 inventoryGrid">
//                   <SearchInput
//                     Name={"vendor_id"}
//                     Label={"Vendor"}
//                     Entity="vendor"
//                     SetFKey={{
//                       [`materialItemsData[${index}].vendor_id`]: "vendor_id",
//                     }} // setting client ref key in the form which is not displayed
//                     SetDisplayKey={{ id: "vendor_id", name: "vendor_name" }}
//                     editDisplayInput={friend.vendor_name}
//                     errorKey={"vendor_id"}
//                   />
//                   <div class="field">
//                     <p class="title">Item</p>
//                     <Field
//                       type="text"
//                       name={`materialItemsData[${index}].mr_item_name`}
//                       id=""
//                     />
//                     <ErrorMessage
//                       name={`materialItemsData[${index}].mr_item_name`}
//                       className="err"
//                       component="span"
//                     />
//                   </div>
//                   <div class="field">
//                     <p class="title">Quantity</p>
//                     <Field
//                       type="text"
//                       name={`materialItemsData[${index}].mr_item_quantity`}
//                       id=""
//                     />
//                     <ErrorMessage
//                       name={`materialItemsData[${index}].mr_item_quantity`}
//                       className="err"
//                       component="span"
//                     />
//                   </div>

//                   <div class="field">
//                     <p class="title">Amount</p>
//                     <Field
//                       type="text"
//                       name={`materialItemsData[${index}].mr_item_amount`}
//                       id=""
//                     />
//                     <ErrorMessage
//                       name={`materialItemsData[${index}].mr_item_amount`}
//                       className="err"
//                       component="span"
//                     />
//                   </div>

//                   <div class="field">
//                     <p class="title v-selector">Select Status</p>
//                     <Field
//                       as="select"
//                       name={`materialItemsData[${index}].fd_approval`}
//                       id=""
//                       class="v-selector"
//                     >
//                       <option value="1">Approve</option>
//                       <option value="0">Decline</option>
//                     </Field>
//                     <ErrorMessage
//                       name={`materialItemsData[${index}].fd_approval`}
//                       className="err"
//                       component="span"
//                     />
//                   </div>

//                   <div class="field" onClick={() => remove(index)}>
//                     <p class="opacity-0 title">p</p>
//                     <button type="button" className="btn-warning delete">
//                       Delete Item
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </FieldArray>

//       <div class="action-btn flex gap-10">
//         <button type="submit" class="btn-success flex-1">
//           Confirm
//         </button>
//         <button
//           type="button"
//           class="btn-warning flex-1"
//           onClick={() => resetFn()}
//         >
//           Cancel
//         </button>
//       </div>
//     </Form>
//   );
// }

// function AddRequestFinance() {
//   const [submithandler, initialSchema, validateSchema, isReturn, urlParam] =
//     useFormSubmit(initialValues, validate, "mr_r_id", {
//       name: "material_req",
//       route: "create",
//     });
//   const { id } = useParams();
//   const { itemData } = usePageRender({
//     entity: "material_req",
//     tail: `realAll_by_materialId/${id}`,
//     key: "itemData",
//     loc: location,
//   });

//   function addRequest(values) {
//     console.log(values);
//     alert(JSON.stringify(values));
//   }

//   return (
//     <PopupLayout>
//       <div class="add-collection blur">
//         <div class="form">
//           <h2>Request Materials</h2>
//           <Link to={`/admin/finance-request/${urlParam}`}>
//             <button type="button" class="btn-warning close">
//               Close
//             </button>
//           </Link>
//           <hr />
//           <FormLayout
//             MainForm={RequestFinanceFormWithField}
//             initialValues={initialSchema}
//             validationSchema={validateSchema}
//             formHandler={submithandler}
//             isReturn={isReturn}
//           />
//         </div>
//       </div>
//     </PopupLayout>
//   );
// }

// export default AddRequestFinance;

import SearchInput from "@/components/searchInput/searchInput";
import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, FieldArray, Form } from "formik";
import { Link, useParams } from "react-router-dom";
import { initialValues, validate } from "./fields";
import useFormSubmit from "@/hooks/useFormSubmit";
import SelectOption from "@/components/SelectOption/SelectOption";
import { addPhase } from "@/redux/features/settingsSlice/slice";
import usePageRender from "@/hooks/usePageRender";
import styles from "@/forms/form.module.css";

function RequestFinanceFormWithField({ values, resetFn }) {
  console.log(values);
  return (
    <Form>
      <div className={`${styles.formGrid} ${styles.formGridThreeColumns}`}>
        <SearchInput
          Name={"mr_project_ref"}
          Label={"Project"}
          Entity="project"
          SetFKey={{ mr_project_id: "pro_id" }} // setting client ref key in the form which is not displayed
          SetDisplayKey={{ id: "pro_ref_no", name: "pro_name" }}
          editDisplayInput={values.mr_phase}
          errorKey={"mr_project_id"}
        />
        <SelectOption Name={"mr_phase"} Label={"Phase"} action={addPhase} />
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Select Date</label>
          <Field
            type="date"
            name="mr_date"
            id=""
            className={styles.formInput}
          />
          <ErrorMessage
            name="mr_date"
            className={styles.errorMessage}
            component="span"
          />
        </div>
      </div>

      <FieldArray name="materialItemsData">
        {({ remove, push }) => (
          <div className={styles.formSection}>
            <button
              className={`${styles.secondaryButton} ${styles.buttonFullWidth}`}
              type="button"
              onClick={() =>
                push({
                  mr_item_name: "",
                  mr_item_quantity: "",
                  mr_item_amount: "",
                  fd_approval: 0,
                  vendor_id: null,
                })
              }
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                border: "2px dashed #e5e7eb",
                background: "transparent",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="plus-circle"
                style={{ width: "20px", height: "20px" }}
              >
                <path
                  fill="currentColor"
                  d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
                ></path>
              </svg>
              <span>Add Item</span>
            </button>

            <div style={{ marginTop: "24px" }}>
              {values.materialItemsData.map((friend, index) => (
                <div
                  key={index}
                  className={styles.formSection}
                  style={{ marginBottom: "16px" }}
                >
                  <div
                    className={`${styles.formGrid} ${styles.formGridSingleColumn}`}
                    style={{ gap: "16px" }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "16px",
                      }}
                    >
                      <SearchInput
                        Name={"vendor_id"}
                        Label={"Vendor"}
                        Entity="vendor"
                        SetFKey={{
                          [`materialItemsData[${index}].vendor_id`]:
                            "vendor_id",
                        }} // setting client ref key in the form which is not displayed
                        SetDisplayKey={{ id: "vendor_id", name: "vendor_name" }}
                        editDisplayInput={friend.vendor_name}
                        errorKey={"vendor_id"}
                      />

                      <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Item</label>
                        <Field
                          type="text"
                          name={`materialItemsData[${index}].mr_item_name`}
                          id=""
                          className={styles.formInput}
                        />
                        <ErrorMessage
                          name={`materialItemsData[${index}].mr_item_name`}
                          className={styles.errorMessage}
                          component="span"
                        />
                      </div>

                      <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Quantity</label>
                        <Field
                          type="text"
                          name={`materialItemsData[${index}].mr_item_quantity`}
                          id=""
                          className={styles.formInput}
                        />
                        <ErrorMessage
                          name={`materialItemsData[${index}].mr_item_quantity`}
                          className={styles.errorMessage}
                          component="span"
                        />
                      </div>

                      <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Amount</label>
                        <Field
                          type="text"
                          name={`materialItemsData[${index}].mr_item_amount`}
                          id=""
                          className={styles.formInput}
                        />
                        <ErrorMessage
                          name={`materialItemsData[${index}].mr_item_amount`}
                          className={styles.errorMessage}
                          component="span"
                        />
                      </div>

                      <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>
                          Select Status
                        </label>
                        <Field
                          as="select"
                          name={`materialItemsData[${index}].fd_approval`}
                          id=""
                          className={styles.formSelect}
                        >
                          <option value="1">Approve</option>
                          <option value="0">Decline</option>
                        </Field>
                        <ErrorMessage
                          name={`materialItemsData[${index}].fd_approval`}
                          className={styles.errorMessage}
                          component="span"
                        />
                      </div>

                      <div
                        className={styles.fieldGroup}
                        style={{ alignSelf: "end" }}
                      >                      
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className={styles.secondaryButton}
                          style={{
                            background: "#fee2e2",
                            color: "#dc2626",
                            border: "1px solid #fecaca",
                            padding: "8px",
                            borderRadius: "6px",
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            minWidth: "40px",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = "#fecaca";
                            e.target.style.transform = "translateY(-1px)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = "#fee2e2";
                            e.target.style.transform = "translateY(0)";
                          }}              
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            id="trash-alt"
                            style={{
                              width: "16px",
                              height: "16px",
                              fill: "currentColor",
                            }}
                          >
                            <path
                              fill=""
                              d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </FieldArray>

      <div className={styles.formActions}>
        <button
          type="submit"
         className={`btn-success ${styles.primaryButton}`}
        >
          Confirm
        </button>
        <button
          type="button"
          className={`btn-warning ${styles.secondaryButton}`}
          onClick={() => resetFn()}
        >
          Cancel
        </button>
      </div>
    </Form>
  );
}

function AddRequestFinance() {
  const [submithandler, initialSchema, validateSchema, isReturn, urlParam] =
    useFormSubmit(initialValues, validate, "mr_r_id", {
      name: "material_req",
      route: "create",
    });
  const { id } = useParams();
  const { itemData } = usePageRender({
    entity: "material_req",
    tail: `realAll_by_materialId/${id}`,
    key: "itemData",
    loc: location,
  });

  function addRequest(values) {
    console.log(values);
    alert(JSON.stringify(values));
  }

  return (
    <PopupLayout>
      <div
        className={`add-collection blur ${styles.formContainer} ${styles.formContainerLarge}`}
      >
        {/* <div className={styles.formContainer}> */}
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Request Materials</h2>
            <Link to={`/admin/finance-request/${urlParam}`}>
              <button type="button" className={styles.closeButton}>
                ✕ Close
              </button>
            </Link>
          </div>
          <hr className={styles.divider} />
          <div className={styles.formBody}>
            <FormLayout
              MainForm={RequestFinanceFormWithField}
              initialValues={initialSchema}
              validationSchema={validateSchema}
              formHandler={submithandler}
              isReturn={isReturn}
            />
          </div>
        </div>
      {/* </div> */}
    </PopupLayout>
  );
}

export default AddRequestFinance;
