import React from 'react'
import './CloseModalBtn.css'

function CloseModalBtn({ setOpenModal }) {
	return (
		<button
				className='closeBtn'
				onClick={() => setOpenModal(false)}
			>
				👈
			</button>
	)
}

export {CloseModalBtn}