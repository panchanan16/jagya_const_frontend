import SearchBox from "../searchBox/SearchBox";

function SectionHeaderOption({
  children,
  EndBtn,
  HeadingText,
  Entity,
  FilterComponent,
  searchFields
}) {
  return (
    <div className="top-section flex align-center j-between">
      {children ? (
        children
      ) : (
        <div className="section-text">
          <h2>{HeadingText ? HeadingText : "All Projects"}</h2>
        </div>
      )}

      <div className="utility-section flex align-center">
        {Entity && <SearchBox SearchEntity={Entity} searchFields={searchFields} />}
        <div className="filter hide">
          <button className="btn-filter flex align-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="filter"
              className="filter-icon"
            >
              <path d="M19,2H5A3,3,0,0,0,2,5V6.17a3,3,0,0,0,.25,1.2l0,.06a2.81,2.81,0,0,0,.59.86L9,14.41V21a1,1,0,0,0,.47.85A1,1,0,0,0,10,22a1,1,0,0,0,.45-.11l4-2A1,1,0,0,0,15,19V14.41l6.12-6.12a2.81,2.81,0,0,0,.59-.86l0-.06A3,3,0,0,0,22,6.17V5A3,3,0,0,0,19,2ZM13.29,13.29A1,1,0,0,0,13,14v4.38l-2,1V14a1,1,0,0,0-.29-.71L5.41,8H18.59ZM20,6H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"></path>
            </svg>
            <span className="text">Filter</span>
          </button>
        </div>
        {EndBtn}
      </div>
    </div>
  );
}

export default SectionHeaderOption;
