import React, { useState } from "react";
import "./style.css";

function Pagination({ triggerParentUpdate, count }) {
  const [currentPage, setCurrentPage] = useState(1);

  const updatePage = (newPage) => {
    setCurrentPage(newPage);
    triggerParentUpdate(newPage);
  }

  const RenderPage = (index) => {
    return (
      <span key={index} className={currentPage == index ? 'Pagination__link Pagination__link_active' : 'Pagination__link'} onClick={() => updatePage(index)}>{index}</span>
    )
  }

  const RenderPages = () => {
    var rows = [];
    for (var i = 0; i < count / 10; i++) {
      rows.push(RenderPage(i+1));
    }
    return rows;
  }

  return (
    <div className="Pagination">
      <RenderPages />
    </div>
  );
}

export default Pagination;
