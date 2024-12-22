import { FaSearch } from "react-icons/fa";
import "./applications.css";
import { FaListCheck } from "react-icons/fa6";
import { CiStreamOn } from "react-icons/ci";
import { BiCalendarX, BiCaretDown, BiCaretLeft, BiCaretRight } from "react-icons/bi";
import ApplicationCard from "../../common/applicationCard/applicationCard";
import { useState } from "react";

const Applications = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="applications-wrap">
      <div className="applications">
        <h2 className="applications-title">Applications</h2>
        <div className="applications-tabs">
          <div className="applications-tab active">All</div>
          <div className="applications-tab">Jobs</div>
          <div className="applications-tab">Internships</div>
        </div>
        <div className="applications-tab-content">
          <div className="applications-tab-filter-bar">
            <div className="applications-tab-search">
              <FaSearch className="applications-tab-search-icon" />
              <input
                type="text"
                name="search"
                className="applications-tab-search-input"
                placeholder="Search jobs"
              />
            </div>
            <div className="applications-tab-filter">
              <button className="applications-tab-filter-item active">
                <FaListCheck />
                All
              </button>
              <button className="applications-tab-filter-item">
                <CiStreamOn />
                Live
              </button>
              <button className="applications-tab-filter-item">
                <BiCalendarX />
                Closed
              </button>
            </div>
            <button className="applications-tab-sort-dropdown">
              Sort By
              <BiCaretDown />
            </button>
          </div>
          <div className="applications-list">
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
            <ApplicationCard />
          </div>
          <div className="applications-pagination">
            <div className="applciations-current-pagination">
              {currentPage * 10 - 9}-{currentPage * 10}{" "}
              <span style={{ fontWeight: "500" }}>/ {totalPages * 10}</span>
            </div>
            <div className="applications-current-page">
              <div
                className="applications-page left-button"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <BiCaretLeft />
              </div>
              {[...Array(totalPages)].map((_, index) => (
                <div
                  key={index + 1}
                  className={`applications-page ${currentPage === index + 1 ? "active" : ""}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </div>
              ))}
              <div
                className="applications-page right-button"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <BiCaretRight />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;