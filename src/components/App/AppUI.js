import React, { useContext } from 'react'
import { LeftSection } from '../LeftSection'
import { RightSection } from '../RightSection'
import { Header } from '../Header'
import { SubjectsSection } from '../SubjectsSection'
import { Footer } from '../Footer'
import { YourSubjectsSection } from '../YourSubjectsSection'
import { SubmitButton } from '../SubmitButton'
import { Modal } from '../Modal'
import { Calendars } from '../Calendars'
import { HHContext } from '../HHContext'

function AppUI() {
	const {
		openModal
	} = useContext(HHContext)
	
	return (
		<React.Fragment>
			{!openModal && (
				<>
				<LeftSection>
					<Header />
					<SubjectsSection />
				</LeftSection>
				<RightSection>
					<YourSubjectsSection />
					<SubmitButton />
				</RightSection>
				</>
			)
			}

			{openModal && (
				<Modal>
					<Calendars />
				</Modal>
			)}
			<Footer
				active={true} />
		</React.Fragment>
	)
}

export { AppUI };