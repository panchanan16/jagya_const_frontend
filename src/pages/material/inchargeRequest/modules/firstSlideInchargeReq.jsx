import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";

function FirstSlideInchargeReq() {
  const { itemList } = usePageRender({entity: "material_req"});
  return (
    <FirstSlideLayout
      Heading="Incharge Requests"
      Btn="Request Materials"
      BtnFn="create"
      HeadingText="Request List"
    >
      <Table
        Theader={[
          "Sl no.",
          "Ref no.",
          "Phase",
          "Date",
          "Project Name",
          "Client Name"
        ]}
        Limit={[
          "mr_r_id",
          "material_ref_no",
          "mr_phase",
          "mr_date",
          "pro_name",
          "client_name"
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

export default FirstSlideInchargeReq;
