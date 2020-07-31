import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { COLORS } from '../../../../Common/themes/Colors'
import { Typo18DarkBlueGreyRobotoRegular } from '../../../../Common/styleGuide/Typos'
import { Profile } from '../../../../Common/components/Profile'
export const PageHeaderWrapper = styled.div`
  ${tw` flex w-screen justify-between lg:pl-16 lg:pr-16 xl:pl-64 xl:pr-64`}
  position: sticky;
  top: 0;
  height: 72px;
  border: solid 1px ${COLORS.lightBlueGrey};
  background-color: ${COLORS.white};
`
export const LogoHloder = styled.div`
  ${tw`flex items-center cursor-pointer`}
`
export const NavBar = styled.div`
  ${tw`flex items-center justify-between`}
  width:230px;
`
export const Trigger = styled(Typo18DarkBlueGreyRobotoRegular)``

export const UserProfile = styled.div`
  ${tw`flex items-center`}
`

export const ProfileWrapper = styled(Profile)`
  width: 48px;
  height: 48px;
  object-fit: contain;
`
