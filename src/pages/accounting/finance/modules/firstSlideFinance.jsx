import SectionHeaderBtn from "@/components/buttons/sectionHeaderBtn";
import DateRange from "@/components/DateRange/DateRange";
import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import React, { useState } from "react";

function FirstSlideFinance() {
  const { itemList } = usePageRender({ entity: "collection" });

  return (
    <FirstSlideLayout
      Heading="Installments"
      Btn={"Add Installment"}
      BtnFn={"add-installment"}
      HeadingText="All Installments"
      searchFields={["col_project_id", "col_project_phase"]}
      Entity={"collection"}
    >      
      <DateRange />
      <div className="main-table">
        <Table
          Theader={[
            "Sl No.",
            "Amount",
            "Mode of pay",
            "Remarks",
            "Date",
            "Project ID",
            "Phase",
          ]}
          Trow={itemList}
          Limit={[
            "col_id",
            {
              key: "col_amount",
              type: "amount",
            },
            "col_mode",
            "col_remark",
            {
              key: "col_date",
              type: "date",
            },
            "col_project_id",
            "col_project_phase",
          ]}
          Actions={{
            deleteUrl: "col_id",
            editUrl: "con_id",
          }}
        />
      </div>
    </FirstSlideLayout>
  );
}

export default FirstSlideFinance;
