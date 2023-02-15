import { useState } from 'react'

interface MotivationProps {}
export default function Motivation({}: MotivationProps) {
  const [text, setText] = useState('')

  async function handleClick() {
    try {
      const response = await fetch('/api/motivation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: text }),
      })

      const json = await response.json()
      setText(json.response.trim())
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className='bg-purple-300 rounded-lg p-4 flex flex-col gap-6'>
      <div className='bg-purple-100 rounded-lg p-4'>
        <p>{text}</p>
      </div>
      <button
        className='bg-purple-700 text-white font-bold w-full rounded-lg py-4'
        onClick={handleClick}
      >
        Obtener Frase
      </button>
    </div>
  )
}
