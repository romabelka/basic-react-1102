import { useState } from 'react'

export default () => {
  const [openItem, setOpenItem] = useState(null)
  const toggleOpenItem = () => () => setOpenItem(!openItem)

  return { openItem, toggleOpenItem }
}
