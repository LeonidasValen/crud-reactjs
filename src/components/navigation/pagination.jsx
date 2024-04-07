

export function Pagination({currentPage, totalPages, onPageChange }){
    return(
        <div className="pagination-container">
            <div className="pagination">
                <p>{currentPage} - {totalPages} of {totalPages}</p>
                <div className="btn-pagination">
                    <button className="btn-prev" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M15 6l-6 6l6 6" />
                        </svg>
                    </button>
                    <button className="btn-next" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 6l6 6l-6 6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}