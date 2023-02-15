import { useTypingEffect } from '@/hook/useTypingEffect'

export function TypingEffect({ text }: { text: string }) {
  const { displayText, showCursor } = useTypingEffect({ text })

  return (
    <span
      className={`${
        showCursor ? 'after:content-["▋"] after:ml-1 after:animate-typing' : ''
      }`}
    >
      {displayText}
    </span>
  )
}
