import Link from 'next/link'

export default function Home() {
  return (
    <section className='flex flex-col justify-center h-full w-full mt-20'>
      <h1 className='text-6xl font-bold text-purple-500 text-center'>
        Hola, Feliz Día de San Valentín ❤️{' '}
      </h1>
      <div className='text-center text-xl'>
        Bienvenida a e esta aplicación web desarrollada con mucho amor para tí,
      </div>
      <p className='text-bold text-gray-900 text-4xl text-center mt-20'>
        Página en desarrollo...
      </p>
      <Link
        href='motivation'
        className='underline text-blue-700 font-bold text-center pt-4'
      >
        Mientras tanto disfruta de una frase que te ayudará emocinalmente en día
      </Link>
    </section>
  )
}
