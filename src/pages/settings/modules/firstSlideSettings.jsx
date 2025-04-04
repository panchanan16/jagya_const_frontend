import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import WorkType from "./elements/WorkType";
import PaymentType from "./elements/PaymentType";
import SubTask from "./elements/SubTask";

function FirstSlideSettings() {
  return (
    <FirstSlideLayout Heading="Settings">
      <WorkType />
      <hr />
      <PaymentType />
      <hr />
      <SubTask />
    </FirstSlideLayout>
  );
}

export default FirstSlideSettings;
