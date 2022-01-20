import React from 'react'
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import './social.css'

const Social = () => {
    return (
        <div>
            <div className="title" id="profile"><h1 className="joinOur">Join Our Community</h1>
                <div className="underline"></div>
            </div>
<div className="socialcontainer">

<div class="social-icons">
        <a href="" class="social-icon social-icon--codepen">
        <i className="fab fa-linkedin-in"></i>
          <div class="tooltip">Like:620</div>
        </a>
        <a href="" class="social-icon social-icon--github">
        <i class="fab fa-github"></i>
            <div class="tooltip">Like:250</div>
          </a>
          <a href="" class="social-icon social-icon--twitter">
          <i class="fab fa-twitter"></i>
            <div class="tooltip">Followers:13K</div>
          </a>
          <a href="" class="social-icon social-icon--youtube">
          <i class="fab fa-youtube"></i>
            <div class="tooltip">Subscriber:22K</div>
          </a>
          <a href="" class="social-icon social-icon--instagram">
          <i className="fab fa-instagram"></i>
            <div class="tooltip">Followers:1.2K</div>
          </a>
          <a href="" class="social-icon social-icon--facebook">
          <i class="fab fa-facebook-f"></i>
            <div class="tooltip">Friends:7K</div>
          </a>
    </div>
</div>
        </div>
    )
}

export default Social
