import React from 'react'
import { createTable } from './auxiliarFunctions'
import './Calendar.css'

function Calendar() {
	const table = createTable()
	return (
		<div
			className='CalendarContainer'
			ref={(nodeElement) => {nodeElement && nodeElement.appendChild(table)}}
		></div>
	)
}

export { Calendar }