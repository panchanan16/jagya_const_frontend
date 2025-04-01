import SectionHeaderBtn from "@/components/buttons/sectionHeaderBtn";
import ItemActionBox from "@/components/itemAction/itemActionBox";
import SectionHeaderOption from "@/components/sectionHeaderOption/sectionHeaderOption";
import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";

function FirstSlideExpense() {
  const { itemList } = usePageRender("expense");

  return (
    <FirstSlideLayout Heading="Expense">
      <SectionHeaderOption
        EndBtn={
          <SectionHeaderBtn
            btnName="Add Expense"
            clickFn="/expense/add-expense"
          />
        }
      >
        <div className="change-options flex align-center">
          <button type="button" className="btn-change flex-1">
            All
          </button>
          <button type="button" className="btn-change flex-1 active">
            Project
          </button>
        </div>
      </SectionHeaderOption>

      <div className="main-table">
        <Table
          Theader={[
            "Sl No.",
            "Name",
            "Amount",
            "Mode of pay",
            "Date",
            "Project ID",
            "Action",
          ]}
          Limit={['exp_id', 'exp_name', 'exp_amount', 'exp_mode', 'exp_project_ref', 'exp_date']}
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
