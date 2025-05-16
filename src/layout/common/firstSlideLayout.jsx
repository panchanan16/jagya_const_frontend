import Header from "@/apps/header/header";
import SectionHeaderBtn from "@/components/buttons/sectionHeaderBtn";
import SectionHeaderOption from "@/components/sectionHeaderOption/sectionHeaderOption";

function FirstSlideLayout({ children, Heading, Btn, BtnFn, Entity }) {
  return (
    <div className={`first-slide`} id="first-slide">
      <Header />
      <main>
        {Heading && (
          <div className="heading">
            <h1>{Heading && Heading}</h1>
            <p className="title">Find all projects and their details here</p>
          </div>
        )}
        <SectionHeaderOption
          EndBtn={
            <SectionHeaderBtn
              btnName={Btn}
              clickFn={BtnFn}
            />
          }
          Entity={Entity}
        />
        {children}
      </main>
    </div>
  );
}

export default FirstSlideLayout;
