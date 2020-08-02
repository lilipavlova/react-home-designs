import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'


const LinkComponent = ({href , style, title}) => {
    return (
            <Link to={href} className={styles[`${style}`]}>{title}</Link>
    )
}

export default LinkComponent