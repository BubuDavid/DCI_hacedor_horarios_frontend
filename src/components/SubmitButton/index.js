import { useContext, useState } from 'react'
import './SubmitButton.css'
import { HHContext } from '../HHContext'
import { useCallHHAPI } from '../HHContext/customHooks'

function SubmitButton() {
	const { yourSubjects } = useContext(HHContext)
	const [schedules, setSchedules] = useState([])
	const {
		scheduleLoading,
		scheduleError,
		makeSchedules
	} = useCallHHAPI(setSchedules)

	return (
		<button
			className='SubmitButton'
			onClick={() => {
				let url = 'http://localhost:8000/get-schedule'
				let body_request = {
					"subjects": yourSubjects.map(subject => subject.NAME)
				}
				makeSchedules(url, body_request)
			}}
			style={{
				opacity: yourSubjects.length ? '1' : '0.8',
				pointerEvents: yourSubjects.length ? 'auto' : 'none'
			}}
		>
			Hacer Horarios
		</button>
	)
}

export { SubmitButton } 