import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";


function FirstSlideBranchList() {
  const { itemList } = usePageRender("branch_data");

  return (
    <FirstSlideLayout Heading="Branch" Btn="Add New Branch" BtnFn={'/admin/clients/create'}>
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
