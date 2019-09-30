import React from 'react';

const NavBar = ({onRouteChange}) => {
	return(
		<nav className="flex bb b--white-10 bg-dark-gray justify-end ">

		  <div className="flex-grow pa1 flex items-center">
		    <p className="f6 link dib white dim mr3 mr4-ns pointer" onClick={()=>onRouteChange('home')}>Home</p>
		    <p className="f6 link dib white dim mr3 mr4-ns pointer" onClick={()=>onRouteChange('signin')}>Sign In</p>
		    <p className="pointer f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" onClick={()=>onRouteChange('signup')}>Sign Up</p>
		  </div>
		</nav>
		)
};

export default NavBar;