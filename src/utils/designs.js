const getDesigns = async (length) => {
  const promise = await fetch(`http://localhost:9999/api/designs?length=${length}`)
  const designs = await promise.json()
  return designs
}

export default getDesigns