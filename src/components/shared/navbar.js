import React from 'react';

const NavBar = ({onRouteChange, issignedin, logout}) => {
	const logoutAndRedirect=()=>{
		logout();
		onRouteChange('signin');
	}
	if(issignedin === true){
		return (
			<nav className="flex bb b--white-10 bg-dark-gray justify-end ">
			  	<div className="flex-grow pa1 flex items-center">
			  	<p className="pointer f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 mr1" onClick={logoutAndRedirect}>Sign out</p>
			  	</div>
			</nav>
		)
	}else{
	return(
		<nav className="flex bb b--white-10 bg-dark-gray justify-end ">
		  <div className="flex-grow pa1 flex items-center">
		  <p className="pointer f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 mr1" onClick={()=>onRouteChange('signup')}>Sign Up</p>
		  <p className="pointer f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" onClick={()=>onRouteChange('signin')}>Sign In</p>
		  </div>
		</nav>

		)
		}

};

export default NavBar;