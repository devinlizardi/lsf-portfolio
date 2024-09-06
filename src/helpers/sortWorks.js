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

function sortAZ(a, b) {
  const aF = a.title.toLowerCase()[0]
  const bF = b.title.toLowerCase()[0]
  if (aF == bF) return 0
  if (aF > bF) return 1
  return -1
}

function sortZA(a, b) {
  const aF = a.title.toLowerCase()[0]
  const bF = b.title.toLowerCase()[0]
  if (aF == bF) return 0
  if (aF > bF) return -1
  return 1
}

export const SORT_FN_MAP = {
  "old-new": sortLastNew,
  "new-old": sortNewLast,
  "a-z": sortAZ,
  "z-a": sortZA
}