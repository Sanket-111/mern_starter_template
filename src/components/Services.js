import React from 'react'
import { ServiceItem } from './ServiceItem'

export const Services = () => {
  return (
    <div className='container'>
      <h3 className='mt-4'>Services that we provide are:</h3>
        
      <div className="row card-group">
        <ServiceItem title="MIRROR" img_link="https://www.home-mechanic.in/wp-content/themes/home-mechanic/images/icons/mirror.png" desc1="Car Mirror replacement" price1="2000" />
        <ServiceItem title="BATTERY" img_link="https://www.home-mechanic.in/wp-content/themes/home-mechanic/images/icons/battery.png" desc1="Car Battery replacement" price1="3000" desc2="Car Battery Cable" price2="1000" />
        <ServiceItem title="TIRES" img_link="https://www.home-mechanic.in/wp-content/themes/home-mechanic/images/icons/tires.png" desc1="Tire replacement" price1="5000" desc2="Tire balancing" price2="1000" />
        <ServiceItem title="WINDOWS" img_link="https://www.home-mechanic.in/wp-content/themes/home-mechanic/images/icons/wiper-system.png" desc1="Power Windows" price1="4000" desc2="Window Motor Regulator" price2="1000" />
        <ServiceItem title="FILTERS" img_link="https://www.home-mechanic.in/wp-content/themes/home-mechanic/images/icons/filter.png" desc1="AC Filter" price1="2000" desc2="Air Filter" price2="1000" desc3="Fuel Filter" price3="3000" desc4="Oil Filter" price4="4000"  />
        <ServiceItem title="DOORS" img_link="https://www.home-mechanic.in/wp-content/themes/home-mechanic/images/icons/Doors.png" desc1="Door Lock" price1="500" desc2="Door Handle" price2="1000" />
        <ServiceItem title="HOME SERVICE" img_link="https://th.bing.com/th/id/R.8fd9ac102ad3058b62addd7f35625c03?rik=YAprbdqP%2f%2ft8Ng&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fK%2fs%2f8%2ff%2fl%2fV%2fsimple-orange-house-hi.png&ehk=9gGtlN01fo999tFouvoiAe%2b5rNYge2KHNG59si2fJMw%3d&risl=&pid=ImgRaw&r=0" desc1="Pick-up" price1="500" desc2="Delivery" price2="500" desc3="Pick-up + Delivery" price3="800" />
      </div>
    </div>
  )
}
