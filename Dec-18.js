function groupByKey(array, key) {
  // if (!array || array.length === 0) { return }
  return array
    .reduce((hash, obj) => {
      if (obj[key] === undefined) return hash;
      return Object.assign(hash, { [obj[key]]: (hash[obj[key]] || []).concat(obj) })
    }, [])
}

function groupByCompany(allProducts) {
  //listar as empresas
  let allCompanies = allProducts.map(item => item.product_name)
  const companies = []
  allCompanies.forEach(item => {
    if (companies.filter(pItem => pItem === item).length === 0) {
      companies.push(item)
    }
  })

  let response = []
  //criando os arrays filtrados
  for (let i = 0; i < companies.length; i++){
    let filtered = allProducts.filter(item => item.product_name === companies[i])
    response.push({
      name: companies[i],
      data: filtered
    })
  }

  return response
}

module.exports = { groupByKey, groupByCompany }
