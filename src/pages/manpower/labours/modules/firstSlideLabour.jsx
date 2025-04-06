import SectionHeaderBtn from "@/components/buttons/sectionHeaderBtn";
import SectionHeaderOption from "@/components/sectionHeaderOption/sectionHeaderOption";
import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import React from "react";

function FirstSlideLabour() {
  const { itemList } = usePageRender("labour");

  return (
    <FirstSlideLayout Heading="Labour">
      <SectionHeaderOption
        EndBtn={
          <SectionHeaderBtn btnName="add labour" clickFn={"create"} />
        }
      />

      <Table
        Theader={[
          "Sl No.",
          "Name",
          "Contact",
          "Alt Contact",
          "Address",
          "Email",
          "Action",
        ]}
        Trow={itemList}
        Actions={{
          viewUrl: "lab_id",
          deleteUrl: "labour",
          editUrl: "lab_id",
        }}
      />
    </FirstSlideLayout>
  );
}

export default FirstSlideLabour;
