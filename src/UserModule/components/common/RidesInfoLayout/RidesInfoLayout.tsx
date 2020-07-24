import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { RidesInfoLayoutwrapper } from './styledComponents'

interface RidesInfoLayoutProps {
  data: any
}

@observer
class RidesInfoLayout extends Component<RidesInfoLayoutProps> {
  render() {
    const { data } = this.props
    return <RidesInfoLayoutwrapper>{data.title}</RidesInfoLayoutwrapper>
  }
}

export default RidesInfoLayout
