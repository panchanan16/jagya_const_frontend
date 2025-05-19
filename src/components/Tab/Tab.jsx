import Table from "../table/Table";

function Tab({ Heading, isTabActive, TabName, TableHeading, TableRows, limit, isAction }) {
  return (
    <div className={`${isTabActive == TabName ? "" : "hide"} tabName`}>
        <Table
          Theader={TableHeading}
          Trow={TableRows}
          Limit={limit}
          Actions={isAction}
        />
    </div>
  );
}

export default Tab;
