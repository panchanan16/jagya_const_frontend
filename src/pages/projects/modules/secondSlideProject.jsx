import SecondSlideLayout from "@/layout/common/secondSlideLayout";
import { Link, Outlet, useParams } from "react-router-dom";
import Phases from "./phases/Phases";
import usePageRender from "@/hooks/usePageRender";
import InputFile from "@/components/fileInput/InputFile";

function SecondSlideProject() {
  const { projectId } = useParams();
  const { itemData } = usePageRender(
    "project",
    `get_project_detail/${projectId}`,
    "itemData",
    null,
    null,
    "projectId"
  );

  return (
    <SecondSlideLayout>
      <main>
        <div className="main-btn flex">
          <Link to={`/projects`}>
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
            className="btn-secondary"
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
          <h2>Residential G+2 Building</h2>
        </div>
        {/* <!-- DETAILS  --> */}
        <div className="contents grid gtc-2">
          <div className="description flex align-center">
            <h3>Client Name:</h3>
            <p className="text">Kankan Jyoti Nath</p>
          </div>
          <div className="description flex align-center">
            <h3>Phone / Alternate Number:</h3>
            <p className="text">6002649802 / 7636896075</p>
          </div>
          <div className="description flex align-center">
            <h3>Email ID:</h3>
            <p className="text">jyotikankan222@gmail.com</p>
          </div>
          <div className="description flex align-center">
            <h3>Address:</h3>
            <p className="text">
              House No. 60, Ashram Road, Lachitnagar, Guwahati, Assam
            </p>
          </div>
          <div className="description flex align-center">
            <h3>House type:</h3>
            <p className="text">Assam Type</p>
          </div>
          <div className="description flex align-center">
            <h3>Site Description:</h3>
            <p className="text">Assam Type of ghor juntu assamese hoi</p>
          </div>
          <div className="description flex align-center">
            <h3>Project Initiated:</h3>
            <p className="text">12-June-2024</p>
          </div>
          <div className="description flex align-center">
            <h3>Project Duration:</h3>
            <p className="text">1.5 years</p>
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
            <h3>Attached Files:</h3>
            <InputFile Id={projectId} />
          </div>

        

          <div className="files flex align-center f-wrap">
            {itemData?.documents.map((doc, key) => (
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href={`localhost:3500/public/project/files/file-441d2c5b-2e89-4954-a4b3-442c83547333-1747119848623.pdf`}
                target="_blank"
              >
                {/* <div className="file-data flex align-center gap-5" key={key}>
                  <div className="file-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="file-upload-alt"
                      className="svg-25"
                    >
                      <path d="M13,20H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4h5V7a3,3,0,0,0,3,3h3v2a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,12.05,2H6A3,3,0,0,0,3,5V19a3,3,0,0,0,3,3h7a1,1,0,0,0,0-2ZM13,5.41,15.59,8H14a1,1,0,0,1-1-1ZM8,8a1,1,0,0,0,0,2H9A1,1,0,0,0,9,8Zm6,4H8a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm6.71,5.29-2-2a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2,2a1,1,0,0,0,1.42,1.42l.29-.3V21a1,1,0,0,0,2,0V18.41l.29.3a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,17.29ZM12,18a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Z"></path>
                    </svg>
                  </div>
                  <div className="file-details">
                    <span className="text">Resume.pdf</span>
                    <div className="dropdown">
                      <span className="view-more">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="svg-15"
                        >
                          <path
                            fill=""
                            d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"
                          ></path>
                        </svg>
                      </span>
                      <div className="dropdown-list flex align-center flex-column hide">
                        <p
                          className="title flex align-center gap-5"
                          onclick="openProjectDetails('second-slide', this)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            id="eye"
                            className="svg-18"
                          >
                            <path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"></path>
                          </svg>
                          <span className="text">View</span>
                        </p>
                        <p
                          className="title flex align-center gap-5"
                          onclick="editProject()"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="svg-18"
                          >
                            <path
                              fill=""
                              d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"
                            ></path>
                          </svg>
                          <span className="text">Edit</span>
                        </p>
                        <p
                          className="title flex align-center gap-5"
                          onclick="confirmAlert()"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="svg-18"
                          >
                            <path
                              fill=""
                              d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                            ></path>
                          </svg>
                          <span className="text">Delete</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div class="file-data flex align-center">
                  <div class="file-icon">
                    <div class="file-corner"></div>
                  </div>
                  <div class="file-details" onclick="showFile()">
                    <span class="text">Resume.pdf</span>
                  </div>
                  <div class="dlt-btn">
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
            {itemData?.phases.map((ph) => (
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
