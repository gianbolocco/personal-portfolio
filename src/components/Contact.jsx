import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className="flex justify-center items-center">
        <form
          action='https://getform.io/slug'
          method='POST'
          className='flex flex-col w-full md:w-7/12'
        >
          <input
            type='text'
            name='name'
            placeholder='Nombre'
            className='p-2 bg-transparent border-1 rounded-md focus:outline-none'
          />
          <input
            type='text'
            name='email'
            placeholder='Email'
            className='my-2 p-2 bg-transparent border-1 rounded-md focus:outline-none'
          />
          <textarea
            name='message'
            placeholder='Mensaje'
            rows='10'
            className='mb-4 p-2 bg-transparent border-1 rounded-md focus:outline-none'
          >
          {/* <button
            type='button'
            className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white'
          > Enviar </button> */}

          </textarea>
        </form>
      </div>

    </div>
  )
}

export default Contact