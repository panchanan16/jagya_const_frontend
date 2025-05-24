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
    <FirstSlideLayout Heading="Finance" Btn={"Add Installment"} BtnFn={"add-installment"}>
      <div className="main-table">
        <Table
          Theader={[
            "Sl No.",
            "Amount",
            "Mode of pay",
            "Remarks",
            "Date",
            "Project ID",
          ]}
          Trow={itemList}          
        />
      </div>
    </FirstSlideLayout>
  );
}

export default FirstSlideFinance;
