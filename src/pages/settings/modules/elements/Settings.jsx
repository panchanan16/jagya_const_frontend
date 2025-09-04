import React from "react";
import styles from "./Settings.module.css";
import { Link } from "react-router-dom";

const Settings = ({ onSectionClick, loading = false }) => {
  const settingSections = [
    {
      id: "phases",
      title: "Work Phases",
      description:
        "Manage project phases and work types for better organization",
      stats: "12 Active",
      icon: (
        <svg viewBox="0 0 24 24" className={styles.cardIcon}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      className: styles.phasesCard,
      link: "phase",
    },
    {
      id: "app-info",
      title: "App Information",
      description:
        "Application details, version info, and system configuration",
      stats: "Version 2.1.0",
      icon: (
        <svg viewBox="0 0 24 24" className={styles.cardIcon}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      className: styles.appInfoCard,
      link: "/settings/phase",
    },
    {
      id: "invoice",
      title: "Invoice Settings",
      description: "Configure invoice templates, numbering, and payment terms",
      stats: "3 Templates",
      icon: (
        <svg viewBox="0 0 24 24" className={styles.cardIcon}>
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
        </svg>
      ),
      className: styles.invoiceCard,
      link: "/settings/phase",
    },
    {
      id: "payment",
      title: "Payment Settings",
      description:
        "Manage payment gateways, currencies, and transaction settings",
      stats: "5 Methods",
      icon: (
        <svg viewBox="0 0 24 24" className={styles.cardIcon}>
          <path d="M20,8H4V6C4,4.89 4.89,4 6,4H18A2,2 0 0,1 20,6V8M4,10H20V18A2,2 0 0,1 18,20H6C4.89,20 4,19.1 4,18V10M12,17A3,3 0 0,1 9,14A3,3 0 0,1 12,11A3,3 0 0,1 15,14A3,3 0 0,1 12,17M12,15A1,1 0 0,0 13,14A1,1 0 0,0 12,13A1,1 0 0,0 11,14A1,1 0 0,0 12,15Z" />
        </svg>
      ),
      className: styles.paymentCard,
      link: "payments-type",
    },
  ];

  return (
    <div
      className={`${styles.settingsContainer} ${loading ? styles.loading : ""}`}
    >
      {/* Header Section */}
      {/* <div className={styles.settingsHeader}>
        <div className={styles.settingsIcon}>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
          </svg>
        </div>
        <h1 className={styles.settingsTitle}>Settings</h1>
        <p className={styles.settingsSubtitle}>Configure your application preferences and system settings</p>
      </div> */}

      {/* Settings Grid */}
      <div className={styles.settingsGrid}>
        {settingSections.map((section, index) => (
          <Link
            to={section.link}
            key={section.id}
            className={`${styles.settingsCard} ${section.className}`}
            tabIndex={0}
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIconContainer}>{section.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{section.title}</h3>
                <p className={styles.cardDescription}>{section.description}</p>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.cardStats}></div>
              <svg viewBox="0 0 24 24" className={styles.cardArrow}>
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Settings;
