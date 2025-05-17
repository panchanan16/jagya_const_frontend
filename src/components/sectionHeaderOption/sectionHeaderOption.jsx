import SearchBox from "../searchBox/SearchBox";

function SectionHeaderOption({
  children,
  EndBtn,
  HeadingText,
  Entity,
  FilterComponent,
}) {
  return (
    <div className="top-section flex align-center j-between">
      {children ? (
        children
      ) : (
        <div className="section-text">
          <h2>{HeadingText ? HeadingText : "All projects"}</h2>
        </div>
      )}

      <div className="utility-section flex align-center">
        <SearchBox SearchEntity={Entity} />
        {FilterComponent && FilterComponent}
        {EndBtn}
      </div>
    </div>
  );
}

export default SectionHeaderOption;
