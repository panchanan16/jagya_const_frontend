import PopupLayout from "@/layout/common/popupLayout";
import SectionLayout from "@/layout/common/sectionLayout";
import React from "react";
import { Link } from "react-router-dom";

function SecondSlideBranchRequest() {
  return (
    <PopupLayout>
      <div class="branch-project-popup">
        <div class="flex align-start j-between">
          <h2>Residential</h2>
          <Link to="/branch-request">
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
          <button class="btn-primary" type="button" onclick="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="file-check-alt"
            >
              <path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"></path>
            </svg>
            <span class="text">Approve</span>
          </button>
        </div>
      </div>
    </PopupLayout>
  );
}

export default SecondSlideBranchRequest;
