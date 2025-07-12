import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";

function FirstSlideBranchList() {
  const { itemList } = usePageRender({entity: "branch_data"});

  return (
    <FirstSlideLayout
      Heading="Branch"
      Btn="Add New Branch"
      BtnFn={"/admin/branch-list/create"}
      HeadingText="Our Branches"
    >
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
          col={6}
          Actions={{
            viewUrl: "br_id",
            deleteUrl: "branch_data",
            editUrl: "br_id",
          }}
          Paginate={true}
        />
      </div>
    </FirstSlideLayout>
  );
}

export default FirstSlideBranchList;
