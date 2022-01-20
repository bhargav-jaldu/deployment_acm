import React from 'react'
// import styles from './footer.module.css'
// import { Typography, TextField, Button } from '@material-ui/core'
import Acmlogo from '../../svgs/Acmlogo.png'
import './footer.css'

const Footer = () => {
    return (
//         <footer class="footer">
//               <div id="d3"></div>
//   <div class="login_1">
//       <ul class="footer_img">
//           <li><img src="./logo/logo.jpeg" alt="logo" width="300px;" /></li>
//       </ul>
//   </div>

//   <div class="footer_socialicons">
//       <ul>
//           <li><a href="https://www.linkedin.com/company/harmony-os-club-vit-ap/" target="_blank"><img src={Acmlogo} /></a></li>
//           <li><a href="" target="_blank"><img src="./images/insta_icon.png" /></a></li>
//       </ul>
//   </div>
//   <p>ACM Student Club VIT-AP</p>
// </footer>

<footer>
      <div class="row">
        <div class="col-md-5 col-sm-5">
          <h4 class="text-light">Contact us</h4> <br />
          <p class="text-muted">Follow us..Let us be Social!</p> <br />
          <h3>VIT-AP University, G-30, Inavolu, Beside AP <br/>  Secretariat Amaravati, Andhra Pradesh </h3>
          <h3>522237</h3><br />
          <h5>acm@gmail.com</h5> <br />
          <p class="pt-4 text-muted">
          <span style={{fontFamily: 'Comfortaa', fontSize: '12px'}}>Copyright © 2022 by ACM Student Club</span></p> <br />
        </div>
      
 <div class="imageFooter">
          <img src="https://vitap.ac.in/wp-content/themes/vit/assets/images/formlogo.png" style={{maxWidth: '300px'}} alt="" /> <br />
      </div>

      <div className="center">
          <img src={Acmlogo} alt="" style={{width: '90px', background: 'white', borderRadius: '50%'}} /> <br />
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/1200px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png" alt="" style={{width: '100px'}} /> */}
          <p className="font">ACM - A new notion for next generation</p>
      </div>
        </div>
  </footer>
    )
}

export default Footer

 {/* <ul id="menu">
             <li><a href="#"><i class="fab fa-discord"  onclick="window.open('https://twitter.com/cosmos77794503','_blank')"></i></a></li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <li><a href="#"><i class="fa fa-linkedin" style={{color: '#0077b5'}}  onclick="window.open('https://www.linkedin.com/in/inukollu-yasas-chandra-490732120/','_blank')"></i></a></li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <li><a href="#"><i class=" fab fa-github" style={{color:'black'}}  onclick="window.open('https://github.com/yasas2002','_blank')"></i></a></li>&nbsp;&nbsp;  &nbsp; &nbsp; &nbsp;
 <li><a href="#"><i class="fa fa-facebook" style={{color:"#3b5998"}}  onclick="window.open('https://www.facebook.com/yasas.chandra.35/','_blank')"></i></a></li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <li><a href="#"><i class="fa fa-twitter"   style={{color:"#1DA1F2"}} onclick="window.open('https://twitter.com/cosmos77794503','_blank')"></i></a></li>&nbsp; &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp;
           <li><a href="#"><i class="fa fa-instagram" style={{color: '#bc2a8d'}} 

  onclick="window.open('https://www.instagram.com/yasasinukollu/','_blank')"></i></a></li>&nbsp; &nbsp; 
          </ul> */}
