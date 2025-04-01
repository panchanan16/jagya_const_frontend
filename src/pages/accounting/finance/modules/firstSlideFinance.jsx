import SectionHeaderBtn from "@/components/buttons/sectionHeaderBtn";
import ItemActionBox from "@/components/itemAction/itemActionBox";
import SectionHeaderOption from "@/components/sectionHeaderOption/sectionHeaderOption";
import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import React, { useState } from "react";

function FirstSlideFinance() {
  const { itemList } = usePageRender("collection");

  return (
    <FirstSlideLayout Heading="Finance">
      <SectionHeaderOption
        EndBtn={
          <SectionHeaderBtn
            btnName="add installment"
            clickFn={"/finance/add-installment"}
          />
        }
      />
      <div className="main-table">
        <Table
          Theader={[
            "Sl No.",
            "Amount",
            "Mode of pay",
            "Remarks",
            "Date",
            "Project ID",
            "Action",
          ]}
          Trow={itemList}
          Actions={{
            viewUrl: "col_id",
            deleteUrl: "collection",
            editUrl: "col_id",
          }}
        />
      </div>
    </FirstSlideLayout>
  );
}

export default FirstSlideFinance;
