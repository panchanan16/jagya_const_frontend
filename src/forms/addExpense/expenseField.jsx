// import React from "react";
// import { ErrorMessage, Field } from "formik";
// import SearchInput from "@/components/searchInput/searchInput";
// import { useParams } from "react-router-dom";

// export default function ExpenseField({
//   FieldNameList,
//   RemoveFn,
//   Ind,
//   Type,
//   typeDisplay,
//   defaultInput,
// }) {
//   const { id } = useParams();

//   console.log(FieldNameList)

//   return (
//     <div className="newItem">
//       <div className="itemGrid">
//         <SearchInput
//           Name={FieldNameList.client}
//           Label={"Project"}
//           Entity="project"
//           SetFKey={{ [FieldNameList.client]: "pro_id" }} // setting client ref key in the form which is not displayed
//           SetDisplayKey={{ id: "pro_ref_no", name: "pro_name" }}
//           editDisplayInput={FieldNameList?.cname}
//         />
//         <SearchInput
//           Name={FieldNameList[Type]}
//           Label={Type}
//           Entity={Type}
//           SetFKey={{ [FieldNameList[Type]]: typeDisplay?.id }}
//           SetDisplayKey={typeDisplay}
//           editDisplayInput={FieldNameList?.showname}
//         />
//         <div className="field">
//           <p className="title">Amount</p>
//           <Field type="number" name={FieldNameList.amount} />
//           <ErrorMessage
//             name={FieldNameList.amount}
//             className="err"
//             component="span"
//           />
//         </div>
//         <div className="field">
//           <p className="title">Note</p>
//           <Field type="text" name={FieldNameList.note} />
//           <ErrorMessage
//             name={FieldNameList.note}
//             className="err"
//             component="span"
//           />
//         </div>

//         {!id && (
//           <div className="field" onClick={() => RemoveFn(Ind)}>
//             <p className="opacity-0 title">p</p>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               id="trash-alt"
//             >
//               <path
//                 fill=""
//                 d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
//               ></path>
//             </svg>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



import React from "react";
import { ErrorMessage, Field } from "formik";
import SearchInput from "@/components/searchInput/searchInput";
import { useParams } from "react-router-dom";
import styles from "@/forms/form.module.css";

export default function ExpenseField({
  FieldNameList,
  RemoveFn,
  Ind,
  Type,
  typeDisplay,
  defaultInput,
}) {
  const { id } = useParams();

  console.log(FieldNameList);

  return (
    <div className={`newItem ${styles.formSection}`}>
      <div className={`itemGrid ${styles.formGrid}`} style={{ 
        gridTemplateColumns: id ? 'repeat(4, 1fr)' : 'repeat(4, 1fr) 60px',
        gap: '16px',
        alignItems: 'start'
      }}>
        {/* Project SearchInput */}
        <div className={styles.fieldGroup}>
          <SearchInput
            Name={FieldNameList.client}
            Label={"Project"}
            Entity="project"
            SetFKey={{ [FieldNameList.client]: "pro_id" }} // setting client ref key in the form which is not displayed
            SetDisplayKey={{ id: "pro_ref_no", name: "pro_name" }}
            editDisplayInput={FieldNameList?.cname}
          />
        </div>

        {/* Vendor/Contractor SearchInput */}
        <div className={styles.fieldGroup}>
          <SearchInput
            Name={FieldNameList[Type]}
            Label={Type.charAt(0).toUpperCase() + Type.slice(1)} // Capitalize first letter
            Entity={Type}
            SetFKey={{ [FieldNameList[Type]]: typeDisplay?.id }}
            SetDisplayKey={typeDisplay}
            editDisplayInput={FieldNameList?.showname}
          />
        </div>

        {/* Amount Field */}
        <div className={`field ${styles.fieldGroup}`}>
          <label className={`title ${styles.fieldLabel} ${styles.required}`} htmlFor={`amount_${Ind}`}>
            Amount
          </label>
          <Field 
            type="number" 
            name={FieldNameList.amount} 
            id={`amount_${Ind}`}
            className={styles.formInput}
            placeholder="Enter amount"
          />
          <ErrorMessage
            name={FieldNameList.amount}
            className={`err ${styles.errorMessage}`}
            component="div"
          />
        </div>

        {/* Note Field */}
        <div className={`field ${styles.fieldGroup}`}>
          <label className={`title ${styles.fieldLabel} ${styles.fieldLabelOptional}`} htmlFor={`note_${Ind}`}>
            Note
          </label>
          <Field 
            type="text" 
            name={FieldNameList.note} 
            id={`note_${Ind}`}
            className={styles.formInput}
            placeholder="Add note (optional)"
          />
          <ErrorMessage
            name={FieldNameList.note}
            className={`err ${styles.errorMessage}`}
            component="div"
          />
        </div>

        {/* Remove Button - Only show when not in edit mode */}
        {!id && (
          <div className={`field ${styles.fieldGroup}`} style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingTop: '24px'
          }}>
            <button
              type="button"
              onClick={() => RemoveFn(Ind)}
              className={styles.secondaryButton}
              style={{
                background: '#fee2e2',
                color: '#dc2626',
                border: '1px solid #fecaca',
                padding: '8px',
                borderRadius: '6px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minWidth: '40px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#fecaca';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#fee2e2';
                e.target.style.transform = 'translateY(0)';
              }}
              title={`Remove ${Type} expense`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="trash-alt"
                style={{ width: '16px', height: '16px', fill: 'currentColor' }}
              >
                <path
                  fill=""
                  d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                ></path>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
