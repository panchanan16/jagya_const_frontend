import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";

function FirstSlide() {
  const { itemList } = usePageRender("client");

  return (
    <FirstSlideLayout Heading="Clients" Btn="add clients" BtnFn="/clients/create">
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
            Trow={itemList}
            Actions={{
              viewUrl: "client_id",
              deleteUrl: "client",
              editUrl: "client_id",
            }}
          />
        </div>
    </FirstSlideLayout>
  );
}

export default FirstSlide;
