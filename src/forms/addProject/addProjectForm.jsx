import SearchInput from '@/components/searchInput/searchInput';
// import { useLayoutContext } from '@/context/layoutContext';
import PopupLayout from '@/layout/common/popupLayout'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddProjectForm() {
    const [profileAcc, setprofileAcc] = useState(false)
    const navigate = useNavigate();

    const handleNavigation = () => {
      navigate('/projects'); 
    };


    return (
        <PopupLayout>
            <div className="add-project-popup blur">
                <div className="form">
                    <h2>Add a Project</h2>
                    <button type="button" className="btn-warning close" onClick={handleNavigation}>Close</button>
                    <hr />
                    <div className="grid gtc-2 gap-10 add-project-header">
                        <SearchInput />
                        <div className="field add-field-btn">
                            <p className="opacity-0">0</p>
                            <button className="btn-primary j-center" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                    className="">
                                    <path fill=""
                                        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                    </path>
                                </svg>
                                <span className="text">Add a New Client</span>
                            </button>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion-heading flex align-center j-between">
                            <h3>Profile details</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-down"
                                className="svg-18 arrow">
                                <path
                                    d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z">
                                </path>
                            </svg>
                        </div>
                        <div className={`accordion-data profile-accordion ${profileAcc? '' : 'hide'}`}>
                            <div className="grid gtc-2 gap-10">
                                <div className="field">
                                    <p className="title">Name</p>
                                    <input type="text" name="" id="" required />
                                </div>
                                <div className="field">
                                    <p className="title">Contact Number</p>
                                    <input type="number" name="" id="" required />
                                </div>
                                <div className="field">
                                    <p className="title">Alternate Number<span>(*optional)</span></p>
                                    <input type="number" name="" id="" />
                                </div>
                                <div className="field">
                                    <p className="title">Email<span>(*optional)</span></p>
                                    <input type="email" name="" id="" />
                                </div>
                                <div className="field">
                                    <p className="title">Address<span>(*optional)</span></p>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="field">
                                    <p className="title">Other Details<span>(*optional)</span></p>
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="accordion">
                        <div className="accordion-heading flex align-center j-between">
                            <h3>Project details</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-down"
                                className="svg-18 arrow">
                                <path
                                    d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z">
                                </path>
                            </svg>
                        </div>
                        <div className="accordion-data hide">
                            <div className="grid gtc-2 gap-10">
                                <div className="field">
                                    <p className="title">Project Name</p>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="field">
                                    <p className="title">Deadline<span>(*optional)</span></p>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="field">
                                    <p className="title">Total Amount</p>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="field">
                                    <p className="title">Advance Amount</p>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="field">
                                    <p className="title">House Type</p>
                                    <select name="cname" id="" className="house-type">
                                        <option value="">Assam Type</option>
                                        <optgroup label="RCC">
                                            <option value="G+1">G+1</option>
                                            <option value="G+2">G+2</option>
                                        </optgroup>
                                    </select>
                                </div>
                                <div className="field">
                                    <p className="title">Site Description<span>(*optional)</span></p>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="field">
                                    <p className="title">Project Duration <span>in years</span>
                                        <span>(*optional)</span></p>
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="accordion">
                        <div className="accordion-heading flex align-center j-between">
                            <h3>Attached files</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-down"
                                className="svg-18 arrow">
                                <path
                                    d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z">
                                </path>
                            </svg>
                        </div>
                        <div className="accordion-data hide">
                            <div className="field">
                                <button className="btn-secondary" type="button" onclick="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="image-plus">
                                        <path
                                            d="M19,10a1,1,0,0,0-1,1v3.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.71L9.41,11.12a2.79,2.79,0,0,0-3.93,0L4,12.61V7A1,1,0,0,1,5,6h8a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19.22A2.79,2.79,0,0,0,4.78,22H17.22a2.88,2.88,0,0,0,.8-.12h0a2.74,2.74,0,0,0,2-2.65V11A1,1,0,0,0,19,10ZM5,20a1,1,0,0,1-1-1V15.43l2.89-2.89a.78.78,0,0,1,1.1,0L15.46,20Zm13-1a1,1,0,0,1-.18.54L13.3,15l.71-.7a.77.77,0,0,1,1.1,0L18,17.21ZM21,4H20V3a1,1,0,0,0-2,0V4H17a1,1,0,0,0,0,2h1V7a1,1,0,0,0,2,0V6h1a1,1,0,0,0,0-2Z">
                                        </path>
                                    </svg>
                                    <span className="text">Upload</span>
                                </button>
                            </div>
                            <div className="uploaded-files flex align-center gap-10 f-wrap">
                                <figure className="hide">
                                    <img src="/img/admin.jpg" alt="file" />
                                    <figcaption>Admin.jpg</figcaption>
                                    <span>&times</span>
                                </figure>
                            </div>
                        </div>
                    </div>


                    <div className="action-btn flex gap-10">
                        <button type="button" className="btn-success flex-1">Add</button>
                        <button type="button" className="btn-warning flex-1"
                            onclick="closemainPopup()">Cancel</button>
                    </div>
                </div>
            </div>
        </PopupLayout>
    )
}

export default AddProjectForm;