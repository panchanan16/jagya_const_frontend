import Table from "../table/Table";

function Tab({ Heading, isTabActive, TabName, TableHeading, TableRows, limit, isAction, TopSection = null}) {
  return (
    <div className={`${isTabActive == TabName ? "" : "hide"} tabName`}>
        {TopSection && <TopSection />}
        <Table
          Theader={TableHeading}
          Trow={TableRows}
          Limit={limit}
          Actions={isAction}
          // Paginate={true}
          // totalpage={5}
        />
    </div>
  );
}

export default Tab;
