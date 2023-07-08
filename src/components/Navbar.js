import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand" style={{fontFamily: 'Courier New', fontWeight: 'revert'}} href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2 my-1">
                <button key="world" className='myBtn' onClick={()=>{props.setCategory("home")}}>Home</button>
                </li>
                <li className="nav-item mx-2 my-1">
                <button key="business" className='myBtn' onClick={()=>{props.setCategory("business")}}>Business</button>
                </li>
                <li className="nav-item mx-2 my-1">
                <button key="entertainment" className='myBtn' onClick={()=>{props.setCategory("entertainment")}}>Entertainment</button>
                </li>
                <li className="nav-item mx-2 my-1">
                <button key="food" className='myBtn' onClick={()=>{props.setCategory("general")}}>General</button>
                </li>
                <li className="nav-item mx-2 my-1">
                <button key="health" className='myBtn' onClick={()=>{props.setCategory("health")}}>Health</button>
                </li>
                <li className="nav-item mx-2 my-1">
                <button key="science" className='myBtn' onClick={()=>{props.setCategory("science")}}>Science</button>
                </li>
                <li className="nav-item mx-2 my-1">
                <button key="sports" className='myBtn' onClick={()=>{props.setCategory("sports")}}>Sports</button>
                </li>
                <li className="nav-item mx-2 my-1">
                <button key="politics" className='myBtn' onClick={()=>{props.setCategory("technology")}}>Technology</button>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    </div>
  )
}