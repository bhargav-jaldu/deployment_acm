import React from 'react'
// import styles from './footer.module.css'
// import { Typography, TextField, Button } from '@material-ui/core'
import Acmlogo from '../../svgs/Acmlogo.png'
import './footer.css'

const Footer = () => {
    return (
<footer>
      <div class="row">
      
      <div className="center">
          <img src={Acmlogo} alt="Acm Logo" style={{width: '90px', background: 'white', borderRadius: '50%'}} /> <br />
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/1200px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png" alt="" style={{width: '100px'}} /> */}
          <p className="font">ACM - A new notion for next generation</p>
      </div>

 <div class="imageFooter">
          <img src="https://vitap.ac.in/wp-content/themes/vit/assets/images/formlogo.png" style={{maxWidth: '300px'}} alt="" /> <br />
      </div>

      <div class="col-md-5 col-sm-5">
          <h4 class="text-light">Contact us</h4> <br />
          {/* <p class="text-muted">Follow us..Let us be Social!</p> <br /> */}
          <h4>VIT-AP University, G-30, Inavolu, Beside AP <br/>  Secretariat Amaravati, Andhra Pradesh </h4>
          <h4>522237</h4><br />
          <h5>acm@gmail.com</h5> <br />
          <p><a href="https://chat.whatsapp.com/JOU6jHJNVPq2PZ8jO4iuOO">Whatsapp</a></p> <br />
          <p class="pt-4 text-muted">
          <span style={{fontFamily: 'Comfortaa', fontSize: '12px'}}>Copyright © 2022 by ACM Student Club</span></p> <br />
        </div>
        </div>

        <div className="developed">
            <h3>Developed and Managing By <a href="https://www.linkedin.com/in/bhargav-jaldu-697488196/" target="_blank">Bhargav Jaldu</a>, <a href="https://www.linkedin.com/in/inukollu-yasas-chandra-490732120/" target="_blank">Yasas Inukollu</a> and <a href="https://kotakarthikreddy.github.io/" target="_blank">Kota Karthik</a> </h3>
        </div>
  </footer>
    )
}

export default Footer
