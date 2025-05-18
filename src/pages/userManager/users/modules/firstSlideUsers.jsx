import SectionHeaderOption from "@/components/sectionHeaderOption/sectionHeaderOption";
import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import UsersDropdown from "./usersDropdown/UsersDropdown";
import UserFilter from "./filterUser/UserFilter";
import { useState } from "react";

function FirstSlideUsers() {
  const [userFilter, setUserFilter] = useState("super_admin");
  const { itemList } = usePageRender(
    "users",
    `readAll/${userFilter}`,
    null,
    null,
    userFilter
  );

  let tableData = { tHeaders: [], tLimits: [] };

  switch (userFilter) {
    case "super_admin":
      tableData = {
        tHeaders: [
          "ID",
          "Name",
          "Email",
          "Contact",
          "Alt Contact",
          "Address",
          "Action",
        ],
        tLimits: [
          "su_id",
          "su_name",
          "su_email",
          "su_contact",
          "su_alt_contact",
          "su_address",
        ],
      };
      break;
    case "branch":
      tableData = {
        tHeaders: [
          "ID",
          "Name",
          "Email",
          "Branch Head",
          "Contact",
          "Alt Contact",
          "Location",
          "Commssion",
          "Action",
        ],
        tLimits: [
          "br_id",
          "b_name",
          "b_head",
          "b_contact_number",
          "b_alt_number",
          "b_email",
          "b_location",
          "b_commision",
        ],
      };
      break;
    case "contact":
      tableData = { tHeaders: [], tLimits: [] };
      break;
    default:
      tableData = { tHeaders: [], tLimits: [] };
  }

  return (
    <FirstSlideLayout
      Heading={"Users"}
      Btn={"Add User"}
      BtnFn={"add-user"}
      HeaderSection={true}
    >
      <SectionHeaderOption
        EndBtn={<UsersDropdown />}
        Entity={"aaaa"}
        FilterComponent={<UserFilter SetFilter={setUserFilter} />}
      />

      <Table
        Theader={tableData.tHeaders}
        Limit={tableData.tLimits}
        Trow={itemList}
        Actions={{}}
      />
    </FirstSlideLayout>
  );
}

export default FirstSlideUsers;
