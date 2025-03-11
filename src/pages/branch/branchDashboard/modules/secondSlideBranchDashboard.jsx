import PopupLayout from "@/layout/common/popupLayout";
import { Link } from "react-router-dom";

function SecondSlideBranchDashboard() {
  return (
    <PopupLayout>
      <div class="branch-project-popup">
        <div class="flex align-start j-between">
          <h2>Residential</h2>
          <Link to="/branch-dashboard">
            <button type="button" class="btn-warning close">
              Close
            </button>
          </Link>
        </div>
        <div class="branch-project-content grid gap-5">
          <div class="description flex align-center gap-5">
            <h3>Client Name:</h3>
            <p class="text">Kankan Jyoti Nath</p>
          </div>
          <div class="description flex align-center gap-5">
            <h3>Phone Number:</h3>
            <p class="text">6002649802 | 7636896075</p>
          </div>
          <div class="description flex align-center gap-5">
            <h3>Email ID:</h3>
            <p class="text">jyotikankan222@gmail.com</p>
          </div>
          <div class="description flex align-center gap-5">
            <h3>Address:</h3>
            <p class="text">
              House No. 60, Ashram Road, Lachitnagar, Guwahati, Assam
            </p>
          </div>
          <div class="description flex align-center gap-5">
            <h3>House type:</h3>
            <p class="text">Assam Type</p>
          </div>
          <div class="description flex align-center gap-5">
            <h3>Site Description:</h3>
            <p class="text">Assam Type of ghor juntu assamese hoi</p>
          </div>
          <div class="description flex align-center gap-5">
            <h3>Project Initiated:</h3>
            <p class="text">12-June-2024</p>
          </div>
          <div class="description flex align-center gap-5">
            <h3>Project Duration:</h3>
            <p class="text">1.5 years</p>
          </div>
        </div>

        <div class="approve-button">
          <button class="status warning">Not Approved</button>
        </div>
      </div>
    </PopupLayout>
  );
}

export default SecondSlideBranchDashboard;
