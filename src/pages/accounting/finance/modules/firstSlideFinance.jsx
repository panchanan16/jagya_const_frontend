import SectionHeaderBtn from "@/components/buttons/sectionHeaderBtn";
import ItemActionBox from "@/components/itemAction/itemActionBox";
import SectionHeaderOption from "@/components/sectionHeaderOption/sectionHeaderOption";
import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import React, { useState } from "react";

function FirstSlideFinance() {
  const { itemList } = usePageRender({entity: "collection"});

  return (
    <FirstSlideLayout Heading="Installments" Btn={"Add Installment"} BtnFn={"add-installment"} HeadingText="All Installments">
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
          Limit={[
            "col_id",
            {
              key: "col_amount",
              type: "amount"
            },
            "col_mode",
            "col_remark",
            "col_date",
            "col_project_id"
          ]} 
          Actions={{      
            deleteUrl: "contractor",
            editUrl: "con_id",
          }}       
        />
      </div>
    </FirstSlideLayout>
  );
}

export default FirstSlideFinance;
