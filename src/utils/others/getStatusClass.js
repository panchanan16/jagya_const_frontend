import styles from "@/pages/clientsVendor/client/modules/requestPanel/Materialrequestpanel.module.css";  
  
  export const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return styles.statusApproved;
      case "rejected":
        return styles.statusRejected;
      case "pending":
        return styles.statusRejected;
      case 0:
        return styles.statusRejected;
      case 1:
        return styles.statusApproved;
      case "arrived":
        return styles.statusApproved;
      case "not yet":
        return styles.statusPending;
      case "partial":
        return styles.statusPending;
      case "completed":
        return styles.statusApproved;
      default:
        return "";
    }
  };