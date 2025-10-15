import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";

function FirstSlideLabour() {
  const { itemList } = usePageRender({entity: "labour"});

  return (
    <FirstSlideLayout Heading="Labour" Btn={"Add Labour"} BtnFn={"create"} HeadingText="All Labours">
      <Table
        Theader={[
          "Sl No.",
          "Name",
          "Contact",
          "Alt Contact",
          "Address",
          "Email",
        ]}
        Trow={itemList}
        Actions={{
          viewUrl: "lab_id",
          deleteUrl: "labour",
          editUrl: "lab_id",
        }}
      />
    </FirstSlideLayout>
  );
}

export default FirstSlideLabour;
