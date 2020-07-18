import React, { Component } from 'react'
import SvgWrapper from '../../SvgWrapper'
import SvgFile from './SvgFile'

class Loader extends Component {
  render() {
    return <SvgWrapper renderComponent={SvgFile} {...this.props} />
  }
}

export default Loader
