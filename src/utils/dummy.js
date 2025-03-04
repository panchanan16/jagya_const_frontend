
<Formik
validationSchema={ClientSchema}
initialValues={initialValues}
onSubmit={ (values) => {
  // await new Promise((r) => setTimeout(r, 500));
  console.log(values)
  // alert(JSON.stringify(values, null, 2));
}}
>
{/* {({ values }) => ( */}
  <Form>
    <div class="grid gtc-2 gap-10">
      <div class="field">
        <p class="title">Date</p>
        <Field type="date" name="date" id="" />
        <ErrorMessage
          name="date"
          className="err"
          component="span"
        />
      </div>
      <div class="field">
        <p class="title">Expense Name</p>
        <Field type="text" name="expenseName" id="" />
        <ErrorMessage
          name="expenseName"
          className="err"
          component="span"
        />
      </div>
      <div class="field">
        <p class="title">Amount</p>
        <Field type="number" name="Amount" id="" required />
        <ErrorMessage
          name="Amount"
          className="err"
          component="span"
        />
      </div>

      <div class="field">
        <p class="title">
          Remarks<span>(*optional)</span>
        </p>
        <Field type="text" name="remarks" id="" />
        <ErrorMessage
          name="remarks"
          className="err"
          component="span"
        />
      </div>
    </div>

    {/* <FieldArray name="expenseItems">
      {({ insert, remove, push }) => (
        <div>               
          {values.expenseItems.map((friend, index) => (
            <ExpenseField
              key={index}
              FieldNameList={{
                client: `expenseItems[${index}].client`,
                amount: `expenseItems[${index}].amount`,
                note: `expenseItems[${index}].note`,
              }}
            />
          ))}

          <button
            type="button"
            className="secondary"
            onClick={() => push({ client: "", amount: "", note: "" })}
          >
            Add Friend
          </button>
        </div>
      )}
    </FieldArray> */}

    <div class="action-btn flex gap-10">
      <button type="submit" class="btn-success flex-1">
        Add
      </button>
      {/* <button type="button" class="btn-warning flex-1">
        Cancel
      </button> */}
    </div>
  </Form>
{/* // )} */}
</Formik>