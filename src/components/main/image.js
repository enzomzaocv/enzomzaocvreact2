import React from 'react';
import './image.css'
const Image =({imageDetect, bbox})=>{
	return(
		<div className='flex justify-center'>
			<div className='absolute mt2'>
				<img id='imagen' alt='facerecognition' src={imageDetect} width='500px' height='auto'/>
				<div className='facebox ba' style={{top:bbox.top_row, bottom:bbox.bottom_row, right:bbox.right_col, left:bbox.left_col}}></div>
			</div>
		</div>
		)
}

export default Image;