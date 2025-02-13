import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <header>
        <main>
            <h2>Logo</h2>
            <ul>
                <li>
                  <Link href='/'>
                  Home
                  </Link>
                  </li>
                <li>
                <Link href='/about'>
                About
                  </Link>
                  </li>
                <li>
                  <Link href='/course'>
                  Course
                  </Link></li>
            </ul>
        </main>
      </header>
    </div>
  )
}
