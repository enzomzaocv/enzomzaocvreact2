import React from 'react';

const NavBar = () => {
	return(
		<nav className="flex bb b--white-10 bg-dark-gray justify-end ">

		  <div className="flex-grow pa3 flex items-center">
		    <a className="f6 link dib white dim mr3 mr4-ns" href="www.google.com">About</a>
		    <a className="f6 link dib white dim mr3 mr4-ns" href="www.google.com">Sign In</a>
		    <a className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Sign Up</a>
		  </div>
		</nav>
		)
};

export default NavBar;