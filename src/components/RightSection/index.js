import React from 'react'
import './RightSection.css'

function RightSection(props) {
	return (
		<div className='RightSection'>
			{ props.children }
		</div>
	)
}

export { RightSection }