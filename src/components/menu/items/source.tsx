import { LuGithub } from 'react-icons/lu'

import { Item } from '../item'

export function Source() {
  return (
    <Item
      href='https://github.com/remvze/moodist'
      icon={<LuGithub />}
      label='Source Code'
    />
  )
}
