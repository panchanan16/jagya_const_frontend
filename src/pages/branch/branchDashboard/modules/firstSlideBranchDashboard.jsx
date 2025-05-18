import ItemActionBox from "@/components/itemAction/itemActionBox";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import { Link } from "react-router-dom";

function FirstSlideBranchDashboard() {
  return (
    <FirstSlideLayout>
      <main>
        <div class="heading">
          <h1>Branch Dashboard</h1>
          <p class="title">Find all branch projects and their details here</p>
        </div>

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
                <ItemActionBox viewFn={"89"} />
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
      </main>
    </FirstSlideLayout>
  );
}

export default FirstSlideBranchDashboard;
