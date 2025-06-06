import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function TableFooter({TotalPages}) {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [curr, setCurr] = useState(searchParams.get("page") || 1);
  const updateFilters = (category) => {
    searchParams.set("page", category);
    searchParams.set("pageSize", 5);
    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };

  const totalPages = TotalPages || Math.ceil(200 / 10);
  const pagesToShow = 5;
  const currentPage = curr;

  const getVisiblePages = useMemo(() => {
    if (totalPages <= pagesToShow * 2 + 1) {
      // If total pages is small --- show all pages
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = new Set();

    // Always show page 1
    pages.add(1);

    // Show pages around current page
    const start = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const end = Math.min(totalPages, start + pagesToShow - 1);

    // Adjust start if we're near the end
    const adjustedStart = Math.max(
      1,
      Math.min(start, totalPages - pagesToShow + 1)
    );

    for (
      let i = adjustedStart;
      i <= Math.min(adjustedStart + pagesToShow - 1, totalPages);
      i++
    ) {
      pages.add(i);
    }

    // Always show last page if not already included
    if (totalPages > 1) {
      pages.add(totalPages);
    }

    return Array.from(pages).sort((a, b) => a - b);
  }, [currentPage, totalPages, pagesToShow]);

  // Page changes handling --------

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurr(page);
      updateFilters(page);
    }
  };

  const handlePrevious = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNext = () => {
    handlePageChange(currentPage + 1);
  };

  // Helper function to check if we need ellipsis
  const needsEllipsis = (currentIndex, pages) => {
    if (currentIndex === pages.length - 1) return false;
    return pages[currentIndex + 1] - pages[currentIndex] > 1;
  };

  if (totalPages <= 1) return null;

  return (
    <tfoot>
      <tr>
        <td colspan="2">
          Page {curr} of {totalPages}
        </td>
        <td colspan="5"></td>
        <td colspan="3">
          <div class="flex align-center pagination">
            <span
              class="icon"
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="left-arrow-to-left"
              >
                <path
                  fill=""
                  d="M21,11H9.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H21a1,1,0,0,0,0-2ZM3,3A1,1,0,0,0,2,4V20a1,1,0,0,0,2,0V4A1,1,0,0,0,3,3Z"
                ></path>
              </svg>
            </span>
            {getVisiblePages.map((page, ind) => (
              <>
                <span
                  class={`icon ${page == curr ? "pagination-bg" : ""}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </span>
                {needsEllipsis(ind, getVisiblePages) && (
                  <span class="">....</span>
                )}
              </>
            ))}

            <span
              class="icon"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="arrow-to-right"
              >
                <path
                  fill=""
                  d="M17.71,11.29l-4-4a1,1,0,1,0-1.42,1.42L14.59,11H3a1,1,0,0,0,0,2H14.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76A1,1,0,0,0,17.71,11.29ZM21,4a1,1,0,0,0-1,1V19a1,1,0,0,0,2,0V5A1,1,0,0,0,21,4Z"
                ></path>
              </svg>
            </span>
          </div>
        </td>
      </tr>
    </tfoot>
  );
}

export default TableFooter;
