import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <footer>
        © {new Date().getFullYear()}, Built by SJL
        {` `}
      </footer>
    </div>
  )
}

export default Footer
