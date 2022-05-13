import React, {useContext} from 'react'

import { CloseModalBtn } from './Components/CloseModalBtn'
import { CountBtnsSection } from './Components/CountBtnsSection'
import { Calendar } from './Components/Calendar'
import { ConfigBtnsSection } from './Components/ConfigBtnsSection'
import { ScheduleSummary } from './Components/ScheduleSummary'
import { NotFoundMessage } from './Components/NotFoundMessage'
import { CCProvider } from './Components/CalendarsContext'
import { HHContext } from '../HHContext'

import './Calendars.css'
import { Footer } from '../Footer'

function Calendars() {
	const { schedules } = useContext(HHContext)
	return (
		<CCProvider>
			<CloseModalBtn />
			{schedules.length > 0 && (
				<>
					<CountBtnsSection />
					<ScheduleSummary />
					<Calendar />
					{/* <ConfigBtnsSection /> */}
				</>
			)}
			{schedules.length <= 0 && (
				<NotFoundMessage />
			)}

			<Footer />
		</CCProvider>
	)
}

export { Calendars }