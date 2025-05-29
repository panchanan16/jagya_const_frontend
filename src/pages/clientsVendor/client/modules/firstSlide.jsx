import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";

function FirstSlide() {
  const { outputItemList } = usePageRender("client");

  return (
    <FirstSlideLayout Heading="Clients" Btn="Add a Client" BtnFn="create" HeadingText="All Clients">
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
              "Action",
            ]}
            Trow={outputItemList}
            Actions={{
              viewUrl: "client_id",
              deleteUrl: "client",
              editUrl: "client_id",
            }}
            Paginate={true}
            
          />
        </div>
    </FirstSlideLayout>
  );
}

export default FirstSlide;
