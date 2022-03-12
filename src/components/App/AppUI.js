import React from 'react'
import { LeftSection } from '../LeftSection'
import { RightSection } from '../RightSection'
import { Header } from '../Header'
import { SubjectsSection } from '../SubjectsSection'
import { YourSubjectsSection } from '../YourSubjectsSection'
import { SubmitButton } from '../SubmitButton'

function AppUI() {
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
		</React.Fragment>
	)
}

export { AppUI };