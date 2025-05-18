import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import WorkType from "./elements/WorkType";
import PaymentType from "./elements/PaymentType";
import SubTask from "./elements/SubTask";

function FirstSlideSettings() {
  return (
    <FirstSlideLayout Heading="Settings">
      <div className="settings-grid grid">
      <WorkType />
      {/* <PaymentType /> */}
      {/* <SubTask /> */}
    </div>
    </FirstSlideLayout>
  );
}

export default FirstSlideSettings;
