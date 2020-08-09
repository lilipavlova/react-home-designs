import getCookie from "./cookie"

export const getFilteredDesigns = async (objValue, searchValue) => {
  const promise = await fetch(`http://localhost:9999/api/designs`)
  const designs = await promise.json()

  if (objValue.includes(".")) {
    const splittedValue = objValue.split(".")
    const [firstValue, secondValue] = splittedValue
     return await designs.filter(obj => obj[`${firstValue}`][`${secondValue}`] === searchValue)
  } else if (objValue === "likes") {
     return await designs.filter(obj => obj[`${objValue}`].includes(searchValue))
  } else {
      return await designs.filter(obj => obj[`${objValue}`] === searchValue)
    }
}


export const handleDelete = async (id) => {
  await fetch(`http://localhost:9999/api/designs/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getCookie('x-auth-token')
    }
  });
}
  

export const submitLike = async (id ) => {
  await fetch(`http://localhost:9999/api/designs/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getCookie('x-auth-token')
  }
});
}


    