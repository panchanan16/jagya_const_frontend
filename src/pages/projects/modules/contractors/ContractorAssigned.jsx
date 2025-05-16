import SectionLayout from "@/layout/common/sectionLayout";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function ContractorAssigned() {
  const { projectId } = useParams();
  const { itemData } = useSelector((state) => state["project"]);
  const { itemList } = useSelector((state) => state["project_contractor"]);

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
                  <div class="emp-profile flex gap-5">
                    <img src="/img/admin.jpg" alt="jpg" />
                    <div class="profile-text">
                      <p>{cont.con_name}</p>
                      <p>
                        <span style={{ fontWeight: "bold", marginRight: 10 }}>
                          {cont.pro_phase}
                        </span>
                        <span>8899007788</span>
                      </p>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    onclick="confirmAlert()"
                    class=""
                  >
                    <path
                      fill=""
                      d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                    ></path>
                  </svg>
                </div>
              ))}          
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default ContractorAssigned;
