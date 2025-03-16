import SectionHeaderBtn from '@/components/buttons/sectionHeaderBtn';
import SectionHeaderOption from '@/components/sectionHeaderOption/sectionHeaderOption';
import FirstSlideLayout from '@/layout/common/firstSlideLayout'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import clientActions from '@/redux/features/clientSlice/action';
import Table from '@/components/table/Table';



function FirstSlide() {
    const { clientList } = useSelector((state) => state.clients)
    const dispatch = useDispatch()
    const { getClientList, deleteClient } = clientActions

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
                    <Table
                       Theader={['Sl No.', 'Name', 'Ref No.', 'Contact', 'Alt Contact', 'Address', 'Email', 'Action']}
                       Trow={clientList}
                       Actions={{viewUrl:'client_id', deleteUrl: deleteClient, editUrl: 'client_id'}}
                    />
                </div>
            </main>     
        </FirstSlideLayout>
    )
}

export default FirstSlide