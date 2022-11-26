import React from 'react'

export const ServiceItem = (props) => {
    // const { title, img_link, desc1, desc2, desc3, desc4, price } = props

  return (
      <div className="col-4">
        <div className="card border-warning mt-3 ml-auto mr-auto" style={{width: '18rem', backgroundColor: '#f4f4f4'}}>
                <img className="card-img-top" src={props.img_link} alt="logo" style={{height: '5rem', width: '5rem', marginLeft: '6rem'}} />
                <div className="card-body">
                <h5 className="card-title text-center" style={{textDecoration: 'underline'}}>{props.title}</h5>
                <p className="card-text">
                    <ul>
                        {(props.desc1) &&
                            <li>{props.desc1} = <span style={{color: 'green', fontWeight: 'bold'}}>₹ {props.price1} /-</span></li>
                        }       
                        {(props.desc2) &&
                            <li>{props.desc2} = <span style={{color: 'green', fontWeight: 'bold'}}>₹ {props.price2} /-</span></li>
                        }       
                        {(props.desc3) &&
                            <li>{props.desc3} = <span style={{color: 'green', fontWeight: 'bold'}}>₹ {props.price3} /-</span></li>
                        }       
                        {(props.desc4) &&
                            <li>{props.desc4} = <span style={{color: 'green', fontWeight: 'bold'}}>₹ {props.price4} /-</span></li>
                        }       
                    </ul>
                </p>
        </div>
        </div>
    </div>

  )
}