import React from 'react'
import './Header.css'

function Header() {
	return (
		<>
			<h1
				className='Header'
			>
				🐝 ¡Hacedor de Horarios DCI!
			</h1>
			<span className='pageDescription'>
				<ol>
					<li>1. Escoge las materias que quieras tomar.</li>
					<li>2. Da click en el boton <span>Hacer Horarios</span>.</li>
					<li>3. Espera y ¡observa la magia!</li>
				</ol>
				<span>Nota: </span> Pueden haber materias de las cuales no puedas tener ningún horario
			</span>
		</>
	)
}

export { Header } 