import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import fetchData from '../api/get_in_range';

const PokePagination = (props) => {

  const getPokes = async (value) => {
    try {
      console.log(value);
      const jsonData = await fetchData(value);
      console.log(jsonData);
      props.setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    getPokes(pageNumber);
  };

  const renderPaginationItems = () => {
    const totalPages = props.totalPages; // Total de páginas en tu conjunto de datos
    const maxVisiblePages = 10; // Número máximo de páginas visibles

    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    const paginationItems = [];

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    return paginationItems;
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%"
    }}
    >
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
        />
        {renderPaginationItems()}
        <Pagination.Next
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, props.totalPages))
          }
        />
        <Pagination.Last onClick={() => handlePageChange(props.totalPages)} />
      </Pagination>
    </div>
  );
};

export default PokePagination;