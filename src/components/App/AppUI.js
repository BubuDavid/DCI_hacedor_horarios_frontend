import React, { useContext } from 'react'
import { useState } from 'react'
import { LeftSection } from '../LeftSection'
import { RightSection } from '../RightSection'
import { Header } from '../Header'
import { SubjectsSection } from '../SubjectsSection'
import { YourSubjectsSection } from '../YourSubjectsSection'
import { SubmitButton } from '../SubmitButton'
import { Modal } from '../Modal'
import { Calendars } from '../Calendars'
import { HHContext } from '../HHContext'

function AppUI() {
	const {
		openModal,
		setOpenModal
	} = useContext(HHContext)
	
	return (
		<React.Fragment>
			<LeftSection>
				<Header />
				<SubjectsSection />
			</LeftSection>
			<RightSection>
				<YourSubjectsSection />
				<SubmitButton />
			</RightSection>

			{openModal && (
				<Modal>
					<Calendars />
				</Modal>
			)
			}
		</React.Fragment>
	)
}

export { AppUI };