// import { Link } from "react-router-dom";

// function Phases({ Name, Status }) {
//   console.log(Status)
//   return (
//     <div className="grid-box">
//       <div className="title flex align-center">
//         <span className="dot"></span>
//         <span className="text flex-1 uppercase">{Name}</span>
//         <div class="flex align-center j-between">
//           <Link to="assigned">
//             <button>Contractor</button>
//           </Link>

//           <select name="" id="" defaultvalue={Status}>
//             <option value="Not Started">Not Started</option>
//             <option value="In Progress">In Progress</option>
//             <option value="Completed">Completed</option>
//           </select>
//         </div>

//         <span className="task-svg">
//           <Link to="assigned">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               id="user"
//               className="svg-18"
//             >
//               <path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"></path>
//             </svg>
//           </Link>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             onclick="confirmAlert()"
//             className="svg-18"
//           >
//             <path
//               fill=""
//               d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
//             ></path>
//           </svg>
//         </span>
//       </div>

//       <div className="task-box">
//         <p className="text">
//           Slab Casting
//           <span className="task-svg">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               onclick="confirmAlert()"
//               className="warning"
//             >
//               <path
//                 fill=""
//                 d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
//               ></path>
//             </svg>
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Phases;

import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Phases.module.css";
import useRequest from "@/hooks/useRequest";

function Phases({ Name, Status, phaseId }) {
  const [currentStatus, setCurrentStatus] = useState(Status);
  const { makeRequest } = useRequest("project_phase");

  const getStatusColor = (status) => {
    switch (status) {
      case "Not Started":
        return "#94a3b8";
      case "In Progress":
        return "#3b82f6";
      case "Completed":
        return "#22c55e";
      default:
        return "#94a3b8";
    }
  };

  const handleStatusChange = async (e) => {
    await makeRequest({ pro_phase_id: phaseId, pro_phase_status: e.target.value }, null, `update_status`);
    setCurrentStatus(e.target.value);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <span
            className={styles.statusDot}
            style={{ backgroundColor: getStatusColor(currentStatus) }}
          ></span>
          <h3 className={styles.title}>{Name}</h3>
        </div>

        <div className={styles.actions}>
          <Link to="assigned" className={styles.linkButton}>
            <button className={styles.contractorBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={styles.icon}
              >
                <path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"></path>
              </svg>
              Contractor
            </button>
          </Link>

          <select
            className={styles.statusSelect}
            defaultValue={Status}
            onChange={handleStatusChange}
            style={{
              borderColor: getStatusColor(currentStatus),
              color: getStatusColor(currentStatus),
            }}
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      <div className={styles.taskSection}>
        <div className={styles.task}>
          <span className={styles.taskText}>Slab Casting</span>
          <button
            className={styles.deleteBtn}
            onClick={() => window.confirmAlert && window.confirmAlert()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={styles.deleteIcon}
            >
              <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Phases;
