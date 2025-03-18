import ItemActionBox from "@/components/itemAction/itemActionBox";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import { Link } from "react-router-dom";

function FirstSlideBranchList() {
  return (
    <FirstSlideLayout>
      <main>
        <div className="heading">
          <h1>Branch List</h1>
          <p className="title">Find all branch lists here</p>
        </div>
        <div className="top-section flex align-center j-between">
          <div className="section-text">
            <h2 className="flex gap-10">All Branches</h2>
          </div>
          <div className="utility-section flex align-center gap-10">
            <div className="search flex align-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="search-icon"
              >
                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
              </svg>
              <input
                type="text"
                id="searchQuery"
                oninput="search()"
                placeholder="Search"
              />
            </div>
            <div className="filter">
              <button className="btn-filter flex align-center gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="filter"
                  className="filter-icon"
                >
                  <path d="M19,2H5A3,3,0,0,0,2,5V6.17a3,3,0,0,0,.25,1.2l0,.06a2.81,2.81,0,0,0,.59.86L9,14.41V21a1,1,0,0,0,.47.85A1,1,0,0,0,10,22a1,1,0,0,0,.45-.11l4-2A1,1,0,0,0,15,19V14.41l6.12-6.12a2.81,2.81,0,0,0,.59-.86l0-.06A3,3,0,0,0,22,6.17V5A3,3,0,0,0,19,2ZM13.29,13.29A1,1,0,0,0,13,14v4.38l-2,1V14a1,1,0,0,0-.29-.71L5.41,8H18.59ZM20,6H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"></path>
                </svg>
                <span className="text">Filter</span>
              </button>
            </div>
            <div className="add-button">              
              <Link to='add-branch'>
                <button
                  className="btn-primary"
                  type="button"
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
                  <span className="text">Add Branch</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="checkbox" className="select-all" />
              </th>
              <th className="">No.</th>
              <th className="">Date</th>
              <th className="">Branch Name</th>
              <th className="">Phone Number</th>
              <th className="">Location</th>
              <th className="">Total Projects</th>
              <th className="">Total Amount</th>
              <th className="">Status</th>
              <th className=""></th>
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
                  className="row-checkbox"
                />
              </td>
              <td>1</td>
              <td>12-Nov-2024</td>
              <td className="text">Lakhimpur Branch</td>
              <td className="text">+91 6000192289</td>
              <td className="text">North Lakhimpur, Dhakuakhana</td>
              <td className="text">20</td>
              <td className="text">&#8377; 50000</td>
              <td className="text status">
                <button className="status success">Online</button>
              </td>
              <td className="">
                <ItemActionBox viewFn={`10`} />
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

export default FirstSlideBranchList;
