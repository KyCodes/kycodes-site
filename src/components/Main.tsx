import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from '../styles/Main.module.css'

export default function Main() {
    return (
        <div className={styles.container}>
            <a href='mailto&#58;ky%6Cer&#64;k%7&#57;&#46;c%&#54;F%64e&#115;' className={styles.card}>
                <h1>Inquire about KyCodes custom app and web development so your next project is here!</h1>
                <p>Make more!</p>
            </a>
            <a href='https://ideality.dev/' className={styles.card}>
                <StaticImage placeholder='blurred' imgStyle={{ borderRadius: '8px' }} src='../images/ideality-banner.webp' alt="Ideality App Banner" />
                <p>Ideality</p>
            </a>
            <a href='https://honeylocustfilm.com/' className={styles.card}>
                <StaticImage placeholder='blurred' imgStyle={{ borderRadius: '8px' }} src='../images/honeylocust-banner.webp' alt="Honey Locust Film Banner" />
                <p>Honey Locust Film</p>
            </a>
        </div>
    )
}