import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ currentPage: page, setCurrentPage, totalPages }) => {

    console.log(page)

    return (
        <>
            <Pagination>
                {/*{page > 2 && <Pagination.First onClick={() => setCurrentPage(1)} />}*/}
                {page !== 1 && <Pagination.Prev onClick={() => setCurrentPage(page - 1)} />}
                {page > 2 && <Pagination.Item onClick={() => setCurrentPage(1)}>1</Pagination.Item>}
                {page > 3 && <Pagination.Ellipsis />}
                {page !== 1 && <Pagination.Item onClick={() => setCurrentPage(page - 1)}>{page - 1}</Pagination.Item>}
                <Pagination.Item active>{page}</Pagination.Item>
                {page !== totalPages && <Pagination.Item onClick={() => setCurrentPage(page + 1)}>{page + 1}</Pagination.Item>}
                {page < totalPages - 2 && page !== totalPages ? <Pagination.Ellipsis />: ''}
                {page < totalPages - 1 && page !== totalPages ? <Pagination.Item onClick={() => setCurrentPage(totalPages)}>{totalPages}</Pagination.Item> : ''}
                {page !== totalPages && <Pagination.Next onClick={() => setCurrentPage(page + 1)} />}
               
            </Pagination>
        </>
    )
}

export default PaginationComponent
