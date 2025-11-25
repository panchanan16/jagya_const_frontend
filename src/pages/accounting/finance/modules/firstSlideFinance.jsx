import entityEndpoint from "@/api/api";
import DateRange from "@/components/DateRange/DateRange";
import Table from "@/components/table/Table";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import { GET_ALL_COLLECTION, setDateRange } from "@/redux/features/collectionSlice/slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function FirstSlideFinance() {
  const { itemList, dateRange } = useSelector((state) => state.collection);
  const dispatch = useDispatch()
  
  useEffect(()=> {
    dispatch(GET_ALL_COLLECTION({endpoint: entityEndpoint.getAll('collection')}))
  }, [dateRange.from_date, dateRange.to_date])

  return (
    <FirstSlideLayout
      Heading="Installments"
      Btn={"Add Installment"}
      BtnFn={"add-installment"}
      HeadingText="All Installments"
      searchFields={["col_project_id", "col_project_phase"]}
      Entity={"collection"}
    >
      <DateRange dateRange={dateRange} setDateRange={setDateRange} />
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
            "Project Name",
            "Client Name",
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
            "pro_name",
            "client_name",
          ]}
          Actions={{
            viewUrl: "col_id",
            deleteUrl: "collection",
            editUrl: "con_id",
          }}
        />
      </div>
    </FirstSlideLayout>
  );
}

export default FirstSlideFinance;
