import React from 'react'

const NavBar = ({showLoginHandler, showRegisterHandler, showLogOut, logOutHandler}) => {
  
  const firmName = localStorage.getItem('firmName')

  return (
    <div className="navSection">
      
        <div className="logo">
        <img src="/assets/logo.jpg" alt="logo" style={{height : "60px" , width : "60px" , marginLeft : "25px"}} />
        </div>
        <div className="company">
         Vendor Dashboard
        </div>
        <div className="firmName">
            <h4>Firname : {firmName}</h4>
        </div>
        <div className="userAuth">
          {!showLogOut ?  <>
           <span onClick={showLoginHandler}>Login / </span>
          <span onClick={showRegisterHandler}>Register</span>
          </> : <span onClick={logOutHandler}
          className='logout'
          >Logout</span>  }
          
        </div>
    </div>
  )
}

export default NavBar