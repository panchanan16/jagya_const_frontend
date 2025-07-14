import ItemActionBox from "@/components/itemAction/itemActionBox";
import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import { Link } from "react-router-dom";

function FirstSlideBranchDashboard() {
  const { itemList } = usePageRender({entity: "branch_client"});
  console.log(itemList);

  return (
    <FirstSlideLayout
      Heading={"Branch Dasboard"}
      Btn={"Add Clients"}
      BtnFn={"add-branch-project"}
    >
      <div className="main-table">
        <Table
          Theader={[
            "Sl No.",
            "Name",
            "Ref No.",
            "Contact",
            "Alt Contact",
            "Approval",
            "Action",
          ]}
          Limit={[
            "b_client_id",
            "b_client_name",
            "b_client_ref_no",
            "b_client_contact",
            "b_client_housetype",
            { key: "b_admin_approval" },
          ]}
          Trow={itemList}
          Actions={{
            viewUrl: "b_client_id",
            deleteUrl: "branch_client",
            editUrl: "b_client_id",
          }}
        />
      </div>
    </FirstSlideLayout>
  );
}

export default FirstSlideBranchDashboard;
