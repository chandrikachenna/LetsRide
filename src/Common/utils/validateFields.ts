export const validateFields = (details: object, isError: boolean) => {
  Object.values(details).forEach(value => {
    if (!value) {
      isError = true
    }
  })
  return isError
}
