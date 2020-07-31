import React, { Component } from 'react'
import { TableUI } from '../../../../Common/components/Table'
import { Paginate } from '../../../../Common/components/Paginate'
import '../../../../Common/styles/index.css'
import {
  Header,
  TotalTasks,
  Footer,
  FormLink,
  FormLabel,
  Pages,
  FilterBar
} from './styledComponents'
import { PlusIcon } from '../../../../Common/components/Icons/PlusIcon'
import { WithTranslation, withTranslation } from 'react-i18next'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface DashboardProps extends WithTranslation, RouteComponentProps {
  data: any
}
@observer
class Dashboard extends Component<DashboardProps> {
  @observable currentPage = 1

  onClickFormTitle = () => {
    const { history } = this.props
    const { formLink } = this.props.data
    formLink(history)
  }
  onPageChange = pages => {
    this.currentPage = pages.selected + 1
  }
  render() {
    const { t, data } = this.props
    console.log(data)

    return (
      <>
        <Header>
          <TotalTasks>
            {29}
            {t('letsride:tasks')}
          </TotalTasks>
          <FilterBar></FilterBar>
        </Header>
        <TableUI />
        <Footer>
          <FormLink onClick={this.onClickFormTitle}>
            <PlusIcon />
            <FormLabel>{data.formTitle}</FormLabel>
          </FormLink>
          <Pages>
            {t('letsride:page')}
            {this.currentPage}
            {t('letsride:of')}
            {30}
          </Pages>
          <Paginate
            pageCount={30}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            onPageChange={this.onPageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </Footer>
      </>
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(Dashboard)
)
