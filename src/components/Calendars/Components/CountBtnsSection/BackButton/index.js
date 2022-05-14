import React, {useContext} from 'react'
import { CCContext } from '../../CalendarsContext'
import './BackButton.css'

function BackButton() {
	// Use Context
	const {
		current,
		setCurrentFixed
	} = useContext(CCContext)

	return (
		<button 
			className= {current === 1 ? 'BackButton disabled' : 'BackButton'}
			onClick={() => {
				setCurrentFixed(current - 1)
			}}
		>
			👈
		</button>
	)
}

export { BackButton }