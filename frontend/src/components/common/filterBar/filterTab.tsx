import { FaFilter, FaTimes } from "react-icons/fa";
import "./filterTab.css";
import { useState } from "react";
const FilterTab = () => {
  const [sortToggle, setSortToggle] = useState(false);

  return (
    <div className="filtertab">
      <button
        onClick={() => setSortToggle(!sortToggle)}
        style={{ borderColor: sortToggle ? "blue" : "#999"}}
      >
        Salary (High to Low)
        {sortToggle && <FaTimes />}
      </button>
      <div className="vertical-divider" />
      <button className="filter-dropdown-button">
        <FaFilter />
        Filters
        <span className="filter-count">5</span>
      </button>
      <button className="filter-location">
        Location
        <span className="filter-count">1</span>
      </button>
      <button className="filter-worktype">
        Work Type
        <span className="filter-count">1</span>
      </button>
      <button className="filter-usertype">
        User Type
        <span className="filter-count">1</span>
      </button>
      <button className="filter-domain">
        Domain
        <span className="filter-count">1</span>
      </button>
      <button className="filter-category">
        Category
        <span className="filter-count">1</span>
      </button>
    </div>
  );
};

export default FilterTab;
