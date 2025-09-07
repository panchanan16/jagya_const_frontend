import SectionHeaderBtn from "@/components/buttons/sectionHeaderBtn";
import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";

function FirstSlideContractor() {
  const { itemList } = usePageRender({ entity: "contractor" });

  return (
    <FirstSlideLayout
      Heading="Contractors"
      Btn={"Add Contractor"}
      BtnFn={"create"}
      HeadingText="All Contractors"
      Endbtn2={<SectionHeaderBtn btnName={'Add Expense'} clickFn={'/admin/expense/add-expense'} />}
    >
      <div className="main-table">
        <Table
          Theader={[
            "Sl No.",
            "Name",
            "Contact",
            "Alt Contact",
            "Address",
            "Email",
          ]}
          Trow={itemList}
          Actions={{
            viewUrl: "con_id",
            deleteUrl: "contractor",
            editUrl: "con_id",
          }}
        />
      </div>
    </FirstSlideLayout>
  );
}

export default FirstSlideContractor;
