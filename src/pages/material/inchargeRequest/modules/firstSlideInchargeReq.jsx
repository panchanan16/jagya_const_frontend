import ItemActionBox from "@/components/itemAction/itemActionBox";
import SectionHeaderOption from "@/components/sectionHeaderOption/sectionHeaderOption";
import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import { Link } from "react-router-dom";

function FirstSlideInchargeReq() {
  const { itemList } = usePageRender("material_req");
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

export default FirstSlideInchargeReq;
