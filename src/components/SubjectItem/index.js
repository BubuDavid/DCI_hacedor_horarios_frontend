import { useContext } from 'react'
import './SubjectItem.css'
import { HHContext } from '../HHContext'


function SubjectItem({ subject }) {
	const {
		toggleSelectSubject
	} = useContext(HHContext)
	
	const opacityBee = {
		opacity: subject.selected ? '1' : '0'
	}
	return (
		<li
			className='SubjectItem'
			onClick={() => toggleSelectSubject(subject._ID)}
		>
			<span
				className='IconContainer'
				style={opacityBee}
			>
				🐝
			</span>
			{subject.NAME}
		</li>
	)
}

export { SubjectItem }