import { ChatForm } from '@/components/ChatForm'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className='grid place-content-center h-full w-full'>
        <h1 className='text-3xl font-bold underline'>Hola Mi amor!</h1>
        <div>
          Bienvenida a e esta aplicación web desarrollada con mucho amor para ti
        </div>

        <p>
          Funcionalidad en desarrollo, mientras tanto puedes ir a{' '}
          <Link href='motivation' className='underline text-blue-700 font-bold'>
            aquí
          </Link>{' '}
          y disfrutar de una frase que te ayudará emocinalmente en día
        </p>
      </section>
      <ChatForm />
    </>
  )
}
