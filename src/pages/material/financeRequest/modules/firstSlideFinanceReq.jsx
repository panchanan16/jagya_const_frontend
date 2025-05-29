import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";

function FirstSlideFinanceReq() {
  const { itemList } = usePageRender("material_req");
  return (
    <FirstSlideLayout Heading={"Finance Material Requests"} HeadingText="Request List">
      <Table
        Theader={[
          "Sl no.",
          "Ref no.",
          "Project Ref",
          "Phase",
          "Date",
          "Action",
        ]}
        Limit={[
          "mr_r_id",
          "material_ref_no",
          "mr_project_id",
          "mr_phase",
          "mr_date",
        ]}
        Trow={itemList}
        Actions={{
          viewUrl: "mr_r_id",
          deleteUrl: "material_req",
          editUrl: "mr_r_id",
        }}
      />
    </FirstSlideLayout>
  );
}

export default FirstSlideFinanceReq;
