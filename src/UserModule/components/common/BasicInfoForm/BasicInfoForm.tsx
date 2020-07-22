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
import { observer } from 'mobx-react'
interface BasicInfoFormProps extends WithTranslation {
  formTitle: string
  buttonText: string
  isFlexible: boolean
  fromDateTime: object
  toDateTime: object
  onChangeFromPlace: (value: string) => void
  onChangeToPlace: (value: string) => void
  handleIsFlexible: (event) => void
  onSelectFromDateTime: (date: object) => void
  onSelectToDateTime: (date: object) => void
  onClick: () => void
}

@observer
class BasicInfoForm extends Component<BasicInfoFormProps> {
  render() {
    const {
      t,
      formTitle,
      buttonText,
      children,
      isFlexible,
      fromDateTime,
      toDateTime,
      onChangeFromPlace,
      onChangeToPlace,
      handleIsFlexible,
      onSelectFromDateTime,
      onSelectToDateTime,
      onClick
    } = this.props
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
            onChange={onChangeFromPlace}
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
            onChange={onChangeToPlace}
            validateForm={ValidateFullname}
            inputStyles={inputStyles}
          />
        </WithLabel>

        <WithLabel
          labelStyle={InputLable}
          label={isFlexible ? t('letsride:from') : t('letsride:dateAndTime')}
          isRequired={true}
        >
          <DatePicker
            placeHolder={
              isFlexible ? t('letsride:select') : t('letsride:selectDateTime')
            }
            minDate={new Date()}
            handleChange={onSelectFromDateTime}
            selectedDate={fromDateTime}
          />
        </WithLabel>
        {isFlexible && (
          <WithLabel
            labelStyle={InputLable}
            label={t('letsride:to')}
            isRequired={false}
          >
            <DatePicker
              placeHolder={t('letsride:select')}
              minDate={new Date()}
              handleChange={onSelectToDateTime}
              selectedDate={toDateTime}
              showError={false}
            />
          </WithLabel>
        )}
        <CheckBox
          handleCheck={handleIsFlexible}
          labelTypo={InputLable}
          label={t('letsride:flexibleTimings')}
        />
        {children}
        <Button
          disabled={false}
          onClick={onClick}
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
