import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'

interface ContextType {
  text: string
  messages: MessageType[]
  onChangeText: (entry: string) => void
  setMessages: Dispatch<SetStateAction<MessageType[] | []>>
}

const initialContext = {
  messages: [],
  text: '',
  onChangeText: () => {},
  setMessages: () => {},
}

export const ChatContext = createContext<ContextType>(initialContext)

export type MessageType = {
  id: string
  ia: boolean
  message: string
}

export function useChat() {
  return useContext(ChatContext)
}

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<MessageType[] | []>([])
  const [text, setText] = useState('')

  function onChangeText(entry: string) {
    setText(entry)
  }

  return (
    <ChatContext.Provider value={{ text, onChangeText, messages, setMessages }}>
      {children}
    </ChatContext.Provider>
  )
}
