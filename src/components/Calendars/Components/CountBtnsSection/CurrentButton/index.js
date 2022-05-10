import React, {useContext} from 'react'
import { CCContext } from '../../CalendarsContext'
import './CurrentButton.css'

function CurrentButton() {
	// Use Context
	const {
		current,
		setCurrentFixed
	} = useContext(CCContext)

	return (
		<button
			className='CurrentButton'
		>
			Horario {current}
		</button>
	)
}

export { CurrentButton }