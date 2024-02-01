import Link from "next/link";
import React from "react";

const CustomPagination = ({ pageCount, onPageChange, currentPage }) => {
    const visiblePages = 3;

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= pageCount; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers.map((number) => {
            const isCurrent = number === currentPage + 1;
            const isEllipsis =
                number > 1 &&
                number < pageCount &&
                Math.abs(currentPage + 1 - number) > Math.floor(visiblePages / 2);

            return (
                <React.Fragment key={number}>
                    {isEllipsis && <span className="spandot mt-4">...</span>}
                    {!isEllipsis && (
                        <li
                            className={`page-item page_itemm mt-4 ${
                                isCurrent ? "active" : ""
                            }`}
                            style={{ cursor: "pointer" }}
                        >
                            <Link href="/women/ethnicfusion/kurtaandkurtis"
                                className="page-link page_linkk"
                                onClick={() => onPageChange(number - 1)}
                            >
                                {number}
                            </Link>
                        </li>
                    )}
                </React.Fragment>
            );
        });
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination d-flex justify-content-center">
                {renderPageNumbers()}
            </ul>
        </nav>
    );
};

export default CustomPagination;
