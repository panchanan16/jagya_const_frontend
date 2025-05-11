import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";

function FirstSlideExpense() {
  const { itemList } = usePageRender("expense");

  return (
    <FirstSlideLayout Heading="Expense" Btn={"Add Expense"} BtnFn={"/expense/add-expense"}>
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
          Limit={['exp_id', 'exp_name', 'exp_amount', 'exp_mode', 'exp_date']}
          Trow={itemList}
          Actions={{
            viewUrl: "exp_id",
            deleteUrl: "expense",
            editUrl: "exp_id",
          }}
        />
      </div>
    </FirstSlideLayout>
  );
}

export default FirstSlideExpense;
