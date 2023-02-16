import { ChatContext } from '@/context'
import { useContext } from 'react'

export function useChat() {
  return useContext(ChatContext)
}
