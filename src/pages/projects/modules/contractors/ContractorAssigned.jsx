import SectionLayout from "@/layout/common/sectionLayout";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function ContractorAssigned() {
  const { projectId } = useParams();
  const { itemData } = useSelector((state) => state["project"]);
  const { itemList } = useSelector((state) => state["project_contractor"]);

  async function deleteContractor() {
    if (window.confirm("Are you sure to delete ??")) {
      console.log("Contracctor removed")
    }
  }

  return (
    <SectionLayout>
      <div class="pro-emp-popup">
        <div class="form">
          <h3>Residential G+2 building</h3>
          <Link to={`/admin/projects/${projectId}`}>
            <button type="button" class="btn-warning close">
              Close
            </button>
          </Link>
          <div class="employee-column">
            {itemList
              .filter((cn) => cn.pro_id == projectId)
              .concat(itemData.contractors)
              ?.map((cont) => (
                <div class="employee-list flex align-center j-between">
                  <div class="emp-profile flex">
                    <img src="/img/user.png" alt="jpg" />
                    <div class="profile-details">
                      <p>{cont.con_name}, <span>{cont.pro_phase}</span> </p>
                      <p>Contractor, No- 8855446699</p>
                    </div>
                  </div>
                  <span className="delete btn-warning" onClick={()=> deleteContractor()}>Delete</span>
                </div>
              ))}          
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default ContractorAssigned;
