export const number = (value, allowEmpty = true) => {
  if(value === '' && allowEmpty) {
    return true;
  }
  return /^[0-9]+?$/.test(value);
}

export const numberAllowDecimal = (value, allowEmpty = true) => {
  if(value === '' && allowEmpty) {
    return true;
  }
  return /^[0-9]+(\.)?([0-9]+)?$/.test(value);
}