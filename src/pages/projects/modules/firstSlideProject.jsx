import SectionHeaderBtn from "@/components/buttons/sectionHeaderBtn";
import SectionHeaderOption from "@/components/sectionHeaderOption/sectionHeaderOption";
import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";

function FirstSlideProject() {
  const { itemList } = usePageRender('project')

  return (
    <FirstSlideLayout Heading={'Projects'}>
        <SectionHeaderOption
          EndBtn={
            <SectionHeaderBtn
              btnName="Add Projects"
              clickFn="/projects/add-project"
            />
          }
        />
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
              viewUrl: "pro_id",
              deleteUrl: "project",
              editUrl: "pro_id",
            }}
          />
        </div>
    </FirstSlideLayout>
  );
}

export default FirstSlideProject;
