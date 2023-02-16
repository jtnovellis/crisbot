import { useChat } from '@/context'
import { Message } from './Message'
import { Welcome } from './Welcome'

export function Chat() {
  const { messages } = useChat()
  return (
    <div className='flex flex-col h-full flex-1 overflow-scroll'>
      <div>
        {messages.length > 0 ? (
          messages.map(entry => <Message key={entry.id} {...entry} />)
        ) : (
          <Welcome />
        )}
      </div>
    </div>
  )
}
