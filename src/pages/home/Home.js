import React from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <main className='home-container'>
        <article> 
          <img id="squeak-logo" src="/img/squeak-inverted.png" alt="Squeak logo" />
          <h1>SQUEAK</h1>
          <h2>Join and start squeaking! </h2>
          <div className='flex user-container'>
            <section>
              <p className='on-hover' onClick={() => navigate('/register')}>Register now</p>
            </section>
            <section>
              <p className='on-hover' onClick={() => navigate('/login')}>Log in</p>
            </section>
          
          </div>
          
        </article>
       
      </main>
    </>
  )
}

export default Home