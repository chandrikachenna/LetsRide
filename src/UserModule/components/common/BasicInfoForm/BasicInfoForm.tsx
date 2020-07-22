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
import { DatePicker } from '../../../../Common/components/DatePicker'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
interface BasicInfoFormProps extends WithTranslation {
  formTitle: string
  buttonText: string
}

@observer
class BasicInfoForm extends Component<BasicInfoFormProps> {
  @observable fromPlace
  @observable toPlace
  @observable isFlexible
  @observable fromDateTime
  @observable toDateTime

  onChangeFromPlace = value => {
    this.fromPlace = value
  }
  onChangeToPlace = value => {
    this.toPlace = value
  }
  handleIsFlexible = event => {
    this.isFlexible = event.target.checked
  }
  onSelectFromDateTime = date => {
    this.fromDateTime = date
  }
  onSelectToDateTime = date => {
    this.toDateTime = date
  }

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
            placeHolder={t('letsride:placePlaceHolder')}
            onChange={this.onChangeFromPlace}
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
            placeHolder={t('letsride:placePlaceHolder')}
            onChange={this.onChangeToPlace}
            validateForm={ValidateFullname}
            inputStyles={inputStyles}
          />
        </WithLabel>

        <WithLabel
          labelStyle={InputLable}
          label={
            this.isFlexible ? t('letsride:from') : t('letsride:dateAndTime')
          }
          isRequired={true}
        >
          <DatePicker
            placeHolder={
              this.isFlexible
                ? t('letsride:select')
                : t('letsride:selectDateTime')
            }
            minDate={new Date()}
            handleChange={this.onSelectFromDateTime}
            selectedDate={this.fromDateTime}
          />
        </WithLabel>
        {this.isFlexible && (
          <WithLabel
            labelStyle={InputLable}
            label={t('letsride:to')}
            isRequired={false}
          >
            <DatePicker
              placeHolder={t('letsride:select')}
              minDate={new Date()}
              handleChange={this.onSelectToDateTime}
              selectedDate={this.toDateTime}
              showError={false}
            />
          </WithLabel>
        )}
        <CheckBox
          handleCheck={this.handleIsFlexible}
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
