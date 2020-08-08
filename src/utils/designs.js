const getFilteredDesigns = async (objValue , searchValue ) => {
  const promise = await fetch(`http://localhost:9999/api/designs`)
  const designs = await promise.json()

    if (objValue.includes(".")) {
      const splittedValue = objValue.split(".")
      const [firstValue, secondValue] = splittedValue
      return await designs.filter(obj => obj[`${firstValue}`][`${secondValue}`] === searchValue)
  } else {
      return await designs.filter(obj => obj[`${objValue}`] === searchValue)
    }
}


export default getFilteredDesigns

