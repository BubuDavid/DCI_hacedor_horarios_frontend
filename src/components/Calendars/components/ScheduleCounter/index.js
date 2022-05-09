import React from 'react'
import './ScheduleCounter.css'

function ScheduleCounter({ index, isCurrent, setCurrent }) {
	return (
		<button
			className={isCurrent ? 'scheduleCounter current' : 'scheduleCounter'}
			onClick={()=> setCurrent(index)}
			>
				{index}
			</button>
	)
}

export {ScheduleCounter}