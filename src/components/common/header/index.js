import React from 'react'
import './header.css'


const Header = () => {
  return (
    <div className='max-width header'>
      <img className='header-logo' src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='zomato-logo' />

      <div className='header-right'>
        <div className='header-location-search-container'>

          <div className='location-wrapper'>
            <div className='location-icon-name'>
              <i class="fi fi-rs-marker absolute-center location-icon"></i>
              <div>Mumbai </div>
            </div>
            <i class="fi fi-rs-caret-down absolute-center"></i>
          </div>

          <div className='location-search-seperator'></div>

          <div className='header-searchbar'>
            <i class="fi fi-rs-search  search-icon"></i>
            <input placeholder='Search for restaurant, cousine or a dish' className='search-input' />
          </div>

        </div>

        <div className='profile-wrappper'>
          <img src='https://www.pngkey.com/png/detail/157-1579943_no-profile-picture-round.pnghttps://www.pngkey.com/png/detail/157-1579943_no-profile-picture-round.png' alt='profile' className='header-profile-img' />
          <span className='header-username'>Roshan</span>
          <i class="fi fi-rs-angle-small-down absolute-center profile-options-icon"></i>
        </div>
      </div>

    </div>
  )
}

export default Header