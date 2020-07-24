export const validateFields = (details: object, isError: boolean) => {
  let count = 0;
  Object.values(details).forEach(value => {
    if (!value) {
      count++;
      isError = true
    }
  })
  if (count > 0)
    return isError
  else return false
}
