import React, {useContext} from 'react'
import { HHContext } from '../../../../HHContext'
import { CCContext } from '../../CalendarsContext'
import './BackButton.css'

function BackButton() {
	// Use Context
	const {
		current,
		setCurrentFixed
	} = useContext(CCContext)

	const {
		setSchedules
	} = useContext(HHContext)

	return (
		<button 
			className= {current === 1 ? 'BackButton disabled' : 'BackButton'}
			onClick={() => {
				setCurrentFixed(current - 1)
				setSchedules([])
			}}
		>
			👈
		</button>
	)
}

export { BackButton }