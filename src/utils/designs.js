const getDesigns = async () => {
  const promise = await fetch(`http://localhost:9999/api/designs`)
  const designs = await promise.json()
  return designs
}


export default getDesigns

