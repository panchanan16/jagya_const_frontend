import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import WorkType from "./elements/WorkType";
import PaymentType from "./elements/PaymentType";
import SubTask from "./elements/SubTask";
import Settings from "./elements/Settings";

function FirstSlideSettings() {
  return (
    <FirstSlideLayout Heading="Settings">
      {/* <div className="settings-grid grid"> */}
      {/* <WorkType /> */}
      {/* <PaymentType /> */}
      {/* <SubTask /> */}
      <Settings />
    {/* </div> */}
    </FirstSlideLayout>
  );
}

export default FirstSlideSettings;
