import React from "react";
import { ErrorMessage, Field } from "formik";
import SearchInput from "@/components/searchInput/searchInput";
import { useParams } from "react-router-dom";

export default function ExpenseField({
  FieldNameList,
  RemoveFn,
  Ind,
  Type,
  typeDisplay,
  defaultInput,
}) {
  const { id } = useParams();

  console.log(FieldNameList)

  return (
    <div className="newItem">
      <div className="itemGrid">
        <SearchInput
          Name={FieldNameList.client}
          Label={"Client"}
          Entity="client"
          SetFKey={{ [FieldNameList.client]: "client_id" }} // setting client ref key in the form which is not displayed
          SetDisplayKey={{ id: "client_id", name: "client_name" }}
          editDisplayInput={FieldNameList?.cname}
        />
        <SearchInput
          Name={FieldNameList[Type]}
          Label={Type}
          Entity={Type}
          SetFKey={{ [FieldNameList[Type]]: typeDisplay?.id }}
          SetDisplayKey={typeDisplay}
          editDisplayInput={FieldNameList?.showname}
        />
        <div className="field">
          <p className="title">Amount</p>
          <Field type="number" name={FieldNameList.amount} />
          <ErrorMessage
            name={FieldNameList.amount}
            className="err"
            component="span"
          />
        </div>
        <div className="field">
          <p className="title">Note</p>
          <Field type="text" name={FieldNameList.note} />
          <ErrorMessage
            name={FieldNameList.note}
            className="err"
            component="span"
          />
        </div>

        {!id && (
          <div className="field" onClick={() => RemoveFn(Ind)}>
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
        )}
      </div>
    </div>
  );
}
