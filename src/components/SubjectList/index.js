import React from 'react'
import './SubjectList.css'

function SubjectList(props) {
	return (
		<section className='SubjectList'>
			{props.children}
		</section>
	)
}

export { SubjectList }