import useSecondSlideData from "@/hooks/useSecondSlideData";
import PopupLayout from "@/layout/common/popupLayout";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";
import styles from "./SecondSlideUsers.module.css";
import useRequest from "@/hooks/useRequest";

function SecondSlideUsers() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(id, )
  const { viewedItem } = useSecondSlideData("users", "su_id");
  const { requestData } = useRequest(
    "users",
    null,
    `readOne/${searchParams.get("type")}/${id}`
  );
  console.log(requestData);
  let pref;
  switch (searchParams.get("type")) {
    case "super_admin":
      pref = "su";
      break;

    case "finance":
      pref = "fd";
      break;

    case "supervisor":
      pref = "sup";
      break;

    default:
      break;
  }
  return (
    <PopupLayout>
      <div className={styles.branchProjectPopup}>
        <div
          className={`${styles.flex} ${styles.alignStart} ${styles.jBetween}`}
        >
          <h2>User Information</h2>
          <Link to="/admin/users">
            <button type="button" className={styles.btnWarningClose}>
              Close
            </button>
          </Link>
        </div>

        <div
          className={`${styles.branchProjectContent} ${styles.grid} ${styles.gap5}`}
        >
          <div
            className={`${styles.description} ${styles.flex} ${styles.alignCenter} ${styles.gap5}`}
          >
            <h3>Name:</h3>
            <p className={styles.descriptionText}>
              {requestData && requestData[`${pref}_name`]}
            </p>
          </div>

          <div
            className={`${styles.description} ${styles.flex} ${styles.alignCenter} ${styles.gap5}`}
          >
            <h3>Phone Number:</h3>
            <p className={styles.descriptionText}>{requestData && requestData[`${pref}_contact`]} | {requestData && requestData[`${pref}_alt_contact`]}</p>
          </div>

          <div
            className={`${styles.description} ${styles.flex} ${styles.alignCenter} ${styles.gap5}`}
          >
            <h3>Email ID:</h3>
            <p className={styles.descriptionText}>{requestData && requestData[`${pref}_email`]}</p>
          </div>

          <div
            className={`${styles.description} ${styles.flex} ${styles.alignCenter} ${styles.gap5}`}
          >
            <h3>Address:</h3>
            <p className={styles.descriptionText}>
             {requestData && requestData[`${pref}_address`]}
            </p>
          </div>
        </div>

        <div className={styles.approveButton}>
          <Link
            to={`add-credentials/${searchParams.get("type")}?user=${requestData && requestData[`${pref}_email`]}`}
            className={styles.approveButtonLink}
          >
            <button className={styles.btnPrimary} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="file-check-alt"
              >
                <path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"></path>
              </svg>
              <span className={styles.btnPrimaryText}>Create Credentials</span>
            </button>
          </Link>

          <Link to="add" className={styles.approveButtonLink}>
            <button className={styles.btnPrimary} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="file-check-alt"
              >
                <path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"></path>
              </svg>
              <span className={styles.btnPrimaryText}>Update Password</span>
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </PopupLayout>
  );
}

export default SecondSlideUsers;
