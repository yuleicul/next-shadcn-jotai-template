'use client'

import { Provider } from 'jotai'

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Provider>{children}</Provider>
}

export default Providers
