import { useContext } from 'react'
import HHContext from '../../../Context'

import './CloseCalendarsBtn.css'

export default function CloseCalendarsBtn() {
	const {
		setOpenModal,
		setSchedules
	} = useContext(HHContext)
	return (
		<button
			className='CloseCalendarsBtn'
			onClick={() => {
				setOpenModal(false)
				setSchedules([])
			}}
		>
			<span>🙈</span><p>REGRESAR</p>
		</button>
	)
}
