import React, {useContext, useState} from 'react'
import { HHContext } from '../HHContext'
import { CloseModalBtn } from './components/CloseModalBtn'
import { ScheduleCounter } from './components/ScheduleCounter'
import { Calendar } from './components/Calendar'
import './Calendars.css'

function Calendars() {
	const {
		schedules,
		setOpenModal
	} = useContext(HHContext)
	const [current, setCurrent] = useState(1)
	return (
		<>
			<CloseModalBtn
				setOpenModal
			/>

			{
				// Esto tiene que ser su propia componente
				// Por el momento le puse un div
			}
			<div>
				{schedules.map((schedule, index) => {
					index++
					return <ScheduleCounter
					setCurrent = {setCurrent}
					isCurrent = {current === index}
					index = { index }
					key = { index }
						/>
				})}
			</div>

			{
				// Esto tiene que ser su propia componente
				// Por el momento le puse un div
			}
			<div>
				<Calendar
					schedule={schedules[current - 1]}
					index = {current}
				/>
			</div>
		</>
	)
}

export { Calendars }