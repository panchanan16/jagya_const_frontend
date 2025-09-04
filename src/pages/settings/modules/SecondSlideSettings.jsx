import { Outlet } from "react-router-dom";
import PaymentType from "./elements/PaymentType";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import SecondSlideLayout from "@/layout/common/secondSlideLayout";

function SecondSlideSettings() {

  return (
    <SecondSlideLayout Heading="Settings">
      <main>
        <Outlet />
      </main>
    </SecondSlideLayout>
  );
}

export default SecondSlideSettings;
