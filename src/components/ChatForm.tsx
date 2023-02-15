import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { FormEvent, useRef } from 'react'

interface ChatFormProps {}
export function ChatForm({}: ChatFormProps) {
  const textRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault()
    const value = textRef.current?.value
    // sendPrompt({ prompt: value })
    if (value) {
      textRef.current.value = ''
    }
  }

  const handleChange = () => {
    const el = textRef.current
    if (el) {
      const scrollHeight = el.scrollHeight
      el.style.height = scrollHeight + 'px'
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <form
      onKeyDown={w => handleKeyDown}
      onSubmit={handleSubmit}
      className='absolute bottom-0 w-full flex justify-center items-center py-6 bg-purple-300 px-8'
    >
      <div className='py-3 bg-purple-700 rounded-lg px-3 text-white flex justify-between items-center flex-1 max-w-2xl gap-2'>
        <textarea
          onChange={handleChange}
          ref={textRef}
          className='bg-transparent px-1 w-full outline-none'
          autoFocus
          rows={1}
          tabIndex={0}
          defaultValue=''
        />
        <button type='submit'>
          <PaperAirplaneIcon className='h-5' />
        </button>
      </div>
    </form>
  )
}
