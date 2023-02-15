import { createContext } from 'react'

interface ContextType {
  text: string
}

const Context = createContext<ContextType | null>(null)

function ContextProvider({ children }: { children: React.ReactNode }) {
  return <Context.Provider value={{ text: '' }}>{children}</Context.Provider>
}
