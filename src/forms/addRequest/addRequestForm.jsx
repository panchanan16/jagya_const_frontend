// import SearchInput from "@/components/searchInput/searchInput";
// import PopupLayout from "@/layout/common/popupLayout";
// import FormLayout from "@/layout/formLayout/formLayout";
// import { ErrorMessage, Field, FieldArray, Form } from "formik";
// import { Link } from "react-router-dom";
// import { initialValues, validate } from "./fields";
// import useFormSubmit from "@/hooks/useFormSubmit";
// import SelectOption from "@/components/SelectOption/SelectOption";
// import { addPhase } from "@/redux/features/settingsSlice/slice";

// function RequestFormWithField({ values, resetFn }) {
//   return (
//     <Form>
//       <div class="grid gtc-3 gap-10">
//         <SearchInput
//           Name={"mr_project_ref"}
//           Label={"Project"}
//           Entity={"project"}
//           SetFKey={{mr_project_id: "pro_id"}}
//           SetDisplayKey={{ id: "pro_ref_no", name: "pro_name" }}
//           errorKey={'mr_project_id'}
//         />
//         <SelectOption Name={"mr_phase"} Label={"Phase"} action={addPhase} />
//         <div class="field">
//           <p class="title v-selector">Select Date</p>
//           <Field
//             type="date"
//             name="mr_date"
//             id=""
//           />
//           <ErrorMessage name="mr_date" className="err" component="span" />
//         </div>
//       </div>

//       <FieldArray name="materialItemsData">
//         {({ remove, push }) => (
//           <div>
//             <button
//               class="btn-dashed flex align-items j-center"
//               type="button"
//               onClick={() => push({ mr_item_name: "", mr_item_quantity: "" })}
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
//             {values.materialItemsData.map((friend, index) => (
//                 <div class="grid gap-10 inchargeGrid">
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
//                   <div class="field" onClick={() => remove(index)}>
//                     <p class="opacity-0 title">p</p>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       id="trash-alt"
//                     >
//                       <path
//                         fill=""
//                         d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
//                       ></path>
//                     </svg>
//                   </div>
//                 </div>
//             ))}
//             </div>
//           </div>
//         )}
//       </FieldArray>

//       <div class="action-btn flex gap-10">
//         <button type="submit" class="btn-success flex-1">
//           Request
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

// function AddRequestForm() {
//   const [submithandler, initialSchema, validateSchema, isReturn] =
//     useFormSubmit(initialValues, validate, "mr_r_id", {name: "material_req", route: "create"});

//   function addRequest(values) {
//     console.log(values);
//     alert(JSON.stringify(values));
//   }

//   function addnewproject(params) {
    
//   }

//   return (
//     <PopupLayout>
//       <div class="add-collection blur">
//         <div class="form">
//           <h2>Request Materials</h2>
//           <Link to="/admin/incharge">
//             <button type="button" class="btn-warning close">
//               Close
//             </button>
//           </Link>
//           <hr />
//           <FormLayout
//             MainForm={RequestFormWithField}
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

// export default AddRequestForm;



import SearchInput from "@/components/searchInput/searchInput";
import PopupLayout from "@/layout/common/popupLayout";
import FormLayout from "@/layout/formLayout/formLayout";
import { ErrorMessage, Field, FieldArray, Form } from "formik";
import { Link } from "react-router-dom";
import { initialValues, validate } from "./fields";
import useFormSubmit from "@/hooks/useFormSubmit";
import SelectOption from "@/components/SelectOption/SelectOption";
import { addPhase } from "@/redux/features/settingsSlice/slice";
import styles from "@/forms/form.module.css";

function RequestFormWithField({ values, resetFn }) {
  console.log("Maal is rendering...")
  return (
    <Form>
      <div className={`${styles.formGrid} ${styles.formGridThreeColumns}`}>
        <SearchInput
          Name={"mr_project_ref"}
          Label={"Project"}
          Entity={"project"}
          SetFKey={{mr_project_id: "pro_id"}}
          SetDisplayKey={{ id: "pro_ref_no", name: "pro_name" }}
          errorKey={'mr_project_id'}
        />
        <SelectOption Name={"mr_phase"} Label={"Phase"} action={addPhase} byProjectId={values.mr_project_id} isProjectPhase={true} />
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Select Date</label>
          <Field
            type="date"
            name="mr_date"
            id=""
            className={styles.formInput}
          />
          <ErrorMessage name="mr_date" className={styles.errorMessage} component="span" />
        </div>
      </div>

      <FieldArray name="materialItemsData">
        {({ remove, push }) => (
          <div className={styles.formSection}>
            <button
              className={`${styles.secondaryButton} ${styles.buttonFullWidth}`}
              type="button"
              onClick={() => push({ mr_item_name: "", mr_item_quantity: "" })}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                border: '2px dashed #e5e7eb',
                background: 'transparent'
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="plus-circle"
                style={{ width: '20px', height: '20px' }}
              >
                <path
                  fill="currentColor"
                  d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
                ></path>
              </svg>
              <span>Add Item</span>
            </button>
            
            <div style={{ marginTop: '24px' }}>
              {values.materialItemsData.map((friend, index) => (
                <div 
                  key={index}
                  className={styles.formSection}
                  style={{ marginBottom: '16px' }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '16px', alignItems: 'end' }}>
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
                    
                    <div className={styles.fieldGroup} onClick={() => remove(index)}>
                      <button
                        type="button"
                        className={styles.primaryButtonRed}
                        style={{
                          padding: '8px',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          border: 'none'
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          id="trash-alt"
                          style={{ width: '16px', height: '16px' }}
                        >
                          <path
                            fill="currentColor"
                            d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </FieldArray>

      <div className={styles.formActions}>
        <button type="submit" className={`btn-success ${styles.primaryButton}`}>
          Request
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

function AddRequestForm() {
  const [submithandler, initialSchema, validateSchema, isReturn] =
    useFormSubmit(initialValues, validate, "mr_r_id", {name: "material_req", route: "create"});

  function addRequest(values) {
    console.log(values);
    alert(JSON.stringify(values));
  }

  return (
    <PopupLayout>
      <div className="add-collection blur">
        {/* <div className={styles.formContainer}> */}
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Request Materials</h2>
            <Link to="/admin/incharge">
              <button type="button" className={styles.closeButton}>
                Close
              </button>
            </Link>
          </div>
          <hr className={styles.divider} />
          <div className={styles.formBody}>
            <FormLayout
              MainForm={RequestFormWithField}
              initialValues={initialSchema}
              validationSchema={validateSchema}
              formHandler={submithandler}
              isReturn={isReturn}
            />
          </div>
        {/* </div> */}
      </div>
    </PopupLayout>
  );
}

export default AddRequestForm;
