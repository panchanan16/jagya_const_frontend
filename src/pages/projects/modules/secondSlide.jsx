import { usePopupContext } from '@/context/popupContext';
import SecondSlideLayout from '@/layout/common/secondSlideLayout'


function SecondSlideProject() {
    const { dispatchActions } = usePopupContext();
    const { closeSecondSlide } = dispatchActions;


    return (
        <SecondSlideLayout>
            <main>
                <div class="main-btn flex">
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"
                        id="arrow-left" class="main-svg" onClick={closeSecondSlide}>
                        <path fill=""
                            d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z">
                        </path>
                    </svg>
                    <button class="btn-primary" type="button" onclick="editProject(this)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="">
                            <path fill=""
                                d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z">
                            </path>
                        </svg>
                        <span>Edit</span>
                    </button>
                </div>

                <div class="header-text">
                    <h2>Residential G+2 Building</h2>
                </div>
                {/* <!-- DETAILS  --> */}
                <div class="contents grid gtc-2 gap-10">
                    <div class="description flex align-center gap-5">
                        <h3>Client Name:</h3>
                        <p class="text">Kankan Jyoti Nath</p>
                    </div>
                    <div class="description flex align-center gap-5">
                        <h3>Phone / Alternate Number:</h3>
                        <p class="text">6002649802 / 7636896075</p>
                    </div>
                    <div class="description flex align-center gap-5">
                        <h3>Email ID:</h3>
                        <p class="text">jyotikankan222@gmail.com</p>
                    </div>
                    <div class="description flex align-center gap-5">
                        <h3>Address:</h3>
                        <p class="text">House No. 60, Ashram Road, Lachitnagar, Guwahati, Assam</p>
                    </div>
                    <div class="description flex align-center gap-5">
                        <h3>House type:</h3>
                        <p class="text">Assam Type</p>
                    </div>
                    <div class="description flex align-center gap-5">
                        <h3>Site Description:</h3>
                        <p class="text">Assam Type of ghor juntu assamese hoi</p>
                    </div>
                    <div class="description flex align-center gap-5">
                        <h3>Project Initiated:</h3>
                        <p class="text">12-June-2024</p>
                    </div>
                    <div class="description flex align-center gap-5">
                        <h3>Project Duration:</h3>
                        <p class="text">1.5 years</p>
                    </div>
                </div>

                {/* <!-- EMPLOYEE LIST --> */}
                <div class="p-employees flex align-center gap-10">
                    <h3>Assignees:</h3>

                    <div class="employee-container flex align-center gap-10">
                        <div class="e-profile flex align-center" onclick="seeEmployee()">
                            <img src="/img/admin.jpg" alt="profile" loading="lazy" />
                            <p class="text">Mohibul Hoque</p>
                        </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus"
                        onclick="addEmployee()">
                        <path
                            d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z">
                        </path>
                    </svg>
                </div>

                <hr />
                {/* <!-- Attached Files --> */}
                <div class="file-structure">
                    <div class="file-header flex align-start j-between">
                        <h3 class="heading">Attached Files:</h3>
                        <button class="btn-primary" type="button" onclick="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="image-plus">
                                <path
                                    d="M19,10a1,1,0,0,0-1,1v3.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.71L9.41,11.12a2.79,2.79,0,0,0-3.93,0L4,12.61V7A1,1,0,0,1,5,6h8a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19.22A2.79,2.79,0,0,0,4.78,22H17.22a2.88,2.88,0,0,0,.8-.12h0a2.74,2.74,0,0,0,2-2.65V11A1,1,0,0,0,19,10ZM5,20a1,1,0,0,1-1-1V15.43l2.89-2.89a.78.78,0,0,1,1.1,0L15.46,20Zm13-1a1,1,0,0,1-.18.54L13.3,15l.71-.7a.77.77,0,0,1,1.1,0L18,17.21ZM21,4H20V3a1,1,0,0,0-2,0V4H17a1,1,0,0,0,0,2h1V7a1,1,0,0,0,2,0V6h1a1,1,0,0,0,0-2Z">
                                </path>
                            </svg>
                            <span class="text">Upload</span>
                        </button>
                    </div>
                    <div class="field">
                        <button class="btn-secondary" type="button" onclick="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                class="">
                                <path fill=""
                                    d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                </path>
                            </svg>
                            <span class="text">Add File</span>
                        </button>
                    </div>
                    <div class="files flex align-center gap-10 f-wrap">
                        <div class="file-data flex align-center gap-5">
                            <div class="file-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="file-upload-alt"
                                    class="svg-25">
                                    <path
                                        d="M13,20H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4h5V7a3,3,0,0,0,3,3h3v2a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,12.05,2H6A3,3,0,0,0,3,5V19a3,3,0,0,0,3,3h7a1,1,0,0,0,0-2ZM13,5.41,15.59,8H14a1,1,0,0,1-1-1ZM8,8a1,1,0,0,0,0,2H9A1,1,0,0,0,9,8Zm6,4H8a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm6.71,5.29-2-2a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2,2a1,1,0,0,0,1.42,1.42l.29-.3V21a1,1,0,0,0,2,0V18.41l.29.3a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,17.29ZM12,18a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Z">
                                    </path>
                                </svg>
                            </div>
                            <div class="file-details">
                                <span class="text">Resume.pdf</span>
                                <div class="dropdown">
                                    <span class="view-more">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            class="svg-15">
                                            <path fill=""
                                                d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z">
                                            </path>
                                        </svg>
                                    </span>
                                    <div class="dropdown-list flex align-center flex-column hide">
                                        <p class="title flex align-center gap-5"
                                            onclick="openProjectDetails('second-slide', this)">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="eye"
                                                class="svg-18">
                                                <path
                                                    d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z">
                                                </path>
                                            </svg>
                                            <span class="text">View</span>
                                        </p>
                                        <p class="title flex align-center gap-5" onclick="editProject()">
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
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                {/* <!-- SUB-TASKS  --> */}
                <div class="task">
                    <div class="task-header flex align-start j-between">
                        <h3>Tasks</h3>
                        <button class="btn-primary" type="button" onclick="addSubTask()">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                class="">
                                <path fill=""
                                    d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                </path>
                            </svg>
                            <span class="text">Add</span>
                        </button>
                    </div>
                    <div class="task-grid grid gtc-3 gap-10">
                        <div class="grid-box">
                            <div class="title flex align-center gap-10">
                                <span class="dot"></span>
                                <span class="text flex-1">Phase I</span>
                                <select name="" id="">
                                    <option value="">Not Started</option>
                                    <option value="">In Progress</option>
                                    <option value="">Completed</option>
                                </select>
                            </div>

                            <div class="task-box">
                                <p class="text">
                                    Slab Casting
                                    <span class="task-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="user"
                                            class="svg-18">
                                            <path
                                                d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z">
                                            </path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            onclick="confirmAlert()" class="svg-18">
                                            <path fill=""
                                                d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z">
                                            </path>
                                        </svg>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="grid-box">
                            <p class="title inProgress flex align-center gap-10">
                                <span class="dot"></span>
                                Phase II
                            </p>
                            <div class="task-box"></div>
                        </div>
                        <div class="grid-box">
                            <p class="title completed flex align-center gap-10">
                                <span class="dot"></span>
                                Phase III
                            </p>
                            <div class="task-box"></div>
                        </div>
                    </div>
                </div>
            </main>
        </SecondSlideLayout>
    )
}

export default SecondSlideProject