import Header from "@/apps/header/header";
import SectionHeaderBtn from "@/components/buttons/sectionHeaderBtn";
import SectionHeaderOption from "@/components/sectionHeaderOption/sectionHeaderOption";

function FirstSlideLayout({
  children,
  Heading,
  Btn,
  BtnFn,
  Entity,
  searchFields,
  HeaderSection,
  HeadingText
}) {
  return (
    <div className={`first-slide`} id="first-slide">
      <Header />
      <main>
        {Heading && (
          <div className="heading">
            <h1>{Heading && Heading}</h1>
            <p className="title">Find all {`${Heading}`.toLocaleLowerCase()} here</p>
          </div>
        )}

        {HeaderSection == undefined && (
          <SectionHeaderOption 
            HeadingText={HeadingText}
            EndBtn={<SectionHeaderBtn btnName={Btn} clickFn={BtnFn} />}
            Entity={Entity}
            searchFields={searchFields}
          />
        )}

        {children}
      </main>
    </div>
  );
}

export default FirstSlideLayout;
