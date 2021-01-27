import React from 'react';
import  s from './ProfileInfo.module.css';


/*let s = {
//'item': 'Profile_item__10O_i'
}*/

const ProfileInfo = () => {
return (
    <div>
        <div>
            <img className={s.open} src='https://www.spellbrand.com/images/blog/images/neon-logo-designs.jpg'/>
        </div>
        <div>
            <img className={s.ava} src='https://cdn.shopify.com/s/files/1/0023/8469/1252/products/LED-Tiger_5000x.jpg?v=1587676083'/>
        </div>
    </div>
)
}

export default ProfileInfo;