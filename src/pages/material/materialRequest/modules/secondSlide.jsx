import PopupLayout from '@/layout/common/popupLayout'
import React from 'react'
import EditReqItemForm from './editReqItem/editItemform';
import {useSubAppContext } from '@/context/secondSlideContext';
import { useLayoutContext } from '@/context/layoutContext';

function SecondSlide() {
    const { detailDispatchActions } = useSubAppContext();
    const {dispatchLayoutAction} = useLayoutContext()
    const { openDetailSubModal, closeDetailSubModal } = detailDispatchActions;
    const {closePopupLayout} = dispatchLayoutAction


    return (
        <PopupLayout>
            <div class="inventory-popup">
                <div class="flex align-start j-between">
                    <h2>Request No: 1</h2>
                    <button type="button" class="btn-warning close" onClick={closePopupLayout}>Close</button>
                </div>
                <div class="contents grid gap-10">
                    <div class="description flex align-center gap-5">
                        <h3>Date:</h3>
                        <p class="text">12-Nov-2024</p>
                    </div>
                    <div class="description flex align-center gap-5">
                        <h3>Client Name:</h3>
                        <p class="text">Kankan Jyoti Nath</p>
                    </div>
                    <div class="description flex align-center gap-5">
                        <h3>Phone / Alternate Number:</h3>
                        <p class="text">6002649802 / 7636896075</p>
                    </div>
                </div>
                <div class="approveAll-btn flex align-center gap-10">
                    <button class="btn-primary" type="button" onclick="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="file-check-alt"><path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"></path></svg>
                        <span class="text">Approve</span>
                    </button>
                    <button class="btn-primary" type="button" onclick="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="file-check-alt"><path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"></path></svg>
                        <span class="text">Approve All</span>
                    </button>
                    <button class="btn-primary" type="button" onclick="">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="receipt"><path fill="" d="M9,12H7a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2ZM8,10h4a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Zm1,6H7a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm12-4H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-6.44-2.83a.76.76,0,0,0-.18-.09.6.6,0,0,0-.19-.06,1,1,0,0,0-.9.27A1.05,1.05,0,0,0,12,17a1,1,0,0,0,.07.38,1.19,1.19,0,0,0,.22.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,14,17a1.05,1.05,0,0,0-.29-.71A1.58,1.58,0,0,0,13.56,16.17Zm.14-3.88a1,1,0,0,0-1.62.33A1,1,0,0,0,13,14a1,1,0,0,0,1-1,1,1,0,0,0-.08-.38A.91.91,0,0,0,13.7,12.29Z"></path></svg>
                        <span class="text">Generate Invoice</span>
                    </button>
                </div>
               <EditReqItemForm closeFormfn={closeDetailSubModal} />
                <div class="inventory-table">
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox" name="checkbox" class="select-all" /></th>
                                <th class="">No.</th>
                                <th class="">Item</th>
                                <th class="">Quantity</th>
                                <th class="">Rate</th>
                                <th class="">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1, 1, 1, 11, 1, 1,1,1,1,1,1,1, 1].map((item, ind) => (
                                    <tr key={ind}>
                                        <td><input type="checkbox" name="" id="" onchange="toggleHighlight(this)"
                                            class="row-checkbox" /></td>
                                        <td class="text">1</td>
                                        <td class="text">Cement</td>
                                        <td class="text">10</td>
                                        <td class="text">&#8377; 500</td>
                                        <td class="flex gap-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                onClick={openDetailSubModal}>
                                                <path fill=""
                                                    d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill=""
                                                    d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z">
                                                </path>
                                            </svg>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </PopupLayout>
    )
}

export default SecondSlide;