import React from 'react'
import { BackButton } from './BackButton'
import { NextButton } from './NextButton'
import { CurrentButton } from './CurrentButton'
import './CountBtnsSection.css'

function CountBtnsSection() {
	return (
		<div
			className='CountBtnsSection'
		>
			<BackButton />
			<CurrentButton />
			<NextButton />
			
		</div>
	)
}

export { CountBtnsSection }