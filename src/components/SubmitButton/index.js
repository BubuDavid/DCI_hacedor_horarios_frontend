import { useContext } from 'react'
import './SubmitButton.css'
import { HHContext } from '../HHContext'
import { useCallHHAPI } from '../HHContext/customHooks'

const fastAPIGetScheduleURL = process.env.REACT_APP_FASTAPI_API_URL_GET

function SubmitButton() {
	const {
		yourSubjects,
		setOpenModal,
		schedules,
		setSchedules
	} = useContext(HHContext)
	const {
		makeSchedules
	} = useCallHHAPI(schedules, setSchedules)

	return (
		<button
			className='SubmitButton'
			id='SubmitButton'
			onClick={async () => {
				let thisBtn = document.getElementById('SubmitButton')
				thisBtn.style.opacity = 0.3
				thisBtn.style.pointerEvents = 'none'
				let body_request = {
					"subjects": yourSubjects.map(subject => subject.NAME)
				}
				await makeSchedules(fastAPIGetScheduleURL, body_request)
				setOpenModal(true)
				thisBtn.style.opacity = 1
				thisBtn.style.pointerEvents = 'auto'
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