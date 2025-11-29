import { useState } from "react";
import styles from "./DateRange.module.css";
import { useDispatch, useSelector } from "react-redux";

function DateRange({dateRange, setDateRange}) {
  // Get today's date
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  // Get date one month ago
  const getOneMonthAgoDate = () => {
    const today = new Date();
    today.setMonth(today.getMonth() - 1);
    return today.toISOString().split("T")[0];
  };

  const [fromDate, setFromDate] = useState(getOneMonthAgoDate());
  const [toDate, setToDate] = useState(getTodayDate());
  const dispatch = useDispatch()

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };


  function searchBasedOnDate(params) {
    console.log("Click date range")
    dispatch(setDateRange({from_date: fromDate, to_date: toDate}))
  }

  return (
    <div className={styles.dateRangeContainer}>
      <div className={styles.dateGroup}>
        <div className={styles.labelContainer}>
          <label className={styles.label}>From Date</label>
          {fromDate && (
            <p className={styles.dateText}>{formatDate(fromDate)}</p>
          )}
        </div>

        <input
          type="date"
          className={styles.dateInput}
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </div>

      <div className={styles.separator}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={styles.arrowIcon}
        >
          <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
        </svg>
      </div>

      <div className={styles.dateGroup}>
        <div className={styles.labelContainer}>
          <label className={styles.label}>To Date</label>
           {toDate && <p className={styles.dateText}>{formatDate(toDate)}</p>}
        </div>
        <input
          type="date"
          className={styles.dateInput}
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          min={dateRange.fromDate}
        />       
      </div>

      <div className={styles.dateGroup}>
        <button onClick={searchBasedOnDate} className={styles.searchBtn}>Search</button>
      </div>
    </div>
  );
}

export default DateRange;
