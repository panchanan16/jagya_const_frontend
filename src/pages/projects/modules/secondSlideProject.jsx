import SecondSlideLayout from "@/layout/common/secondSlideLayout";
import { Link, Outlet, useParams } from "react-router-dom";
import Phases from "./phases/Phases";
import usePageRender from "@/hooks/usePageRender";
import InputFile from "@/components/fileInput/InputFile";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "@/config/api.config";
import coreCrudActions from "@/redux/coreCrudAction";

function SecondSlideProject() {
  const { projectId } = useParams();
  const { itemList } = useSelector((state) => state["project_phase"]);
  const { deleteFile} = coreCrudActions
  const { itemData, viewedItem } = usePageRender({
    entity: "project",
    tail: `get_project_detail/${projectId}`,
    key: "itemData",
    itemId: "pro_id",
    urlKey: "projectId",
  });

  const dispatch = useDispatch();

  function deleteTheFile(e, docId) {
    e.preventDefault();
    deleteFile("project", dispatch, {}, docId);
  }

  return (
    <SecondSlideLayout>
      <main>
        <div className="main-btn flex">
          <Link to={`/admin/projects`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              id="arrow-left"
              className="main-svg"
            >
              <path
                fill=""
                d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"
              ></path>
            </svg>
          </Link>
          <button
            className="btn-secondary hide"
            type="button"
            onclick="editProject(this)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className=""
            >
              <path
                fill=""
                d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"
              ></path>
            </svg>
            <span>Edit</span>
          </button>
        </div>

        <div className="header-text">
          <h2>{viewedItem ? viewedItem.pro_housetype : ""}</h2>
        </div>
        {/* <!-- DETAILS  --> */}
        <div className="contents grid gtc-2">
          <div className="description flex align-center">
            <h3>Project Refrence ID:</h3>
            <p className="text">{viewedItem ? viewedItem.pro_ref_no : "N/A"}</p>
          </div>
          <div className="description flex align-center">
            <h3>Project Name:</h3>
            <p className="text">{viewedItem ? viewedItem.pro_name : "N/A"}</p>
          </div>
          <div className="description flex align-center">
            <h3>Total Cost:</h3>
            <p className="text">
              &#8377; {viewedItem ? viewedItem.pro_totalcost : "N/A"}
            </p>
          </div>
          <div className="description flex align-center">
            <h3>Advance Payment:</h3>
            <p className="text">
              &#8377; {viewedItem ? viewedItem.pro_advancepayment : "N/A"}
            </p>
          </div>
          <div className="description flex align-center">
            <h3>House type:</h3>
            <p className="text">
              {viewedItem ? viewedItem.pro_housetype : "N/A"}
            </p>
          </div>
          <div className="description flex align-center">
            <h3>Site Description:</h3>
            <p className="text">
              {viewedItem ? viewedItem.pro_sitedesc : "N/A"}
            </p>
          </div>
          <div className="description flex align-center">
            <h3>Project Initiated:</h3>
            <p className="text">
              {viewedItem
                ? `${new Date(viewedItem?.created_at).toDateString()}`
                : "N/A"}
            </p>
          </div>
          <div className="description flex align-center">
            <h3>Project Duration:</h3>
            <p className="text">
              {viewedItem ? viewedItem.pro_duration : "N/A"}
            </p>
          </div>
        </div>

        {/* <!-- EMPLOYEE LIST --> */}
        <div className="p-employees flex align-center">
          <h3>Assign Contractor:</h3>
          <Link to="assign">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="plus"
              onclick="addEmployee()"
            >
              <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path>
            </svg>
          </Link>
        </div>

        {/* <!-- Attached Files --> */}
        <div className="file-structure">
          <div className="file-header flex align-start j-between">
            <h3>
              Attached Files <span>(Format: pdf file)</span>:
            </h3>
            <InputFile Id={projectId} />
          </div>

          <div className="files flex align-center f-wrap">
            {itemData?.documents.map((doc, key) => (
              <a
                key={key}
                style={{ textDecoration: "none", color: "inherit" }}
                href={`${BASE_URL}${doc?.pro_doc_url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="file-data flex align-center">
                  <div class="file-icon">
                    <div class="file-corner"></div>
                  </div>
                  <div class="file-details">
                    <span class="text">Resume.pdf</span>
                  </div>
                  <div class="dlt-btn" onClick={(event)=> deleteTheFile(event, doc?.pro_doc_id)}>
                    <span>X</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* <!-- SUB-TASKS  --> */}
        <div className="task">
          <div className="task-header flex align-start j-between">
            <h3>Tasks</h3>
            <div className="btns flex align-center">
              {/* <Link to="add-subphase">
                <button
                  className="btn-primary"
                  type="button"
                  onclick="addSubTask()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="plus-circle"
                    className=""
                  >
                    <path
                      fill=""
                      d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
                    ></path>
                  </svg>
                  <span className="text">Add SubPhase</span>
                </button>
              </Link> */}
              <Link to="add-phase">
                <button
                  className="btn-secondary"
                  type="button"
                  onclick="addSubTask()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="plus-circle"
                    className=""
                  >
                    <path
                      fill=""
                      d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
                    ></path>
                  </svg>
                  <span className="text">Add New Phase</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="task-grid grid">
            {itemList
              .filter((ph) => ph.pro_id == projectId)
              .concat(itemData.phases)
              ?.map((ph) => (
                <Phases Name={ph.phase_name} Status={ph.pro_phase_status} />
              ))}
          </div>
        </div>
      </main>
      <Outlet />
    </SecondSlideLayout>
  );
}

export default SecondSlideProject;
