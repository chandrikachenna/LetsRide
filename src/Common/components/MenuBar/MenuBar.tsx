import React, { Component } from 'react'
import {
  Layout,
  Text,
  ButtonStyles,
  ActiveButtonStyles
} from './styledComponents'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import { Button } from '../Button'

export const menus = { menu1: 'Menu1', menu2: 'Menu2', menu3: 'Menu3' }

interface MenuBarProps {
  menu: string
  menu1Name: string
  menu2Name: string
  menu3Name: string
  onClickMenu: (value: string) => void
}

@observer
class MenuBar extends Component<MenuBarProps> {
  @observable selectedMenu
  constructor(props) {
    super(props)
    this.selectedMenu = menus.menu1
  }
  onclickMenu1 = () => {
    this.selectedMenu = menus.menu1
    this.props.onClickMenu(this.selectedMenu)
  }
  onclickMenu2 = () => {
    this.selectedMenu = menus.menu2
    this.props.onClickMenu(this.selectedMenu)
  }
  onclickMenu3 = () => {
    this.selectedMenu = menus.menu3
    this.props.onClickMenu(this.selectedMenu)
  }
  render() {
    const { menu1, menu2, menu3 } = menus
    const { menu1Name, menu2Name, menu3Name } = this.props
    return (
      <Layout>
        {this.selectedMenu && (
          <>
            <Button
              disabled={false}
              onClick={this.onclickMenu1}
              text={menu1Name}
              textTypo={Text}
              buttonStyles={
                this.selectedMenu.match(menu1)
                  ? ActiveButtonStyles
                  : ButtonStyles
              }
            />
            <Button
              disabled={false}
              onClick={this.onclickMenu2}
              text={menu2Name}
              textTypo={Text}
              buttonStyles={
                this.selectedMenu.match(menu2)
                  ? ActiveButtonStyles
                  : ButtonStyles
              }
            />
            <Button
              disabled={false}
              onClick={this.onclickMenu3}
              text={menu3Name}
              textTypo={Text}
              buttonStyles={
                this.selectedMenu.match(menu3)
                  ? ActiveButtonStyles
                  : ButtonStyles
              }
            />
          </>
        )}
      </Layout>
    )
  }
}

export { MenuBar }
