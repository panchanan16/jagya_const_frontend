import Table from "../table/Table";

function Tab({ Heading, isTabActive, TabName, TableHeading, TableRows, limit, isAction }) {
  return (
    <div className={`${isTabActive == TabName ? "" : "hide"}`}>
      <div className="flex align-start j-between">
        <h2>{TabName}</h2>
        <div className="action-btn flex"></div>
      </div>
      <div>
        <Table
          Theader={TableHeading}
          Trow={TableRows}
          Limit={limit}
          Actions={isAction}
        />
      </div>
    </div>
  );
}

export default Tab;
