import { useState, useContext } from "react"
import "./YourSubjectsSection.css"
import { HHContext } from "../HHContext"
import { SubjectItem } from "../SubjectItem"
import { SubjectList } from "../SubjectList"

function YourSubjectsSection() {
	const {
		yourSubjects
	} = useContext(HHContext)

	return (
		<div className='YourSubjectsSection'>
			<h2 className='YourSubjectsSection__Header'>
				Tus Materias para Enero-Junio
			</h2>

			<SubjectList>
				{yourSubjects.map(subject => (
					<SubjectItem
						subject={subject}
						key={subject._ID}
					/>
				))}
			</SubjectList>
		</div>

	)
}

export { YourSubjectsSection }