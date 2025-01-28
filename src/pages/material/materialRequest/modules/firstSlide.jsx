import SectionHeaderBtn from "@/components/buttons/sectionHeaderBtn";
import ItemActionBox from "@/components/itemAction/itemActionBox"
import SectionHeaderOption from "@/components/sectionHeaderOption/sectionHeaderOption";
import { useLayoutContext } from "@/context/layoutContext";
import FirstSlideLayout from "@/layout/common/firstSlideLayout"


function FirstSlide() {
    const {dispatchLayoutAction} = useLayoutContext()
    const {openPopupLayout} = dispatchLayoutAction
 
    return (
        <FirstSlideLayout>
            <main>
                <div className="heading">
                    <h1>Material Requests</h1>
                    <p className="title">See all material request here</p>
                </div>

                {/* <div className="top-section flex align-center j-between">
                    <div className="section-text">
                        <h2 className="flex gap-10">Request List</h2>
                    </div>
                    <div className="utility-section flex align-center gap-10">                       
                        <div className="search flex align-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="search-icon">
                                <path
                                    d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
                                </path>
                            </svg>
                            <input type="text" id="searchQuery" oninput="search()" placeholder="Search" />
                        </div>
                        <div className="filter">
                            <button className="btn-filter flex align-center gap-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="filter"
                                    className="filter-icon">
                                    <path
                                        d="M19,2H5A3,3,0,0,0,2,5V6.17a3,3,0,0,0,.25,1.2l0,.06a2.81,2.81,0,0,0,.59.86L9,14.41V21a1,1,0,0,0,.47.85A1,1,0,0,0,10,22a1,1,0,0,0,.45-.11l4-2A1,1,0,0,0,15,19V14.41l6.12-6.12a2.81,2.81,0,0,0,.59-.86l0-.06A3,3,0,0,0,22,6.17V5A3,3,0,0,0,19,2ZM13.29,13.29A1,1,0,0,0,13,14v4.38l-2,1V14a1,1,0,0,0-.29-.71L5.41,8H18.59ZM20,6H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z">
                                    </path>
                                </svg>
                                <span className="text">Filter</span>
                            </button>
                        </div>
                        <div className="approve-button">
                            <button className="btn-primary" type="button" onclick="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="file-check-alt"><path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"></path></svg>
                                <span className="text">Approve</span>
                            </button>
                        </div>
                    </div>
                </div> */}
                <SectionHeaderOption EndBtn={<SectionHeaderBtn btnName="Approve" clickFn={'jj'} />} />

                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" name="checkbox" className="select-all" /></th>
                            <th className="">No.</th>
                            <th className="">Date</th>
                            <th className="">Client Name</th>
                            <th className="">Phone Number</th>
                            <th className="">Status</th>
                            <th className="">Installment</th>
                            <th className=""></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><input type="checkbox" name="" id="" onchange="toggleHighlight(this)"
                                className="row-checkbox" /></td>
                            <td>1</td>
                            <td>12-Nov-2024</td>
                            <td className="text">Kankan Jyoti Nath</td>
                            <td className="text">+91 6002649802</td>
                            <td className="text">
                                <button className="status warning">Not Approved</button>
                            </td>
                            <td className="text">1st Installment</td>
                            <td className="">
                               <ItemActionBox viewFn={openPopupLayout} />
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
            </main>
        </FirstSlideLayout>

    )
}

export default FirstSlide