import SectionHeaderBtn from "@/components/buttons/sectionHeaderBtn"
import ItemActionBox from "@/components/itemAction/itemActionBox"
import SectionHeaderOption from "@/components/sectionHeaderOption/sectionHeaderOption"
import FirstSlideLayout from "@/layout/common/firstSlideLayout"

function FirstSlideExpense() {
  return (
    <FirstSlideLayout>
      <main>
        <div class="heading">
          <h1>Expenses</h1>
          <p class="title">Find all expenses here</p>
        </div>

        <div class="section-text">
          <h2 class="flex gap-10">Expenses List</h2>
        </div>
        <SectionHeaderOption EndBtn={<SectionHeaderBtn btnName="Add Expense" clickFn='/expense/add-expense' />}>
          <div class="change-options flex align-center">
            <button type="button" class="btn-change flex-1">All</button>
            <button type="button" class="btn-change flex-1 active">Project</button>
          </div>
        </SectionHeaderOption>

        <div class="main-table">
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" name="checkbox" class="select-all" /></th>
                <th class="">No.</th>
                <th class="">Date</th>
                <th class="">Expense Name</th>
                <th class="">Amount</th>
                <th class="">Mode</th>
                <th class="">Category</th>
                <th class="">Remarks</th>
                <th class=""></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><input type="checkbox" name="" id="" onchange="toggleHighlight(this)"
                  class="row-checkbox" /></td>
                <td>1</td>
                <td class="text">15-Mar-2024</td>
                <td class="text">Vehicle Charges</td>
                <td class="text"> &#8377; <span>50,000</span></td>
                <td class="text status">Cash</td>
                <td class="text">Projects</td>
                <td class="text">null</td>
                <td>
                  <ItemActionBox viewFn={'/finance/finance-details/4'} />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    id="left-arrow-to-left">
                    <path fill=""
                      d="M21,11H9.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H21a1,1,0,0,0,0-2ZM3,3A1,1,0,0,0,2,4V20a1,1,0,0,0,2,0V4A1,1,0,0,0,3,3Z">
                    </path>
                  </svg>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    id="arrow-to-right">
                    <path fill=""
                      d="M17.71,11.29l-4-4a1,1,0,1,0-1.42,1.42L14.59,11H3a1,1,0,0,0,0,2H14.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76A1,1,0,0,0,17.71,11.29ZM21,4a1,1,0,0,0-1,1V19a1,1,0,0,0,2,0V5A1,1,0,0,0,21,4Z">
                    </path>
                  </svg>
                </td>
              </tr>
            </tfoot>
          </table>
          <table class="hide">
            <thead>
              <tr>
                <th><input type="checkbox" name="checkbox" class="select-all" /></th>
                <th class="">No.</th>
                <th class="">Date</th>
                <th class="">Expense Name</th>
                <th class="">Amount</th>
                <th class="">Mode</th>
                <th class="">Category</th>
                <th class="">Remarks</th>
                <th class=""></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><input type="checkbox" name="" id="" onchange="toggleHighlight(this)"
                  class="row-checkbox" /></td>
                <td>1</td>
                <td class="text">15-Mar-2024</td>
                <td class="text">Vehicle Charges</td>
                <td class="text"> &#8377; <span>50,000</span></td>
                <td class="text status">Cash</td>
                <td class="text">Projects</td>
                <td class="text">null</td>
                <td>
                  <div class="menu-dropdown">
                    <div class="dropdown-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        class="view-all">
                        <path fill=""
                          d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z">
                        </path>
                      </svg>
                    </div>
                    <div class="menu-dropdown-list flex align-center flex-column hide">
                      <p class="title flex align-center gap-5" onclick="editExpense()">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          class="svg-18">
                          <path fill=""
                            d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z">
                          </path>
                        </svg>
                        <span class="text">Edit</span>
                      </p>
                      <p class="title flex align-center gap-5" onclick="confirmAlert()">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          class="svg-18">
                          <path fill=""
                            d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z">
                          </path>
                        </svg>
                        <span class="text">Delete</span>
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    id="left-arrow-to-left">
                    <path fill=""
                      d="M21,11H9.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H21a1,1,0,0,0,0-2ZM3,3A1,1,0,0,0,2,4V20a1,1,0,0,0,2,0V4A1,1,0,0,0,3,3Z">
                    </path>
                  </svg>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    id="arrow-to-right">
                    <path fill=""
                      d="M17.71,11.29l-4-4a1,1,0,1,0-1.42,1.42L14.59,11H3a1,1,0,0,0,0,2H14.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76A1,1,0,0,0,17.71,11.29ZM21,4a1,1,0,0,0-1,1V19a1,1,0,0,0,2,0V5A1,1,0,0,0,21,4Z">
                    </path>
                  </svg>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </main>
    </FirstSlideLayout>
  )
}

export default FirstSlideExpense