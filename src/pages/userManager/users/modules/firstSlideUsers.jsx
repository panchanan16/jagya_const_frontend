import SectionHeaderOption from "@/components/sectionHeaderOption/sectionHeaderOption";
import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import UsersDropdown from "./usersDropdown/UsersDropdown";

function FirstSlideUsers() {
 const {itemList} = usePageRender("users", "readAll/super_admin" )

  return (
    <FirstSlideLayout
      Heading={"Users"}
      Btn={"Add Uers"}
      BtnFn={"add-user"}
      HeaderSection={true}
    >
      <SectionHeaderOption
        EndBtn={<UsersDropdown />}
        Entity={"aaaa"}
      />
      <Table
        Theader={["ID", "Name", "Email", "Contact", "Alt Contact", "Address", "Action"]}
        Limit={[
          "su_id",
          "su_name",
          "su_email",
          "su_contact",
          "su_alt_contact",
          "su_address",          
        ]}
        Trow={itemList}
        Actions={{}}
      />
    </FirstSlideLayout>
  );
}

export default FirstSlideUsers;
