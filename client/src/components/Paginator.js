import React from 'react';
import PropTypes from 'prop-types';
import { 
  Pagination, 
  PaginationItem, 
  PaginationLink 
} from 'reactstrap';

const propTypes = {
  currentPage: PropTypes.number,
  maxPages: PropTypes.number,
  onPageChange: PropTypes.func
}

const previousBtn = (currentPage, onPageChange) => currentPage > 1 && <PaginationLink previous onClick={()=>onPageChange('previous')}/>
const nextBtn = (currentPage, maxPages, onPageChange) => currentPage < maxPages && <PaginationLink next onClick={()=>onPageChange('next')}/>

const Paginator = ({currentPage, maxPages, onPageChange}) => (

  <Pagination aria-label="Page navigation example">
    <PaginationItem>
      {previousBtn(currentPage, onPageChange)}
    </PaginationItem>
    {[...Array(maxPages)].map((x, i) =>(          
      <PaginationItem key={i+1} active={currentPage === i+1}>
        <PaginationLink onClick={()=>onPageChange(i)}>
          {i+1}
        </PaginationLink>
      </PaginationItem>
    )
    )}
    
    <PaginationItem>
      {nextBtn(currentPage, maxPages, onPageChange)}
    </PaginationItem>
  </Pagination>);

Paginator.propTypes = propTypes;

export default Paginator;