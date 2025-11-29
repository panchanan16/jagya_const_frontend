import Table from "../table/Table";

function Tab({ isTabActive, TabName, TableHeading, TableRows, limit, isAction, isPaginate = false, TopSection = null}) {
  return (
    <div className={`${isTabActive == TabName ? "" : "hide"} tabName`}>
        {TopSection && <TopSection />}
        <Table
          Theader={TableHeading}
          Trow={TableRows}
          Limit={limit}
          Actions={isAction}
          Paginate={isPaginate}
          // totalpage={5}
        />
    </div>
  );
}

export default Tab;
