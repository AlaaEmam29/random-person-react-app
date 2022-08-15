import React from 'react'
import { useGlobalContext } from './context'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

export default function App() {
  const {person , loading , title , value ,setValue ,fetchApi} = useGlobalContext();
  
const handleValue = (e) => {
if(e.target.classList.contains("icon"))
{
  const label = e.target.dataset.label
  setValue(person[label])
}
}
  return (
    <>
    <section className="py-5 vh-100  d-flex flex-column align-items-center justify-content-center">
      
    <div className='block bcg-black'></div>
    <div className='block '>
      <div className='container shadow'>
        <img
          alt='random user'
          className='user-img shadow'
          src={(person && person.large) || defaultImage}
          />
        <p className='user-title'>My {title}  is</p>
        <p className='user-value'>{value}</p>
        <div className='values-list'>
          <button
            className='icon'
            data-label='name'
            onMouseOver={handleValue}
          >
            <FaUser />
          </button>
          <button
            className='icon'
            data-label='email'
            onMouseOver={handleValue}
          >
            <FaEnvelopeOpen />
          </button>
          <button className='icon' data-label='age' onMouseOver={handleValue}>
            <FaCalendarTimes />
          </button>
          <button
            className='icon'
            data-label='location'
            onMouseOver={handleValue}
          >
            <FaMap />
          </button>
          <button
            className='icon'
            data-label='phone'
            onMouseOver={handleValue}
          >
            <FaPhone />
          </button>
          <button
            className='icon'
            data-label='password'
            onMouseOver={handleValue}
          >
            <FaLock />
          </button>
        </div>
        <button className='btn btn-primary px-4' type='button' onClick={fetchApi} >
          {loading ? 'loading...' : 'random user'}
        </button>
      </div>
    </div>
    </section>
    </>
  )
}
