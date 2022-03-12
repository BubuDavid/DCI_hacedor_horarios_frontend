import React from 'react'
import './LeftSection.css'

function LeftSection(props) {
	return (
		<div className='LeftSection'>
			{ props.children }
		</div>
	)
}

export { LeftSection }