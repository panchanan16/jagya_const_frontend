import {  useNavigate } from "react-router-dom";
import styles from '@/forms/form.module.css'

function BackButtton() {
  const nagivate = useNavigate();
  return (
    <button onClick={()=> nagivate(-1)}  className={styles.closeButton}>
      ✕ Close
    </button>
  );
}

export default BackButtton;
