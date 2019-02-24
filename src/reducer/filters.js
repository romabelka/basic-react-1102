import { CHANGE_FILTER } from '../constants'

export default (
  prevFiltersConfig = { dates: { from: null, to: null }, articleIds: [] },
  action
) => {
  const { type, filterConfig } = action
  return type === CHANGE_FILTER ? filterConfig : prevFiltersConfig
}
