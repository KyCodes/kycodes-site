import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__logowrapper}>
                <StaticImage placeholder='blurred' src='../images/kycodes-full.webp' alt="KyCodes LLC Logo" />
            </div>
            <a className={styles.header__email} href='mailto&#58;ky%6Cer&#64;k%7&#57;&#46;c%&#54;F%64e&#115;'>k&#121;ler&#64;ky&#46;code&#115;</a>
        </header>
    )
}
