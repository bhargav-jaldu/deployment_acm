import React, {useEffect} from 'react'
import styles from './newsLetter.module.css'
import Aos from 'aos'
import "aos/dist/aos.css"

const NewsLetter = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    return (
        <div className={styles.container} data-aos="zoom-out">
            <h1>News Letter</h1>
            {/* <p>Technology Evolution is ACM'S local coverage</p> */}
            <div className={styles.card} data-aos="fade-up">
                <a href="https://drive.google.com/drive/folders/1Injn891YXjtCaIK-SGUVboa-RoYhn6Kj?usp=sharing" target="_blank" className={styles.link}>Our Mailing List</a>
            </div>
        </div>
    )
}

export default NewsLetter
