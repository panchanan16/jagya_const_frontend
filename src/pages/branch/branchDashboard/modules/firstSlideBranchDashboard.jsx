import ItemActionBox from "@/components/itemAction/itemActionBox";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import { Link } from "react-router-dom";

function FirstSlideBranchDashboard() {
  return (
    <FirstSlideLayout Heading={'Branch Dasboard'} Btn={'Add Clients'} BtnFn={'branch/client/create'}>
    
    </FirstSlideLayout>
  );
}

export default FirstSlideBranchDashboard;
