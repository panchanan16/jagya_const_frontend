import SectionHeaderBtn from "@/components/buttons/sectionHeaderBtn";
import SectionHeaderOption from "@/components/sectionHeaderOption/sectionHeaderOption";
import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";


function FirstSlideBranchList() {
  const { itemList } = usePageRender("branch_data");

  return (
    <FirstSlideLayout Heading="Branch">
      <SectionHeaderOption
        EndBtn={
          <SectionHeaderBtn btnName="add new branch" clickFn={"/clients/create"} />
        }
      />

      <div className="main-table">
        <Table
          Theader={[
            "Sl No.",
            "Name",
            "Ref No.",
            "Contact",
            "Alt Contact",
            "Address",
            "Email",
            "Comission",
            "Action",
          ]}
          Trow={itemList}
          Actions={{
            viewUrl: "b_id",
            deleteUrl: "branch_data",
            editUrl: "b_id",
          }}
        />
      </div>
    </FirstSlideLayout>
  );
}

export default FirstSlideBranchList;
