import entityEndpoint from "@/api/api";
import { APP_URL } from "@/config/api.config";
import { useAction } from "@/hooks/useAction";
import SectionLayout from "@/layout/common/sectionLayout";
import { DELETE_CONTRACTOR } from "@/redux/features/projectSlice/slice";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function ContractorAssigned() {
  const { projectId } = useParams();
  const { itemData } = useSelector((state) => state["project"]);
  const { itemList } = useSelector((state) => state["project_contractor"]);
  const deleteContractorReq = useAction(DELETE_CONTRACTOR);

  async function deleteContractor(pro_con_id) {
    if (window.confirm("Are you sure to delete ??")) {
      await deleteContractorReq({
        endpoint: entityEndpoint.deleteItem("project_contractor"),
        body: { pro_con_id },
      });
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
                      <p>
                        <span className="hoverr">
                          <Link
                            to={`${APP_URL}admin/contractor/${cont.pro_con_id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {cont.con_name}
                          </Link>
                        </span>
                        , <span>{cont.pro_phase}</span>{" "}
                      </p>
                      <p>Contractor, No- 8855446699</p>
                    </div>
                  </div>
                  <span
                    className="delete btn-warning"
                    onClick={() => deleteContractor(cont.pro_con_id)}
                  >
                    Delete
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default ContractorAssigned;
