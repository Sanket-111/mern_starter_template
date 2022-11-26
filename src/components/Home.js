import React from 'react'

export const Home = () => {

  return (
    <>
    <div className='container text-center mt-4'>
        <h2>SRS - Motor Services</h2>
        <img className='mt-4 img-fluid' src="https://cdn.pixabay.com/photo/2018/09/12/07/40/car-mechanic-3671448__480.png" alt="" style={{width: '600px', height: '300px', border: '2px solid black'}} />

    </div>

    <div className="container">
        <p style={{fontSize: '2rem'}} className='mt-4'>Welcome to SRS - Motor Services. <br /> We provide servicing at your doorstep! Just contact us & book an appointment! </p>
    </div>
    </>
  )
}
