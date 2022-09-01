import React from 'react'
import '../header/header.css'
import ExploreIcon from '@mui/icons-material/Explore';

function Header() {
  return (
      <div>
          <nav className='nav--bar'>
              <p className='title'>Travel with Me</p>
              <ExploreIcon fontSize="small" className='nav--icon'/>  
        </nav>
      
      </div>
  )
}

export default Header