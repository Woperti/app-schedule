import React from 'react'

const Footer = () => {
    let date = new Date().getFullYear()

  return (
    <div>

        <p>{date}</p>
    </div>
  )
}

export default Footer