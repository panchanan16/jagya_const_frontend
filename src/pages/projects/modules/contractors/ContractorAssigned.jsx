import SectionLayout from "@/layout/common/sectionLayout";
import { Link } from "react-router-dom";

function ContractorAssigned() {
  return (
    <SectionLayout>
      <div class="pro-emp-popup">
        <div class="form">
          <h3>Residential G+2 building</h3>
          <Link to='/projects/80/'>
            <button type="button" class="btn-warning close">
              Close
            </button>
          </Link>
          <div class="employee-column">
            <div class="employee-list flex align-center j-between">
              <div class="emp-profile flex gap-5">
                <img src="/img/admin.jpg" alt="jpg" />
                <div class="profile-text">
                  <p>Kankan Jyoti Nath</p>
                  <p><span>8899007788</span> <span>slab casting</span></p>            
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
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default ContractorAssigned;
