import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";

function FirstSlideProject() {
  const { outputItemList, pagination, searchLoading } = usePageRender({entity: "project", isPaginate: true});

  return (
    <FirstSlideLayout
      Heading={"Projects"}
      Btn="Add a Project"
      BtnFn="add-project"
      Entity={"project"}
      searchFields={["pro_name", "pro_ref_no"]}
    >
      <div className="main-table">
        <Table
          Theader={[
            "Sl No.",
            "Name",
            "Ref No.",
            "House type",
            "Duration",
          ]}
          isLoading={searchLoading}
          Limit={[
            "pro_id",
            "pro_ref_no",
            "pro_name",
            "pro_housetype",
            "pro_duration",
          ]}
          Trow={outputItemList}
          Actions={{
            viewUrl: "pro_id",
            deleteUrl: "project",
            editUrl: "pro_id",
          }}
          col={4}
          Paginate={true}
          totalpage={pagination ? pagination.lastPage : 2}
        />
      </div>
    </FirstSlideLayout>
  );
}

export default FirstSlideProject;
