import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import classes from './MainNavigation.module.css'
function MainNavigation() {
  return (
    <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li >
                    <Link to='/'>Home</Link>
                </li>
                <li >
                    <Link to='/products'>producst</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation