import ItemActionBox from "@/components/itemAction/itemActionBox";
import useSecondSlideData from "@/hooks/useSecondSlideData";
import SecondSlideLayout from "@/layout/common/secondSlideLayout";
import { Link } from "react-router-dom";

function SecondSlideBranchList() {
  const { viewedItem } = useSecondSlideData("branch_data", "br_id");

  return (
    <SecondSlideLayout>
      <main>
        <div class="main-btn flex">
          <Link to="/admin/branch-list">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              id="arrow-left"
              class="main-svg"
              onclick="openProjectDetails('first-slide', this)"
            >
              <path
                fill=""
                d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"
              ></path>
            </svg>
          </Link>
        </div>

        <div class="header-text">
          <h2></h2>
        </div>

        <div class="contents grid gtc-2 gap-10">
          <div class="description flex align-center gap-5">
            <h3>Branch Name:</h3>
            <p class="text">{viewedItem && viewedItem.b_name}</p>
          </div>
          <div class="description flex align-center gap-5">
            <h3>Phone Number:</h3>
            <p class="text">6002649802 | 7636896075</p>
          </div>
          <div class="description flex align-center gap-5">
            <h3>Location:</h3>
            <p class="text">
              House No. 60, Ashram Road, Lachitnagar, Guwahati, Assam
            </p>
          </div>
          <div class="description flex align-center gap-5">
            <h3>Total Project:</h3>
            <p class="text">18</p>
          </div>
          <div class="description flex align-center gap-5">
            <h3>Total Commission:</h3>
            <p class="text">&#8377; 5000</p>
          </div>
        </div>

        <hr />
        <div class="main-table">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="checkbox" class="select-all" />
                </th>
                <th class="">No.</th>
                <th class="">Date</th>
                <th class="">Project Name</th>
                <th class="">Client Name</th>
                <th class="">Phone Number</th>
                <th class="">Admin Approval</th>
                <th class=""></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    onchange="toggleHighlight(this)"
                    class="row-checkbox"
                  />
                </td>
                <td>1</td>
                <td>12-Nov-2024</td>
                <td class="text">Residential Building</td>
                <td class="text">Kankan Jyoti Nath</td>
                <td class="text">+91 6002649802</td>
                <td class="text">
                  <button class="status warning">Not Approved</button>
                </td>
                <td class="">
                  <ItemActionBox viewFn={`3`} />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="left-arrow-to-left"
                  >
                    <path
                      fill=""
                      d="M21,11H9.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H21a1,1,0,0,0,0-2ZM3,3A1,1,0,0,0,2,4V20a1,1,0,0,0,2,0V4A1,1,0,0,0,3,3Z"
                    ></path>
                  </svg>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="arrow-to-right"
                  >
                    <path
                      fill=""
                      d="M17.71,11.29l-4-4a1,1,0,1,0-1.42,1.42L14.59,11H3a1,1,0,0,0,0,2H14.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76A1,1,0,0,0,17.71,11.29ZM21,4a1,1,0,0,0-1,1V19a1,1,0,0,0,2,0V5A1,1,0,0,0,21,4Z"
                    ></path>
                  </svg>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </main>
    </SecondSlideLayout>
  );
}

export default SecondSlideBranchList;
