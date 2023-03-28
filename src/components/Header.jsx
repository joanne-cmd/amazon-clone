import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img
            className='header__logo'
            src='https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo.png'
            alt='amazon'
        />

        <div className='header__search'>
            <input className='header__searchInput'type="text"/>
            {/* logo */}
        </div>

        <div className='header__nav'>
        <div className='header__option'>

        </div>

        <div className='header__option'>

        </div>

        <div className='header__option'>

        </div>

        </div>

    </div>
  )
}

export default Header