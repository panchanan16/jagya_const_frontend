import { Link, useNavigate } from "react-router-dom";
import styles from "@/forms/form.module.css";

function BackButtton() {
  const nagivate = useNavigate();
  return (
    <button onClick={() => nagivate(-1)} className={styles.closeButton}>
      ✕ Close
    </button>
  );
}

export function LinkBackButton() {
  const nagivate = useNavigate();
  return (
    <button onClick={() => nagivate(-1)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        id="arrow-left"
        className="main-svg"
      >
        <path
          fill=""
          d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"
        ></path>
      </svg>
    </button>
  );
}

export default BackButtton;
