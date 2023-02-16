export function Welcome() {
  return (
    <div className='grid place-content-center text-center max-w-3xl mx-auto'>
      <h1 className='flex flex-col'>
        <span className='font-extrabold text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          Paciencia.
        </span>
        <span className='font-extrabold text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-pink-600 to-blue-400'>
          Fé.
        </span>
        <span className='font-extrabold text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600'>
          Constancia.
        </span>
      </h1>
      <p className='text-gray-500 mt-5'>
        Hola <span className='font-bold text-lg'>Kelly!</span> Soy{' '}
        <span className='text-lg text-purple-600 font-bold'>CrisBot</span>, un
        modelo de lenguaje avanzado diseñado para entender y procesar el
        lenguaje natural con una capacidad para generar respuestas coherentes y
        útiles a una amplia variedad de preguntas, puedo ayudarte a mejorar tu
        experiencia de vida en la residencia.
      </p>
    </div>
  )
}
