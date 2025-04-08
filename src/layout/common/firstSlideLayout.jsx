import Header from "@/apps/header/header";
import SectionHeaderBtn from "@/components/buttons/sectionHeaderBtn";
import SectionHeaderOption from "@/components/sectionHeaderOption/sectionHeaderOption";

function FirstSlideLayout({ children, Heading, Btn, BtnFn }) {
  return (
    <div className={`first-slide`} id="first-slide">
      <Header />
      <main>
        {Heading && (
          <div className="heading">
            <h1>{Heading && Heading}</h1>
            <p className="title">Find all projects and their datails here</p>
          </div>
        )}
        <SectionHeaderOption
          EndBtn={
            <SectionHeaderBtn
              btnName={Btn}
              clickFn={BtnFn}
            />
          }
        />
        {children}
      </main>
    </div>
  );
}

export default FirstSlideLayout;
