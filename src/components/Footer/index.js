import React from 'react'

import './Footer.css'

function Footer({ active }) {
	return (
		<div
			className= {active ? 'Footer active' : 'Footer'}
		>Hecho por <a href='https://github.com/BubuDavid'> @Buberto </a> 💖 para la DCI 🐝</div>
	)
}

export {Footer}