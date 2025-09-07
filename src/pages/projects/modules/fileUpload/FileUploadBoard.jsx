import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./fileUploadBoard.module.css";
import { uploadFiles } from "@/redux/features/fileSlice/slice";
import coreEndpoint from "@/api/coreApi";

const FileUploadPopup = ({ isOpen, onClose, projectID }) => {
  const dispatch = useDispatch();

  // State to track uploaded files
  const [uploadedFiles, setUploadedFiles] = useState({
    reference: null,
    agreement: null,
    bills: null,
    others: null,
  });

  // File input refs
  const referenceRef = useRef(null);
  const agreementRef = useRef(null);
  const billsRef = useRef(null);
  const othersRef = useRef(null);

  const handleFileUpload = (file, category) => {
    if (file && uploadFiles) {
    
      const fieldName = category === "reference" ? "image" : "file";
      const formData = new FormData();
      formData.append(fieldName, file);
      formData.append("pro_doc_type", category);

      dispatch(
        uploadFiles({
          endpoint: coreEndpoint.uploadFile("project", projectID, fieldName),
          body: formData,
        })
      ).then((done) => {
        if (done.payload) {
          dispatch(updateDocuments(done.payload));
        }
      });
    }
  };

  const handleFileChange = (event, category) => {
    const file = event.target.files[0];
    if (file) {
      // Update uploaded files state
      setUploadedFiles((prevFiles) => ({
        ...prevFiles,
        [category]: file.name,
      }));

      handleFileUpload(file, category);
    }
  };

  function closePopup(params) {
    onClose(false);
    setUploadedFiles({
      reference: null,
      agreement: null,
      bills: null,
      others: null,
    });
  }

  const triggerFileInput = (ref) => {
    ref.current?.click();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <h2 className={styles.title}>Upload Documents</h2>
          <button
            className={styles.closeButton}
            onClick={closePopup}
            aria-label="Close popup"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.uploadGrid}>
            {/* Reference Image Upload */}
            <div className={styles.uploadContainer}>
              {uploadedFiles.reference && (
                <div className={styles.fileDisplay}>
                  <div className={styles.fileName}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                    <span>{uploadedFiles.reference}</span>
                  </div>
                </div>
              )}
              <div className={styles.uploadCard}>
                <div className={styles.uploadIcon}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
                <h3 className={styles.uploadTitle}>Reference Image</h3>
                <button
                  className={styles.uploadButton}
                  onClick={() => triggerFileInput(referenceRef)}
                >
                  Choose File
                </button>
                <input
                  ref={referenceRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "reference")}
                  className={styles.fileInput}
                />
              </div>
            </div>

            {/* Agreement Upload */}
            <div className={styles.uploadContainer}>
              {uploadedFiles.agreement && (
                <div className={styles.fileDisplay}>
                  <div className={styles.fileName}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10,9 9,9 8,9" />
                    </svg>
                    <span>{uploadedFiles.agreement}</span>
                  </div>
                </div>
              )}
              <div className={styles.uploadCard}>
                <div className={styles.uploadIcon}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10,9 9,9 8,9" />
                  </svg>
                </div>
                <h3 className={styles.uploadTitle}>Agreement</h3>
                <button
                  className={styles.uploadButton}
                  onClick={() => triggerFileInput(agreementRef)}
                >
                  Choose File
                </button>
                <input
                  ref={agreementRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, "agreement")}
                  className={styles.fileInput}
                />
              </div>
            </div>

            {/* Bills Upload */}
            <div className={styles.uploadContainer}>
              {uploadedFiles.bills && (
                <div className={styles.fileDisplay}>
                  <div className={styles.fileName}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                      <line x1="12" y1="18" x2="12" y2="12" />
                      <line x1="9" y1="15" x2="15" y2="15" />
                    </svg>
                    <span>{uploadedFiles.bills}</span>
                  </div>
                </div>
              )}
              <div className={styles.uploadCard}>
                <div className={styles.uploadIcon}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                </div>
                <h3 className={styles.uploadTitle}>Bills</h3>
                <button
                  className={styles.uploadButton}
                  onClick={() => triggerFileInput(billsRef)}
                >
                  Choose File
                </button>
                <input
                  ref={billsRef}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, "bills")}
                  className={styles.fileInput}
                />
              </div>
            </div>

            {/* Others Upload */}
            <div className={styles.uploadContainer}>
              {uploadedFiles.others && (
                <div className={styles.fileDisplay}>
                  <div className={styles.fileName}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <polyline points="13,2 13,9 20,9" />
                    </svg>
                    <span>{uploadedFiles.others}</span>
                  </div>
                </div>
              )}
              <div className={styles.uploadCard}>
                <div className={styles.uploadIcon}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <polyline points="13,2 13,9 20,9" />
                  </svg>
                </div>
                <h3 className={styles.uploadTitle}>Others</h3>
                <button
                  className={styles.uploadButton}
                  onClick={() => triggerFileInput(othersRef)}
                >
                  Choose
                </button>
                <input
                  ref={othersRef}
                  type="file"
                  onChange={(e) => handleFileChange(e, "others")}
                  className={styles.fileInput}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.doneButton} onClick={closePopup}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUploadPopup;
