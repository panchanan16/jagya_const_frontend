import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";

function FirstSlide() {
  const { outputItemList, pagination } = usePageRender({entity: "client", isPaginate: true});

  return (
    <FirstSlideLayout
      Heading="Clients"
      Btn="Add a Client"
      BtnFn="create"
      HeadingText="All Clients"
      Entity={"client"}
      searchFields={["client_name", "client_ref_no", "client_address"]}
    >
      <div className="main-table">
        <Table
          Theader={[
            "Sl No.",
            "Name",
            "Ref No.",
            "Contact",
            "Alt Contact",
            "Address",
            "Email",
          ]}
          Trow={outputItemList}
          Actions={{
            viewUrl: "client_id",
            deleteUrl: "client",
            editUrl: "client_id",
          }}
          Paginate={true}
          totalpage={pagination ? pagination.lastPage : 2}
        />
      </div>
    </FirstSlideLayout>
  );
}

export default FirstSlide;
