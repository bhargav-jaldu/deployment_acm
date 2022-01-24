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
            <div className={styles.card} data-aos="fade-up">
                <a href="/#" target="_blank">https://www.instagram.com/acm_vitap/</a>
            </div>
        </div>
    )
}

export default NewsLetter
