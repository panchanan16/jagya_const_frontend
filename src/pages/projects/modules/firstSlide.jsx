import SectionHeaderBtn from '@/components/buttons/sectionHeaderBtn'
import ItemActionBox from '@/components/itemAction/itemActionBox'
import SectionHeaderOption from '@/components/sectionHeaderOption/sectionHeaderOption'
import FirstSlideLayout from '@/layout/common/firstSlideLayout'
import { resetData } from '@/redux/features/clientSlice'
import { projectData } from '@/utils/projectData'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function FirstSlideProject() {  
    const { clientList, loading, error } = useSelector((state) => state.clients)
    const dispatch = useDispatch()

    useEffect(()=> {
        function setSlideData() {
            dispatch(resetData(projectData))
        }
        setSlideData();
    }, [])

    return (
       <FirstSlideLayout>
            <main>
                <div className="heading">
                    <h1>Projects</h1>
                    <p className="title">Find all projects and their datails here</p>
                </div>

                <SectionHeaderOption
                    EndBtn={<SectionHeaderBtn btnName="Add Projects" clickFn='/projects/add-project' />}
                />
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" name="checkbox" className="select-all" /></th>
                            <th className="">No.</th>
                            <th className="">Date</th>
                            <th className="">Project Name</th>
                            <th className="">Status</th>
                            <th className="">Deadline</th>
                            <th className="">Client Name</th>
                            <th className="">Phone Number</th>
                            <th className=""></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            clientList && clientList.map((item, ind) => (
                                <tr key={ind}>
                                    <td><input type="checkbox" name="" id="" onchange="toggleHighlight(this)"
                                        className="row-checkbox" /></td>
                                    <td>1</td>
                                    <td>{item.name}</td>
                                    <td className="text">Residential Building</td>
                                    <td className="text">
                                        <button className="status success">Completed</button>
                                    </td>
                                    <td className="text">19/05/2024</td>
                                    <td className="text">Kankan Jyoti Nath</td>
                                    <td className="text">+91 6002649802</td>
                                    <td className="">
                                        <ItemActionBox viewFn='/projects/project-details/3' />
                                    </td>
                                </tr>
                            ))
                        }

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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="arrow-to-right">
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

export default FirstSlideProject