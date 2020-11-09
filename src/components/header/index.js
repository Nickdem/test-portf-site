import React from 'react'
import './header.sass'

export default function Header() {
  return (
    <header>
      <button type='button'>&infin;	MENU</button>
      <nav>
        <ul>
          <li>HOME</li>
          <li>ABOUT ME</li>
          <li>PORTFOLIO</li>
          <li>CONTACTS</li>
        </ul>
      </nav>
    </header>
  )
}