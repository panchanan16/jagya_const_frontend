import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";

function FirstSlideBranchRequest() {
  const { itemList, pagination } = usePageRender({entity: "branch_client"});

  return (
    <FirstSlideLayout Heading={`Branch Requests`} HeadingText="Branch Projects">
      <Table
        Theader={[
          "Sl No.",
          "Name",
          "Ref No.",
          "Contact",
          "Address",
          "Email",
          "Approval",
          "Action",
        ]}
        Limit={[
          "b_client_id",
          "b_client_name",
          "b_client_ref_no",
          "b_client_contact",
          "b_client_address",
          "b_client_housetype",
          { key: "b_admin_approval" },
        ]}
        Trow={itemList}
        Actions={{
          viewUrl: "b_client_id",
          deleteUrl: "branch_client",
          editUrl: "b_client_id",
        }}
        Paginate={true}
        totalpage={pagination ? pagination.lastPage : 2}
      />
    </FirstSlideLayout>
  );
}

export default FirstSlideBranchRequest;
