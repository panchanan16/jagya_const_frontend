import Table from "../table/Table";

function Tab({ Heading, isTabActive, TabName, TableHeading, TableRows, limit }) {
  return (
    <div className={`${isTabActive == TabName ? "" : "hide"} tabName`}>
        <Table
          Theader={TableHeading}
          Trow={TableRows}
          Limit={limit}
          Actions={{ editUrl: "/client" }}
        />
    </div>
  );
}

export default Tab;
