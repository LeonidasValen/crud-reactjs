import React from 'react';

const PaginationButtons = ({ currentPage, totalPages, onPageChange }) => (
  <div>
    <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
      Previous
    </button>
    <span>{currentPage} / {totalPages}</span>
    <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
      Next
    </button>
  </div>
);

export default PaginationButtons;
