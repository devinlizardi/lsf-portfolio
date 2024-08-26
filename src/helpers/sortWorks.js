function sortNewLast(a, b) {
  const aDate = new Date(a.date)
  const bDate = new Date(b.date)
  return bDate - aDate
}

function sortLastNew(a, b) {
  const aDate = new Date(a.date)
  const bDate = new Date(b.date)
  return aDate - bDate
}

export { sortNewLast, sortLastNew }