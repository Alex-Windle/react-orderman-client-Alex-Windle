/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * @class Pagination
 * @description Pagination component to page through lists or tables
 */
export default class Pagination extends Component {
  render() {
    const {
      handlePageChange,
      pagination: {
        total,
        limit,
        page,
        pages,
      },
    } = this.props;

    if (!total || pages === 1) {
      return <span />;
    }

    const pageInt = page && parseInt(page, 10);

    const firstPage = pageInt === 1;
    const finalPage = pageInt === pages;
    const previousPage = pageInt - 1;
    const nextPage = pageInt + 1;

    const startResults = firstPage ? 1 : ((previousPage * limit) + 1);
    const endResults = finalPage ? total : (pageInt * limit);

    const pageArray = Array.from(Array(pages).keys()).map(elem => elem + 1);

    return (
      <div>
        <div className="container-fluid">
          <ul className="pagination">
            <li className={firstPage ? 'disabled' : ''}>
              <a
                role="button"
                onClick={() =>
                  !firstPage && handlePageChange(previousPage)
                }
              >
                &laquo;
              </a>
            </li>
            {(() =>
              pageArray.map(pageNumber => (
                <li
                  key={pageNumber}
                  className={pageNumber === pageInt ? 'active' : ''}
                >
                  <a
                    role="button"
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </a>
                </li>
              ))
            )()}
            <li className={finalPage ? 'disabled' : ''}>
              <a
                role="button"
                disabled={finalPage}
                onClick={() => !finalPage && handlePageChange(nextPage)}
              >
                &raquo;
              </a>
            </li>
          </ul>
        </div>
        <div className="container-fluid">
          Showing Results {startResults} - {endResults}
        </div>
      </div>
    );
  }
}


Pagination.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
  pagination: PropTypes.shape({
    total: PropTypes.any,
    limit: PropTypes.any,
    page: PropTypes.any,
    pages: PropTypes.any,
  }).isRequired,
};


Pagination.defaultProps = {};
