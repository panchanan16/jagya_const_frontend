// import useRequest from "@/hooks/useRequest";
// import FormLayout from "@/layout/formLayout/formLayout";
// import { addPhase, deletePhase, insertPhase } from "@/redux/features/settingsSlice/slice";
// import { _GET, _POST } from "@/request/request";
// import { validateForm } from "@/utils/validation/formValidation";
// import { ErrorMessage, Field, Form } from "formik";
// import { useSelector } from "react-redux";

// function InputField() {
//   return (
//     <Form>
//         <div>
//           <Field
//             type="text"
//             name="phase_name"
//             id=""
//           />
//           <ErrorMessage name="phase_name" className="err" component="span" />
//         </div>
//         <button className="btn-primary" type="submit">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             id="plus-circle"
//             className=""
//           >
//             <path
//               fill=""
//               d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
//             ></path>
//           </svg>
//           <span className="text">Add</span>
//         </button>
//     </Form>
//   );
// }

// const initialValues = {
//   phase_name: "",
// };

// const validate = {
//   phase_name: "name",
// };

// function WorkType() {
//   const validationSchema = validateForm(validate);
//   const { phaseList } = useSelector((state) => state.settings);
//   const { makeRequest, deleteRequest, loading } = useRequest("phase", addPhase);

//   const addAPhase = async (values) => {
//     makeRequest(values, insertPhase);
//   };

//   async function deleteNewPhase(id) {
//     await deleteRequest({id}, deletePhase)
//   }

//   return (
//     <div className="work-type grid-box">
//       <div className="title flex align-center">
//         <span className="dot"></span>
//         <span className="text flex-1 uppercase">Work Type {loading && "Loading"}</span>
//       </div>
//       <div className="set-details">
//         <FormLayout
//           MainForm={InputField}
//           isReturn={true}
//           formHandler={addAPhase}
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//         />
//       </div>

//       <div className="edit-details">
//         <ul>
//           {phaseList.length &&
//             phaseList.map((item, key) => (
//               <li class="flex align-center" key={key}>
//                 <span class="dot"></span>
//                 <span class="flex-1">{item.phase_name}</span>
//                 <button class="btn-secondary" onclick="editWorkType(this)">
//                   Edit
//                 </button>
//                 <span class="flex align-center j-center icon" onClick={()=> deleteNewPhase(item.phase_id)}>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     id="trash-alt"
//                   >
//                     <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path>
//                   </svg>
//                 </span>
//               </li>

//               // <div key={key} className="set-title flex align-center j-between">
//               //   <h2>{item.phase_name}</h2>
//               //   <div className="flex">
//               //     <span
//               //       className="flex align-center j-center"
//               //     >
//               //       <svg
//               //         xmlns="http://www.w3.org/2000/svg"
//               //         viewBox="0 0 24 24"
//               //         id="pen"
//               //       >
//               //         <path d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z"></path>
//               //       </svg>
//               //     </span>
//               //     <span className="flex align-center j-center">
//               //       <svg
//               //         xmlns="http://www.w3.org/2000/svg"
//               //         viewBox="0 0 24 24"
//               //         id="trash-alt"
//               //       >
//               //         <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path>
//               //       </svg>
//               //     </span>
//               //   </div>
//               // </div>
//             ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default WorkType;

import useRequest from "@/hooks/useRequest";
import FormLayout from "@/layout/formLayout/formLayout";
import {
  addPhase,
  deletePhase,
  insertPhase,
} from "@/redux/features/settingsSlice/slice";
import { _GET, _POST } from "@/request/request";
import { validateForm } from "@/utils/validation/formValidation";
import { ErrorMessage, Field, Form } from "formik";
import { useSelector } from "react-redux";
import styles from "./WorkType.module.css";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";

function InputField() {
  return (
    <Form className={styles.inputForm}>
      <div className={styles.inputField}>
        <Field
          type="text"
          name="phase_name"
          placeholder="Enter work type name..."
          className={styles.textInput}
        />
        <ErrorMessage
          name="phase_name"
          className={styles.errorMessage}
          component="span"
        />
      </div>
      <button className={styles.addButton} type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="plus-circle"
          className={styles.addIcon}
        >
          <path
            fill="currentColor"
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
          ></path>
        </svg>
        <span className="text">Add</span>
      </button>
    </Form>
  );
}

const initialValues = {
  phase_name: "",
};

const validate = {
  phase_name: "name",
};

function WorkType() {
  const validationSchema = validateForm(validate);
  const { phaseList } = useSelector((state) => state.settings);
  const { makeRequest, deleteRequest, loading } = useRequest("phase", addPhase);

  const addAPhase = async (values) => {
    makeRequest(values, insertPhase);
  };

  async function deleteNewPhase(id) {
    await deleteRequest({ id }, deletePhase);
  }

  return (
    <FirstSlideLayout Heading={'Settings / Work Type'}>
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
              Work Type
              {loading && (
                <span className={styles.loadingIndicator}>Loading...</span>
              )}
            </span>
          </div>
        </div>

        {/* Input Section */}
        <div className={styles.inputSection}>
          <FormLayout
            MainForm={InputField}
            isReturn={true}
            formHandler={addAPhase}
            initialValues={initialValues}
            validationSchema={validationSchema}
          />
        </div>

        {/* List Section */}
        <div className={styles.listSection}>
          <div className={styles.workTypeList}>
            {phaseList.length > 0 ? (
              phaseList.map((item, key) => (
                <div className={styles.workTypeItem} key={key}>
                  <span className={styles.itemIndicator}></span>
                  <span className={styles.itemText}>{item.phase_name}</span>
                  <div className={styles.itemActions}>
                    <button
                      className={styles.editButton}
                      onClick={() => {
                        // Your existing edit functionality
                        // editWorkType(item);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.deleteButton}
                      onClick={() => deleteNewPhase(item.phase_id)}
                      title="Delete work type"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={styles.deleteIcon}
                      >
                        <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path>
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
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <p>
                  No work types added yet. Create your first work type above.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </FirstSlideLayout>
  );
}

export default WorkType;
