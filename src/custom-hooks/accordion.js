import { useState } from 'react'

export default () => {
  const [openItemId, setOpenItemId] = useState(null)
  // fixed close click
  const toggleOpenItem = (id) => () => setOpenItemId(openItemId !== id ? id : null)
  return { openItemId, toggleOpenItem }
}
