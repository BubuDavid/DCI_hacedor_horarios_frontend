import './SubjectsSection.css'
import { useContext } from 'react'
import { HHContext } from '../HHContext'
import { SubjectList } from '../SubjectList'
import { SubjectItem } from '../SubjectItem'


function SubjectsSection() {
	const {
		loading,
		error,
		subjects,
	} = useContext(HHContext)
	return (
		<div className='SubjectsSection'>
			<h2 className='SubjectsSection__Header'>
				Materias Enero-Junio
			</h2>

			<SubjectList>
				{subjects.map(subject => (
					<SubjectItem
						subject={subject}
						key={subject._ID}
					/>
				))}
			</SubjectList>
		</div>
	)
}

export { SubjectsSection }