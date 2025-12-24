import SectionHeaderOption from "@/components/sectionHeaderOption/sectionHeaderOption";
import Table from "@/components/table/Table";
import usePageRender from "@/hooks/usePageRender";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import UsersDropdown from "./usersDropdown/UsersDropdown";
import UserFilter from "./filterUser/UserFilter";
import { useState } from "react";
import { Link } from "react-router-dom";

function FirstSlideUsers() {
  const [userFilter, setUserFilter] = useState("super_admin");
  const { itemList } = usePageRender({
    entity: "users",
    tail: `readAll/${userFilter}`,
    urlKey: userFilter,
    loc: userFilter,
  });

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
          "Actions",
        ],
        tLimits: [
          "su_id",
          "su_name",
          "su_email",
          "su_contact",
          "su_alt_contact",
          "su_address",
          (u) => (
            <div>
              <Link to={`${u.su_a_id}?type=super_admin`}>View</Link>
            </div>
          ),
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
          "Actions",
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
          (u) => (
            <div>
              <Link to={`${u.b_a_id}?type=branch`}>View</Link>
            </div>
          ),
        ],
      };
      break;
    case "finance":
      tableData = {
        tHeaders: [
          "ID",
          "Name",
          "Email",
          "Contact",
          "Alt Contact",
          "Address",
          "Actions",
        ],
        tLimits: [
          "fd_a_id",
          "fd_name",
          "fd_contact",
          "fd_alt_contact",
          "fd_address",
          "fd_email",
          (u) => (
            <div>
              <Link to={`${u.fd_a_id}?type=finance`}>View</Link>
            </div>
          ),
        ],
      };
      break;
    case "supervisor":
      tableData = {
        tHeaders: [
          "ID",
          "Name",
          "Email",
          "Contact",
          "Alt Contact",
          "Address",
          "Actions",
        ],
        tLimits: [
          "sup_a_id",
          "sup_name",
          "sup_email",
          "sup_contact",
          "sup_alt_contact",
          "sup_address",
          (u) => (
            <div>
              <Link to={`${u.sup_a_id}?type=supervisor`}>View</Link>
            </div>
          ),
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
        Heading={`All ${userFilter.replace("_", " ")} Users`}
        EndBtn={<UsersDropdown />}
        // Entity={"aaaa"}
        FilterComponent={<UserFilter SetFilter={setUserFilter} />}
      />

      <Table
        Theader={tableData.tHeaders}
        Limit={tableData.tLimits}
        Trow={itemList}
        // Actions={{
        //   viewUrl: tableData?.tLimits[0] ? tableData?.tLimits[0] : "su_id",
        //   deleteUrl: "users",
        //   editUrl: "su_id",
        // }}
      />
    </FirstSlideLayout>
  );
}

export default FirstSlideUsers;
