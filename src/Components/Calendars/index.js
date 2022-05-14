import { useContext } from 'react'
import HHContext from '../Context'

import './Calendars.css'

export default function Calendars() {
	const {
		schedules
	} = useContext(HHContext)

	console.log(schedules)
	return (
		<div>Calendars</div>
	)
}
