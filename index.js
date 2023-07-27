
function flat(arr, dep = 1) {
  return dep > 0
    ? arr.reduce(
      (total, item) => 
      Array.isArray(item) ? total.concat(flat(item, dep-1)) : total.concat(item),
      []
    )
    : arr
}