import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";


function FirstSlideVendor() {
  const { itemList } = usePageRender('vendor')

  return (
    <FirstSlideLayout Heading='Vendors' Btn={"Add a Vendor"} BtnFn={"create"} HeadingText="All Vendors">
        <div className="main-table">
          <Table
            Theader={[
              "Sl No.",
              "Ref No.",
              "Name",
              "Contact",
              "Alt Contact",
              "Address",
              "Email",
              "Status",
              "Action",
            ]}
            Trow={itemList}
            Actions={{
              viewUrl: "vendor_id",
              deleteUrl: "vendor",
              editUrl: "vendor_id",
            }}
          />
        </div>
    </FirstSlideLayout>
  );
}

export default FirstSlideVendor;
