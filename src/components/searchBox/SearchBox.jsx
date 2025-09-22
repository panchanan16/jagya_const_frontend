// import useSearch from "@/hooks/useSearch";
// import { useState } from "react";

// function SearchBox({ SearchEntity, searchFields }) {
//   const [searchTerm, setSearchTerm] = useState(null);
//   const { itemList } = useSearch(searchTerm, SearchEntity, searchFields);

//   function handleChangeSearchInput(e) {
//     setSearchTerm(e.target.value);
//   }

//   function clearSearchInput() {
//     setSearchTerm("");
//   }

//   return (
//     <div className="search flex align-center">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         className="search-icon"
//       >
//         <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
//       </svg>
//       <input
//         type="text"
//         id="searchQuery"
//         value={searchTerm}
//         placeholder="Search"
//         onChange={handleChangeSearchInput}
//       />
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         id="times"
//         className="close"
//         onClick={clearSearchInput}
//       >
//         <path
//           fill="##000000"
//           d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
//         ></path>
//       </svg>
//     </div>
//   );
// }

// export default SearchBox;

import useSearch from "@/hooks/useSearch";
import { useState, useCallback } from "react";
import styles from "./SearchBox.module.css";

function SearchBox({ SearchEntity, searchFields, placeholder = "Search..." }) {
  // Initialize with empty string instead of null for consistency
  const [searchTerm, setSearchTerm] = useState("");
  
  // Get search results from custom hook
  const { itemList, loading, error } = useSearch(searchTerm, SearchEntity, searchFields);

  // Memoize handlers to prevent unnecessary re-renders
  const handleChangeSearchInput = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const clearSearchInput = useCallback(() => {
    setSearchTerm("");
  }, []);

  // Handle Enter key press for better UX
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log("Seearching kla wait ...")
      // Could trigger additional search logic here if needed
    }
  }, []);

  return (
    <div className={styles.searchContainer}>
      {/* Search Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={styles.searchIcon}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>

      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleChangeSearchInput}
        onKeyUp={handleKeyPress}
        placeholder={placeholder}
        className={styles.searchInput}
        aria-label="Search input"
      />

      {/* Clear Button - Only show when there's text */}
      {searchTerm && (
        <button
          onClick={clearSearchInput}
          className={styles.clearButton}
          aria-label="Clear search"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={styles.clearIcon}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}

      {/* Loading indicator */}
      {loading && (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}
    </div>
  );
}

export default SearchBox;