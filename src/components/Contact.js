import React from 'react'

export const Contact = () => {
  return (
    <>
    <h3 className='container' style={{textDecoration: 'underline'}}>Contact Us:</h3>
    <div className='container mt-4' style={{fontSize: '2rem'}}>
      <span style={{fontSize: '1.5rem'}}>&#128222;</span> <span style={{fontWeight: 'bold'}}>Phone:</span> <a style={{textDecoration: 'none'}} href="tel:+911234567890">+91 1234567890</a> 
      <br />
      <span style={{fontSize: '1.5rem'}}>&#128336;</span> <span><span style={{fontWeight: 'bold'}}>Time:</span> 9:00 A.M. - 6:00 P.M.</span> 
    </div>

    <br />

    <div className="container" style={{fontSize: '1.5rem'}}>
      <p>Just call us & inform about the services you require!</p>

      <p>You can also email us & we'll reach out to you soon!</p>

      <span style={{fontSize: '1.5rem'}}>&#128231;</span> <span><span style={{fontWeight: 'bold'}}>Email:</span> <a style={{textDecoration: 'none'}} href="mailto:contact@srs-ms.com">contact@srs-ms.com</a> </span> 
    </div>
    </>
  )
}
