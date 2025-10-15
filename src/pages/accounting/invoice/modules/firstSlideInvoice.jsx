import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import { getAllInvoices } from "@/redux/features/invoiceSlice/slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function FirstSlideInvoice() {
  const { itemList } = usePageRender({ entity: "invoice" });
  console.log(itemList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllInvoices());
  }, []);

  return (
    <FirstSlideLayout
      Heading={"Invoices"}
      Btn={"Create a Invoice"}
      BtnFn={"create"}
    >
      <div className="main-table">
        <Table
          Theader={[
            "Invoice No",
            "Invoice date",
            "Status",
            "Amount",
            "GST %",
            "Total",
            "Client Contact",
          ]}
          Limit={[
            "invoice_no",
            "invoice_date",
            { key: "payment_status" },
            { key: "amount", type: "amount" },
            "gst_rate",
            { key: "total", type: "amount" },
            "client_contact",
          ]}
          Trow={itemList}
          Actions={{
            viewUrl: "invoice_id",
            deleteUrl: "invoice",
            editUrl: "invoice_id",
          }}
          col={5}
          Paginate={true}
        />
      </div>
    </FirstSlideLayout>
  );
}

export default FirstSlideInvoice;
