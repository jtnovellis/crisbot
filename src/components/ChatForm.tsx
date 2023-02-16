import { useChat } from '@/context'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface ChatFormProps {}
export function ChatForm({}: ChatFormProps) {
  const [text, setText] = useState('')
  const { setMessages } = useChat()
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  async function handleSubmit(e?: FormEvent) {
    e?.preventDefault()
    const userMessageId = uuidv4()
    const iaMessageId = uuidv4()

    setMessages(prev => [
      ...prev,
      {
        id: userMessageId,
        ia: false,
        message: text,
      },
      {
        id: iaMessageId,
        ia: true,
        message: '',
      },
    ])

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: text }),
      })
      const json = await response.json()

      setMessages(prev =>
        prev.map(entry => {
          if (entry.id === iaMessageId) {
            return {
              ...entry,
              message: json.response,
            }
          }
          return entry
        })
      )
    } catch (error) {
      console.error(error)
    }

    setText('')
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    const el = textAreaRef.current
    if (el) {
      el.style.height = '0px'
      const scrollHeight = el.scrollHeight
      el.style.height = scrollHeight + 'px'
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='fixed bottom-0 w-full flex justify-center items-center py-6 bg-purple-300 px-8'
    >
      <div className='py-3 bg-purple-700 rounded-lg px-3 text-white flex justify-between items-center flex-1 max-w-2xl gap-2'>
        <textarea
          ref={textAreaRef}
          onChange={handleChange}
          value={text}
          className='bg-transparent px-1 w-full outline-none'
          autoFocus
          rows={1}
          tabIndex={0}
        />
        <button type='submit'>
          <PaperAirplaneIcon className='h-5' />
        </button>
      </div>
    </form>
  )
}
