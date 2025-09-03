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
        {HeaderSection == undefined && (
          <SectionHeaderOption 
            HeadingText={HeadingText}
            EndBtn={<SectionHeaderBtn btnName={Btn} clickFn={BtnFn} />}
            Entity={Entity}
            searchFields={searchFields}
            Heading={Heading}
          />
        )}

        {children}
      </main>
    </div>
  );
}

export default FirstSlideLayout;
