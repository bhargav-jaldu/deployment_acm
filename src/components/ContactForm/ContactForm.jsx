import { TextField } from '@material-ui/core'
import React, {useEffect} from 'react'
import styles from './contactForm.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Aos from 'aos'
import "aos/dist/aos.css"
import { Typography } from '@material-ui/core';

const ContactForm = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className="title" id="contactUs"><h1 className={styles.titleHeading}>Contact Form</h1>
                <div className="underline"></div>
            </div>
        <div className={styles.container}>
            <div className={styles.background}></div>

            <div className={styles.contactContainer} > {/* display: flex */}
                <div className={styles.textFieldsContainer} data-aos="fade-right">
                    <h1>Get in Touch</h1>
                    <h4 style={{color: 'rgb(141, 141, 141)'}}>We're open to any suggestions or simply have a chat</h4>

                    <TextField variant="outlined" label="Name: " fullWidth></TextField>
                    <TextField variant="outlined" label="Mail: " fullWidth></TextField>
                    <TextField
                        variant="outlined" label="Message"
                        multiline
                        minRows={3}
                        maxRows={4}
                    />

                    <button className={styles.button}>Send</button>
                </div>

                {/* infoContainer */}
                <div className={styles.infoContainer} data-aos="fade-left">
                    <h1>Contact Information</h1>

                    <div className={styles.content}>
                        <LocationOnIcon />
                        <p>Vellore Institute of Technology, Amaravathi</p>
                    </div>
                    <div className={styles.content}>
                        <EmailIcon />
                        <p> &nbsp;john.19bce2902@vitap.ac.in</p>
                    </div>
                    <div className={styles.content}>
                        <PhoneIcon />
                        <p>+91 8392930023</p>
                    </div>

                    {/* <div className={styles.icons}>
                        <a href="#" style={{color: 'blue'}}><i className="fab fa-facebook"></i></a>
                        <a href="#" style={{color: 'red'}}><i className="fab fa-instagram"></i></a>
                        <a href="#" style={{color: 'blue'}}><i className="fab fa-linkedin-in"></i></a>
                    </div> */}
                </div>
            </div>
        </div>
        </div>
    )
}

export default ContactForm
