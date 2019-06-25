import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// points for moving left(before) or right(after) to the currentPage
const PAGE_BEFORE = 'BEFORE';
const PAGE_AFTER = 'AFTER';

/**
 * helper function to create a range of numbers.
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
  let i = from;
  const range = [];
  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
}

class Pagination extends Component {
  constructor(props) {
    super(props);
    const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;

    this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 30;
    this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;
    // pageNeighbours can be 0, 1 or 2 or so on.
    this.pageNeighbours = typeof pageNeighbours === 'number'
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 0;
    // compute total number of pages.
    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);
    // initialize state.
    this.state = { currentPage: 1 };
  }

  componentDidMount() {
    this.gotoPage(1);
  }

  gotoPage = page => {
    const { onPageChanged = f => f } = this.props;

    const currentPage = Math.max(0, Math.min(page, this.totalPages));

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  }

  handleClick = page => evt => {
    evt.preventDefault();
    this.gotoPage(page);
  }

  handleMoveLeft = evt => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage - (this.pageNeighbours * 2) - 1);
  }

  handleMoveRight = evt => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage + (this.pageNeighbours * 2) + 1);
  }

  /**
   * Given 10 pages and pageNeighbours is set to 2
   * and the currentPage is 5
   * the pagination control will look like this
   *
   * (1)<<{3 4}[5]{6 7 8}>>(10)
   *
   * (x) => terminal pages: first and last, always visible
   * [x] => currentPage
   * {..x} => pageNeighbours
   */
  fetchPageNumbers = () => {
    const totalPages = this.totalPages;
    const currentPage = this.state.currentPage;
    const pageNeighbours = this.pageNeighbours;
    /**
     * Total page numbers to show on the control
     */
    const totalNumbers = (this.pageNeighbours * 2) + 3;
    /**
     * totalNumbers + 2 to cover for the (next) and (prev) controls
     */
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (totalPages - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle leftSpill
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [PAGE_BEFORE, ...extraPages, ...pages];
          break;
        }
        // handle rightSpill
        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, PAGE_AFTER];
          break;
        }
        // handle currentPage spill
        case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [PAGE_BEFORE, ...pages, PAGE_AFTER];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
  }

  render() {

    if (!this.totalRecords || this.totalPages === 1) return null;

    const { currentPage } = this.state;
    const pages = this.fetchPageNumbers();

    return (
      <Fragment>
        <div aria-label="articles-pagination">
          <ul className="pagination">
            { pages.map((page, index) => {
              if (page === PAGE_BEFORE) return (
                <li key={index} className="page-item">
                  <a className="page-link" href="#" aria-label="Previous" onClick={this.handleMoveLeft}>
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
              );
              if (page === PAGE_AFTER) return (
                <li key={index} className="page-item">
                  <a className="page-link" href="#" aria-label="Next" onClick={this.handleMoveRight}>
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              );
              return (
                <li key={index} className={`page-item${ currentPage === page ? ' active' : ''}`}>
                  <a className="page-link" href="#" onClick={ this.handleClick(page) }>{ page }</a>
                </li>
              );
            }) }
          </ul>
        </div>
      </Fragment>
    );
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default Pagination;
