import React from 'react'

const Rank = ({user}) => {
	const {entries,nombre}=user;
	return (
		<div className='flex flex-column items-center'>
			<div className='f3 dark-gray'>
				{`Hola ${nombre}, hasta el momento has ingresado...`}
			</div>
			<div className='f1 black'>
				{entries+ ' fotos'}
			</div>
		</div>
		)
}

export default Rank;