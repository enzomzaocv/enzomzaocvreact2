import React from 'react';
import Tilt from 'react-tilt';
import robot from './robot.png';

const Logo =()=>{
	return(
		<div>
			<Tilt className="Tilt ma4 bg-light-gray  " options={{ max : 35 }} style={{ height: 120, width: 120 }} >
			 	<div className="Tilt-inner pa2 tc"> <img src={robot} alt='chip' style={{paddingTop:'5px'}} /> </div>
			</Tilt>
		</div>
		)
}

export default Logo;