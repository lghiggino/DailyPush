function groupByKey(array, key) {
  // if (!array || array.length === 0) { return }
  return array
    .reduce((hash, obj) => {
      if (obj[key] === undefined) return hash;
      return Object.assign(hash, { [obj[key]]: (hash[obj[key]] || []).concat(obj) })
    }, [])
}

module.exports = { groupByKey }
