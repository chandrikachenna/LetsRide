import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'

interface PaginateProps {
  pageCount: number
  marginPagesDisplayed: number
  pageRangeDisplayed: number
  onPageChange: () => void
  containerClassName: any
  activeClassName: any
}
class Paginate extends Component<PaginateProps> {
  render() {
    const {
      pageCount,
      marginPagesDisplayed,
      pageRangeDisplayed,
      onPageChange,
      containerClassName,
      activeClassName
    } = this.props
    return (
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={pageCount}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageRangeDisplayed}
        onPageChange={onPageChange}
        containerClassName={containerClassName}
        activeClassName={activeClassName}
      />
    )
  }
}

export default Paginate
