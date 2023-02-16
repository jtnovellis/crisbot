import { Avatar } from './Avatar'
import { TypingEffect } from './TypingEffect'
import { UserAvatar } from './UserAvatar'

interface MessageProps {
  ia: boolean
  message: string
}

export function Message({ ia, message }: MessageProps) {
  const avatar = ia ? <p className='text-4xl'>🐘</p> : <UserAvatar />
  const textElement = ia ? <TypingEffect text={message} /> : message

  return (
    <div className={`text-gray-700 ${ia ? 'bg-purple-300' : 'bg-purple-200'}`}>
      <article className='flex gap-4 p-6 m-auto max-w-3xl items-start'>
        <Avatar>{avatar}</Avatar>
        <div className='min-h-[20px] flex flex-1 flex-col items-start gap-4 whitespace-pre-wrap'>
          <div className='prose-invert w-full break-words'>
            <p>{textElement}</p>
          </div>
        </div>
      </article>
    </div>
  )
}
