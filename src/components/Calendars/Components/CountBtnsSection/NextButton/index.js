import React, {useContext} from 'react'
import { CCContext } from '../../CalendarsContext'
import './NextButton.css'

function NextButton() {
	// Use Context
	const {
		current,
		setCurrentFixed,
		schedules
	} = useContext(CCContext)

	return (
		<button 
		className= {current === schedules.length ? 'NextButton disabled' : 'NextButton'}
			onClick={() => setCurrentFixed(current + 1)}
		>
			👉
		</button>
	)
}

export { NextButton }