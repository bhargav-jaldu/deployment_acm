import React from 'react'
import styles from './main.module.css'
import { Typography, Button } from '@material-ui/core'
import Video from './acmVideo.mp4'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>    
            <div className={styles.part2}>
                    <video loop autostart autoPlay={true} muted src={Video} type="video/mp4" />
            </div>
        </div>
        <div className={styles.part1}>
        <div>
            <h1 className={styles.title}>NEVER STOP TO </h1>
            <h1 className={`${styles.title} ${styles.text_typing}`}>EXPLORE THE WORLD </h1>
        </div><br />
        <Typography className={styles.content} variant="body1">The ACM (Association for Computing Machinery), founded in 1947, is the largest and oldest international scientific and industrial computer society. Through its many Special Interest Group s, the ACM fosters research and communication in a broad range of computing areas.</Typography><br />
        {/* <button className={styles.join}>Explore <ArrowForwardIosIcon style={{fontSize: '17px'}} /></button> */}
        <div className={styles.btnContainer}>
            <button className={styles.button}>
                <span className={styles.circle}>
                    <span className={`${styles.icon} ${styles.arrow}`}></span>
                </span>
                <span className={styles.text}><a href="#about">EXPLORE MORE</a></span>
            </button>
        </div>
    </div>
        </div>
    )
}

export default MainPage
