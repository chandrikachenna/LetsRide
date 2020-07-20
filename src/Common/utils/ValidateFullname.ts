import { validateFormReturnType } from "../components/Input/Input";


export function ValidateFullname(value: string): validateFormReturnType {
    let shouldShowErrorMessage, errorMessage
    const isEmpty = value ? false : true
    if (isEmpty) {
        shouldShowErrorMessage = true;
        errorMessage = "*Required"
    }
    else if (value.length < 8) {
        shouldShowErrorMessage = true;
        errorMessage = "Fullname should be greater than 8 charecters."
    }
    return { shouldShowErrorMessage, errorMessage }
}
