import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";

function FirstSlideInvoice() {
  const { itemList } = usePageRender({entity: "invoice"});

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
            "GST",
            "Total",
            "Client Contact",
            "Action",
          ]}
          Limit={['invoice_no', 'invoice_date', 'payment_status', 'amount', 'gst_rate', 'client_contact', 'total']}
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
