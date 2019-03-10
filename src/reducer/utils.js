import { OrderedMap } from 'immutable'

export function arrToMap(arr, ItemModel) {
  return arr.reduce(
    (acc, item) => acc.set(item.id, ItemModel ? new ItemModel(item) : item),
    new OrderedMap({})
  )
}

export function paginationArrToMap(arr, ItemModel, page) {
  return arr.reduce(
    (acc, item) =>
      acc.set(item.id, ItemModel ? new ItemModel({ ...item, page }) : { ...item, page }),
    new OrderedMap({})
  )
}
