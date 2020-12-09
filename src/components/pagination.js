import React, { useState, useEffect } from "react";

const ArrowLeft = () => (
  <svg
    width="7"
    height="13"
    viewBox="0 0 7 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.66167 2.197L3.96667 5.2C3.65351 5.57143 3.24756 5.86687 3.24756 6.5C3.24756 7.13312 3.65351 7.44055 3.96667 7.8L6.66167 10.803C6.8915 11.0591 7 11.3646 7 11.7C7 12.3396 6.52633 13 5.83333 13C5.52358 13 5.2535 12.8745 5.02833 12.623L0.376833 7.44055C0.16275 7.202 1.10971e-08 6.97385 1.03431e-08 6.5C9.58909e-09 6.02615 0.194833 5.7629 0.386166 5.5497L5.02833 0.377C5.2535 0.12545 5.52358 0 5.83333 0C6.52575 0 7 0.6604 7 1.3C7 1.6354 6.8915 1.9409 6.66167 2.197Z"
      fill="#000"
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="7"
    height="13"
    viewBox="0 0 7 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.338333 10.803L3.03333 7.8C3.34649 7.42857 3.75244 7.13313 3.75244 6.5C3.75244 5.86688 3.34649 5.55945 3.03333 5.2L0.338333 2.197C0.108499 1.9409 -5.34772e-07 1.6354 -5.64627e-07 1.3C-6.2156e-07 0.660401 0.473666 5.7055e-07 1.16667 5.09966e-07C1.47642 4.82887e-07 1.7465 0.125452 1.97167 0.377001L6.62317 5.55945C6.83725 5.798 7 6.02615 7 6.5C7 6.97385 6.80517 7.2371 6.61383 7.4503L1.97167 12.623C1.7465 12.8746 1.47642 13 1.16667 13C0.474251 13 4.18052e-07 12.3396 3.61119e-07 11.7C3.31264e-07 11.3646 0.1085 11.0591 0.338333 10.803Z"
      fill="#000"
    />
  </svg>
);

const CustomPagination = ({
  totalData,
  paginationUpdated,
  skip,
  paginationBreakPoint,
}) => {
  const [currPage, setCurrPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [pagesParts, setPagesParts] = useState(1);
  const [currPagePart, setCurrPagePart] = useState(1);
  const [pageStartingPoint, setPageStartingPoint] = useState(1);

  const PARTS_PAGES_LIMIT = 5;
  const PAGINATION_BREAK_POINT = paginationBreakPoint;

  useEffect(() => {
    if (PAGINATION_BREAK_POINT >= totalData) {
      setPages(1);
      setCurrPage(1);
    } else {
      const pages = Math.ceil(parseInt(totalData) / PAGINATION_BREAK_POINT);
      const pagesParts = Math.ceil(pages / PARTS_PAGES_LIMIT);
      setPages(pages);
      setPagesParts(pagesParts);

      if (currPage > pages) {
        updatePagePart(pagesParts);
        updatePage(pages);
      }
    }
  }, [totalData]);

  const updatePage = (pageNo) => {
    setCurrPage(pageNo);
    paginationUpdated((pageNo - 1) * PAGINATION_BREAK_POINT);
  };

  const updatePagePart = (partNo) => {
    setCurrPagePart(partNo);
    let startPoint = partNo;
    if (startPoint - 1 !== 0) {
      startPoint = startPoint - 1;
      startPoint = startPoint * 5;
      startPoint++;
    }
    setPageStartingPoint(startPoint);
    updatePage(startPoint);
  };

  const switchPage = (pageNo) => {
    if (pageNo < pageStartingPoint) {
      updatePagePart(currPagePart - 1);
    } else if (pageNo >= pageStartingPoint + 5) {
      updatePagePart(currPagePart + 1);
    }
    updatePage(pageNo);
  };

  useEffect(() => {
    if (skip === 0) {
      setCurrPage(1);
      updatePagePart(1);
    } else {
      setCurrPage(skip / PAGINATION_BREAK_POINT + 1);
    }
  }, [skip]);

  const renderPages = () => {
    let pag = [];
    for (
      let i = pageStartingPoint;
      i < pageStartingPoint + 5 && i <= pages;
      i++
    ) {
      pag.push(
        <span
          key={i}
          className={`pagination-item ${i === currPage ? "active" : ""}`}
          onClick={(e) => updatePage(i)}
        >
          {i}
        </span>
      );
    }

    return pag;
  };

  if (pages === 0) {
    return "";
  }
  return (
    <div className="pagination-container">
      <span
        className={`pagination-item ${currPage === 1 ? "disabled" : ""}`}
        onClick={(e) => {
          updatePage(1);
          updatePagePart(1);
        }}
      >
        <ArrowLeft />
        <ArrowLeft />
      </span>
      <span
        className={`pagination-item ${currPage === 1 ? "disabled" : ""}`}
        onClick={(e) => switchPage(currPage - 1)}
      >
        <svg
          width="7"
          height="13"
          viewBox="0 0 7 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66167 2.197L3.96667 5.2C3.65351 5.57143 3.24756 5.86687 3.24756 6.5C3.24756 7.13312 3.65351 7.44055 3.96667 7.8L6.66167 10.803C6.8915 11.0591 7 11.3646 7 11.7C7 12.3396 6.52633 13 5.83333 13C5.52358 13 5.2535 12.8745 5.02833 12.623L0.376833 7.44055C0.16275 7.202 1.10971e-08 6.97385 1.03431e-08 6.5C9.58909e-09 6.02615 0.194833 5.7629 0.386166 5.5497L5.02833 0.377C5.2535 0.12545 5.52358 0 5.83333 0C6.52575 0 7 0.6604 7 1.3C7 1.6354 6.8915 1.9409 6.66167 2.197Z"
            fill="#000"
          />
        </svg>
      </span>
      {renderPages()}
      <span
        className={`pagination-item ${currPage === pages ? "disabled" : ""}`}
        onClick={(e) => switchPage(currPage + 1)}
      >
        <svg
          width="7"
          height="13"
          viewBox="0 0 7 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.338333 10.803L3.03333 7.8C3.34649 7.42857 3.75244 7.13313 3.75244 6.5C3.75244 5.86688 3.34649 5.55945 3.03333 5.2L0.338333 2.197C0.108499 1.9409 -5.34772e-07 1.6354 -5.64627e-07 1.3C-6.2156e-07 0.660401 0.473666 5.7055e-07 1.16667 5.09966e-07C1.47642 4.82887e-07 1.7465 0.125452 1.97167 0.377001L6.62317 5.55945C6.83725 5.798 7 6.02615 7 6.5C7 6.97385 6.80517 7.2371 6.61383 7.4503L1.97167 12.623C1.7465 12.8746 1.47642 13 1.16667 13C0.474251 13 4.18052e-07 12.3396 3.61119e-07 11.7C3.31264e-07 11.3646 0.1085 11.0591 0.338333 10.803Z"
            fill="#000"
          />
        </svg>
      </span>
      <span
        className={`pagination-item ${currPage === pages ? "disabled" : ""}`}
        onClick={(e) => {
          updatePagePart(pagesParts);
          updatePage(pages);
        }}
      >
        <ArrowRight />
        <ArrowRight />
      </span>
    </div>
  );
};

export default CustomPagination;
