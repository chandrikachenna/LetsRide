import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { RidesInfoLayoutwrapper } from './styledComponents'
import LoadingWrapperWithFailure from '../../../../Common/components/LoadingWrapperWithFailure'
import { Dashboard } from '../Dashboard'
import { observable } from 'mobx'
import { WithTranslation, withTranslation } from 'react-i18next'
import { RouteComponentProps, withRouter } from 'react-router-dom'
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

interface RidesInfoLayoutProps extends WithTranslation, RouteComponentProps {
  data: any
}
@observer
class RidesInfoLayout extends Component<RidesInfoLayoutProps> {
  @observable currentPage!: number
  @observable pageCount!: number
  @observable TotalTasks!: number
  constructor(props) {
    super(props)
    this.init()
  }
  init = () => {
    this.currentPage = 1
    this.pageCount = 1
    this.TotalTasks = 0
  }
  componentDidMount() {
    this.getData()
  }
  getData = () => {
    const { getEntitiesList } = this.props.data.matchingResults
    getEntitiesList()
  }
  onClickFormTitle = () => {
    const { history } = this.props
    const { formLink } = this.props.data
    formLink(history)
  }
  onPageChange = pages => {
    this.currentPage = pages.selected + 1
    const { pagination } = this.props.data.matchingResults
    pagination(this.currentPage)
  }
  renderSuccessUI = observer(() => {
    const { data } = this.props
    const { totalPages, totalCount, entitiesList } = data.matchingResults
    const { dashboardHeadings } = data
    this.pageCount = totalPages
    this.TotalTasks = totalCount
    return <Dashboard headings={dashboardHeadings} tableData={entitiesList} />
  })
  render() {
    const { t, data } = this.props
    const {
      getEntitiesListAPIStatus,
      getEntitiesListAPIError,
      entitiesList
    } = data.matchingResults
    return (
      <RidesInfoLayoutwrapper>
        <Header>
          <TotalTasks>
            {this.TotalTasks}
            {t('letsride:tasks')}
          </TotalTasks>
          <FilterBar></FilterBar>
        </Header>
        <LoadingWrapperWithFailure
          apiStatus={getEntitiesListAPIStatus}
          apiError={getEntitiesListAPIError}
          onRetryClick={() => {}}
          renderSuccessUI={this.renderSuccessUI}
        />
        <Footer>
          <FormLink onClick={this.onClickFormTitle}>
            <PlusIcon />
            <FormLabel>{data.formTitle}</FormLabel>
          </FormLink>
          <Pages>
            {t('letsride:page')}
            {this.currentPage}
            {t('letsride:of')}
            {this.pageCount}
          </Pages>
          <Paginate
            pageCount={this.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            onPageChange={this.onPageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </Footer>
      </RidesInfoLayoutwrapper>
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(RidesInfoLayout)
)
