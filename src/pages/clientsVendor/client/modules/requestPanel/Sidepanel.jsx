import styles from './SidePanel.module.css';

const SidePanel = ({ isOpen, onClose, children }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className={styles.backdrop} onClick={onClose}></div>
      )}
      
      {/* Side Panel */}
      <div className={`${styles.sidePanel} ${isOpen ? styles.open : ''}`}>
        {/* <div className={styles.header}>
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
        </div> */}
        <div className={styles.content}>
          {isOpen && children}
        </div>
      </div>
    </>
  );
};

export default SidePanel;