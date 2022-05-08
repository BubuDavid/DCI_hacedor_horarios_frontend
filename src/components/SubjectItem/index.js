import { useContext } from 'react'
import './SubjectItem.css'
import { HHContext } from '../HHContext'


function SubjectItem({ subject }) {
	const {
		toggleSelectSubject
	} = useContext(HHContext)
	
	return (
		<li
			className='SubjectItem'
			onClick={() => toggleSelectSubject(subject._ID)}
		>
			<span
				className={ 
					subject.selected ? 'IconContainer selected' : 'IconContainer'
				}
			>
				🐝
			</span>
			{subject.NAME}
		</li>
	)
}

export { SubjectItem }