'use client'

import { countAtom } from '@/lib/atoms'
import { useAtom } from 'jotai'
import { Button } from './ui/button'

const Counter: React.FC = () => {
  const [count, setCount] = useAtom(countAtom)

  return (
    <>
      <div>{count}</div>
      <Button onClick={() => setCount((count) => count + 1)}>+</Button>
    </>
  )
}

export default Counter
