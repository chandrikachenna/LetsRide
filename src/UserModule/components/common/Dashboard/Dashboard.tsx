import React, { Component } from 'react'
import { TableUI } from '../../../../Common/components/Table'
import { Paginate } from '../../../../Common/components/Paginate'
import '../../../../Common/styles/index.css'
import { Footer } from './styledComponents'
class Dashboard extends Component {
  render() {
    return (
      <>
        <TableUI />
        <Footer>
          <p>1</p>
          <Paginate
            pageCount={30}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            onPageChange={() => {}}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </Footer>
      </>
    )
  }
}

export default Dashboard
