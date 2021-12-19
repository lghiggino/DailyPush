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
  console.log(companies)
  //filtrando os objetos
  const firstFilter = allProducts.filter(item => item.product_name === companies[0])
  console.log(firstFilter)

  const secondFilter = allProducts.filter(item => item.product_name === companies[1])
  console.log(secondFilter)

  const thirdFilter = allProducts.filter(item => item.product_name === companies[2])
  console.log(thirdFilter)

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
