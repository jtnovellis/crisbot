import Head from 'next/head'
import Link from 'next/link'

interface RootLayoutProps {
  children: React.ReactNode
}
export function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>CrisBot</title>
        <meta
          name='description'
          content='Esta es una aplicación que funciona con inteligencia artificial para brindar soporte a preguntas que se le ocurran a cuarlquier humano'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='fixed flex justify-between items-center w-full px-2 py-4 bg-violet-600'>
        <h1 className='text-white text-2xl font-extrabold'>CrisBot</h1>
        <nav className='flex gap-x-4'>
          <Link
            href='/motivation'
            className='bg-white hover:bg-violet-300 px-4 rounded-lg py-2'
          >
            Frases
          </Link>
          <Link
            href='/'
            className='bg-white hover:bg-violet-300 px-4 rounded-lg py-2'
          >
            Bot
          </Link>
        </nav>
      </header>
      <main className='container mx-auto mx-w-4xl pt-20 h-full w-full'>
        {children}
      </main>
    </>
  )
}