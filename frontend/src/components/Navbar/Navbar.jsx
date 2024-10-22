import React from 'react'

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Categories",
      path: "/categories",
    },
    {
      name: "All Podcasts",
      path: "/all-podcasts",
    },
  ]
  return (
    <nav>
      <div>
        <div className='logo brand-name'>
          <h1>Podcast</h1>
        </div>
        <div className=''></div>
        <div className=''></div>
      </div>
    </nav>
  )
}

export default Navbar
