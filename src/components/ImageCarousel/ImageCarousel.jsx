import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';   
import styles from './imageCarousel.module.css';

const ImageCarousel = () => {
    return (
        <div className={styles.imageContainer}>
            <Carousel autoPlay infiniteLoop stopOnHover>
                <div className={styles.images}>
                    <img src="https://images.unsplash.com/photo-1641377209113-882b2ec9668e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className={styles.images}>
                    <img src="https://images.unsplash.com/photo-1641450745761-b553b3eecee1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div className={styles.images}>
                    <img src="https://images.unsplash.com/photo-1637247474560-d6d681aa7a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>
    )
}

export default ImageCarousel
