import SectionHeaderBtn from '@/components/buttons/sectionHeaderBtn';
import ItemActionBox from '@/components/itemAction/itemActionBox'
import SectionHeaderOption from '@/components/sectionHeaderOption/sectionHeaderOption';
import FirstSlideLayout from '@/layout/common/firstSlideLayout'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { _GET } from '@/utils/request/request';
import clientActions from '@/redux/features/clientSlice/action';
import clientsEndpoint from '@/api/clientsApi';


function FirstSlide() {
    const { clientList, loading } = useSelector((state) => state.clients)
    const dispatch = useDispatch()
    const { getClientList } = clientActions

    console.log(clientsEndpoint.getOneWithId(23))

    useEffect(() => {
        getClientList(dispatch)
    }, [])

    return (
        <FirstSlideLayout>
            <main>
                <div className="heading">
                    <h1>All Clients</h1>
                    <p className="title">Find the list of clients here</p>
                </div>

                <SectionHeaderOption EndBtn={<SectionHeaderBtn btnName='add clients' clickFn={'/clients/add-clients'} />} />

                <div className="main-table">
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox" name="checkbox" className="select-all" /></th>
                                <th className="">No.</th>
                                <th className="">Name</th>
                                <th className="">Phone Number</th>
                                <th className="">Alternate Number</th>
                                <th className="">Email</th>
                                <th className="">Address</th>
                                <th className=""></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                !loading && clientList.map((item, ind) => (
                                    <tr key={ind}>
                                        <td><input type="checkbox" name="" id="" onchange="toggleHighlight(this)"
                                            className="row-checkbox" /></td>
                                        <td>1</td>
                                        <td className="text">{item.name}</td>
                                        <td className="text">+91 <span>6000192289</span></td>
                                        <td className="text">+91 <span>6000192289</span></td>
                                        <td className="text">dekapanchanan16534@gmail.com</td>
                                        <td className="text">Guwahati, Assam</td>
                                        <td className="flex">
                                            <ItemActionBox
                                                viewFn={'/clients/client-details/3'}
                                            />
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

export default FirstSlide