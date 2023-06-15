import React from 'react'

const CardItem = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

const Header = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

const Body = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

const Footer = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

CardItem.Header = Header
CardItem.Body = Body
CardItem.Footer = Footer

export default CardItem