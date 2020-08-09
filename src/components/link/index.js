import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'


const LinkComponent = ({href , styleType, title}) => {
    return (
        <Link to={href} className={styles[`${styleType}`]}>{title}</Link>
    )
}

export default LinkComponent