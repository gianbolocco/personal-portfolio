import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <h1 className='text-center text-3xl'>Contacto</h1>
      <div className="flex justify-center items-center">
        <form
          action='https://getform.io/f/agdpzvob'
          method='POST'
          className='flex mx-5 flex-col w-full md:w-7/12'
        >
          <input
            type='text'
            name='name'
            placeholder='Nombre'
            required
            className='p-2 mt-2 bg-transparent border-1 rounded-md focus:outline-none'
          />
          <input
            type='text'
            name='email'
            placeholder='Email'
            required
            className='my-2 p-2 bg-transparent border-1 rounded-md focus:outline-none'
          />
          <textarea
            name='message'
            placeholder='Mensaje'
            rows='10'
            required
            className='mb-4 p-2 bg-transparent border-1 rounded-md focus:outline-none'
          />
          <button
            type='submit'
            className="cursor-pointer text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gray-700 drop-shadow-md hover:bg-gray-950 transition-all"> Enviar </button>

        </form>
      </div>

    </div>
  )
}

export default Contact