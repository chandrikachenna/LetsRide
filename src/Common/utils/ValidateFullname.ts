import { validateFormReturnType } from '../components/Input/Input'

export function ValidateFullname(value: string): validateFormReturnType {
  let shouldShowErrorMessage, errorMessage
  const isEmpty = value ? false : true
  if (isEmpty) {
    shouldShowErrorMessage = true
    errorMessage = 'Required'
  }
  return { shouldShowErrorMessage, errorMessage }
}
