import Header from "@/apps/header/header";

function FirstSlideLayout({ children, Heading }) {
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
        {children}
      </main>
    </div>
  );
}

export default FirstSlideLayout;
