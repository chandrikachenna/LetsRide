import React, { Component, Children } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

import { Card } from '../../../../Common/components/Card'
import { Button } from '../../../../Common/components/Button'

import { WithLabel } from '../../../../Common/components/WithLabel'
import { Input } from '../../../../Common/components/Input'
import { ValidateFullname } from '../../../../Common/utils/ValidateFullname'
import { CheckBox } from '../../../../Common/components/CheckBox'

import {
  cardStyles,
  ButtonStyles,
  TextTypo,
  inputStyles,
  InputLable,
  FormTitle
} from './styledComponents'
interface BasicInfoFormProps extends WithTranslation {
  formTitle: string
  buttonText: string
}

class BasicInfoForm extends Component<BasicInfoFormProps> {
  onchangeName = () => {}
  handleCheck = event => {}
  render() {
    const { t, formTitle, buttonText, children } = this.props
    return (
      <Card cardStyles={cardStyles}>
        <FormTitle>{formTitle}</FormTitle>
        <WithLabel
          labelStyle={InputLable}
          label={t('letsride:from')}
          isRequired={true}
        >
          <Input
            onChange={this.onchangeName}
            validateForm={ValidateFullname}
            inputStyles={inputStyles}
          />
        </WithLabel>
        <WithLabel
          labelStyle={InputLable}
          label={t('letsride:to')}
          isRequired={true}
        >
          <Input
            onChange={this.onchangeName}
            validateForm={ValidateFullname}
            inputStyles={inputStyles}
          />
        </WithLabel>
        <CheckBox
          value={'flexibile'}
          handleCheck={this.handleCheck}
          labelTypo={InputLable}
          label={t('letsride:flexibleTimings')}
        />
        {children}
        <Button
          disabled={true}
          onClick={() => {}}
          text={buttonText}
          textTypo={TextTypo}
          buttonStyles={ButtonStyles}
          loadingStatus={false}
        />
      </Card>
    )
  }
}

export default withTranslation('translation', { withRef: true })(BasicInfoForm)
