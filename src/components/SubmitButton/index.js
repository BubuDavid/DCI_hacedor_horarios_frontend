import { useContext, useState } from 'react'
import './SubmitButton.css'
import { HHContext } from '../HHContext'
import { useCallHHAPI } from '../HHContext/customHooks'

const fastAPIGetScheduleURL = process.env.REACT_APP_FASTAPI_API_URL_GET

function SubmitButton() {
	const {
		yourSubjects,
		openModal,
		setOpenModal,
		schedules,
		setSchedules
	} = useContext(HHContext)
	const {
		scheduleLoading,
		scheduleError,
		makeSchedules
	} = useCallHHAPI(schedules, setSchedules)

	return (
		<button
			className='SubmitButton'
			onClick={async () => {
				let body_request = {
					"subjects": yourSubjects.map(subject => subject.NAME)
				}
				await makeSchedules(fastAPIGetScheduleURL, body_request)
				setOpenModal(true)
			}}
			style={{
				opacity: yourSubjects.length ? '1' : '0.3',
				pointerEvents: yourSubjects.length ? 'auto' : 'none'
			}}
		>
			Hacer Horarios
		</button>
	)
}

export { SubmitButton } 