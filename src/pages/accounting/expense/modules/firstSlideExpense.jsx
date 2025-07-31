import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";

function FirstSlideExpense() {
  const { itemList, pagination } = usePageRender({entity: "expense", isPaginate: true});

  return (
    <FirstSlideLayout
      Heading="Expense"
      Btn={"Add Expense"}
      BtnFn={"add-expense"}
      HeadingText="All Expenses"
    >
      <div className="main-table">
        <Table
          Theader={[
            "Sl No.",
            "Name",
            "Amount",
            "Mode of pay",
            "Date",
            "Action",
          ]}
          Limit={["exp_id", "exp_name", "exp_amount", "exp_mode", "exp_date"]}
          Trow={itemList}
          Actions={{
            viewUrl: "exp_id",
            deleteUrl: "expense",
            editUrl: "exp_id",
          }}
          col={3}
          Paginate={true}
          totalpage={pagination ? pagination.lastPage : 2}
        />
      </div>
    </FirstSlideLayout>
  );
}

export default FirstSlideExpense;
