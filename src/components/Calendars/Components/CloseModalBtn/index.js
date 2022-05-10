import React, { useContext } from 'react'
import { HHContext } from '../../../HHContext'
import './CloseModalBtn.css'

function CloseModalBtn() {
	const {
		openModal,
		setOpenModal
	} = useContext(HHContext)
	return (
		<button
				className='closeBtn'
				onClick={() => setOpenModal(!openModal)}
			>
				Regresar 👈
			</button>
	)
}

export {CloseModalBtn}