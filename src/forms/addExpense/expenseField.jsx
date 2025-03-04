import React from "react";
import { ErrorMessage, Field } from "formik";

export default function ExpenseField({FieldNameList, RemoveFn, Ind}) {
  return (
    <div className="newItem">
      <div className="itemGrid">
        <div className="field">
          <p className="title">Client</p>
          <Field as="select" name={FieldNameList.client} >
            <option value="cash">Cash</option>
            <option value="upi">UPI</option>
            <option value="chq">Cheque</option>
          </Field>
          <ErrorMessage
            name={FieldNameList.client}
            className="err"
            component="span"
          />
        </div>
        <div className="field">
          <p className="title">Amount</p>
          <Field type="text" name={FieldNameList.amount}  />
          <ErrorMessage
            name={FieldNameList.amount}
            className="err"
            component="span"
          />
        </div>
        <div className="field">
          <p className="title">
            Note<span>(*optional)</span>
          </p>
          <Field type="number" name={FieldNameList.note} />
          <ErrorMessage
            name={FieldNameList.note}
            className="err"
            component="span"
          />
        </div>
        <div 
        className="field" 
        onClick={()=> RemoveFn(Ind)}>
          <p className="opacity-0">p</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="trash-alt"
          >
            <path
              fill=""
              d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
