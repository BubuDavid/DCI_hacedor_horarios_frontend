import React, { useContext } from 'react'
import { HHContext } from '../../../HHContext'
import './CloseModalBtn.css'

function CloseModalBtn() {
	const {
		openModal,
		setOpenModal,
		setSchedules
	} = useContext(HHContext)
	return (
		<button
				className='closeBtn'
			onClick={() => {
				setOpenModal(!openModal)
				setSchedules([])
			}}
			>
				Regresar 👈
			</button>
	)
}

export {CloseModalBtn}